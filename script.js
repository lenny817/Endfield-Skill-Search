const { createApp } = Vue;

// スキルの色設定
const skillColors = {
    '効率': { bg: '#4CAF50', text: '#fff' },
    '治癒': { bg: '#81C784', text: '#fff' },
    '流回': { bg: '#2196F3', text: '#fff' },
    '圧制': { bg: '#7F8C8D', text: '#fff' },
    '昇揚': { bg: '#9C27B0', text: '#fff' },
    '追撃': { bg: '#F44336', text: '#fff' },
    '付術': { bg: '#9C27B0', text: '#fff' },
    '破砕': { bg: '#E91E63', text: '#fff' },
    '噴発': { bg: '#FF9800', text: '#fff' },
    '残虐': { bg: '#C62828', text: '#fff' },
    '夜幕': { bg: '#5E35B1', text: '#fff' },
    '切骨': { bg: '#90A4AE', text: '#fff' }
};

// ヘッダーコンポーネント
const HeaderComponent = {
    template: `
        <header>
            <h1>エンドフィールド スキル検索</h1>
            <p>スキルで絞り込んで一覧を表示</p>
        </header>
    `
};

// フッターコンポーネント
const FooterComponent = {
    template: `
        <footer class="footer">
            <p>&copy; 2026 Arknights: Endfield Skill Search</p>
        </footer>
    `
};

// スキルバッジコンポーネント
const SkillBadgeComponent = {
    props: {
        skill: String
    },
    template: `
        <span class="skill-highlight" :style="badgeStyle">{{ skill }}</span>
    `,
    computed: {
        badgeStyle() {
            const color = skillColors[this.skill] || { bg: '#FFD700', text: '#1a1a1a' };
            return {
                backgroundColor: color.bg,
                color: color.text
            };
        }
    }
};

// テーブル行コンポーネント
const TableRowComponent = {
    props: {
        item: Object
    },
    components: {
        SkillBadge: SkillBadgeComponent
    },
    template: `
        <tr>
            <td>{{ item.basicEffect }}</td>
            <td>{{ item.addedEffect }}</td>
            <td><SkillBadge :skill="item.skill"></SkillBadge></td>
            <td>{{ item.weapon1 }}</td>
            <td>{{ item.weapon2 }}</td>
        </tr>
    `
};

// テーブルコンポーネント
const DataTableComponent = {
    props: {
        data: Array
    },
    components: {
        TableRow: TableRowComponent
    },
    template: `
        <div class="table-wrapper">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>基礎効果</th>
                        <th>付加効果</th>
                        <th>スキル</th>
                        <th>武器①</th>
                        <th>武器②</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="data.length === 0">
                        <td colspan="5" class="empty-message">検索結果がありません</td>
                    </tr>
                    <TableRow v-for="item in data" :key="item.skill + item.weapon1" :item="item"></TableRow>
                </tbody>
            </table>
        </div>
    `
};

// フィルターセクションコンポーネント
const FilterSectionComponent = {
    props: {
        skillOptions: Array,
        basicEffectOptions: Array,
        skillFilter: String,
        basicEffectFilter: String
    },
    emits: ['update:skillFilter', 'update:basicEffectFilter', 'reset'],
    template: `
        <div class="filter-section">
            <div class="filter-group">
                <label for="skillFilter">スキルで絞り込み:</label>
                <select id="skillFilter" :value="skillFilter" @change="$emit('update:skillFilter', $event.target.value)">
                    <option value="">すべて表示</option>
                    <option v-for="skill in skillOptions" :key="skill" :value="skill">{{ skill }}</option>
                </select>
            </div>
            <div class="filter-group">
                <label for="basicEffectFilter">基礎効果で絞り込み:</label>
                <select id="basicEffectFilter" :value="basicEffectFilter" @change="$emit('update:basicEffectFilter', $event.target.value)">
                    <option value="">すべて表示</option>
                    <option v-for="effect in basicEffectOptions" :key="effect" :value="effect">{{ effect }}</option>
                </select>
            </div>
            <button class="reset-btn" @click="$emit('reset')">リセット</button>
        </div>
    `
};

// 統計情報コンポーネント
const StatsComponent = {
    props: {
        count: Number
    },
    template: `
        <div class="stats">
            <p>合計: <span>{{ count }}</span> 件</p>
        </div>
    `
};

// メインアプリケーションコンポーネント
const AppComponent = {
    components: {
        Header: HeaderComponent,
        Footer: FooterComponent,
        FilterSection: FilterSectionComponent,
        Stats: StatsComponent,
        DataTable: DataTableComponent
    },
    data() {
        return {
            allData: [],
            skillFilter: '',
            basicEffectFilter: ''
        };
    },
    computed: {
        skillOptions() {
            const skills = new Set(this.allData.map(item => item.skill));
            return Array.from(skills).sort();
        },
        basicEffectOptions() {
            const effects = new Set(this.allData.map(item => item.basicEffect));
            return Array.from(effects).sort();
        },
        filteredData() {
            let filtered = this.allData;

            if (this.skillFilter) {
                filtered = filtered.filter(item => item.skill === this.skillFilter);
            }

            if (this.basicEffectFilter) {
                filtered = filtered.filter(item => item.basicEffect === this.basicEffectFilter);
            }

            return filtered;
        }
    },
    methods: {
        async loadData() {
            try {
                const response = await fetch('data.json');
                this.allData = await response.json();
            } catch (error) {
                console.error('データの読み込みエラー:', error);
            }
        },
        resetFilters() {
            this.skillFilter = '';
            this.basicEffectFilter = '';
        }
    },
    mounted() {
        this.loadData();
    },
    template: `
        <div class="container">
            <Header></Header>
            <FilterSection 
                :skillOptions="skillOptions"
                :basicEffectOptions="basicEffectOptions"
                :skillFilter="skillFilter"
                :basicEffectFilter="basicEffectFilter"
                @update:skillFilter="skillFilter = $event"
                @update:basicEffectFilter="basicEffectFilter = $event"
                @reset="resetFilters"
            ></FilterSection>
            <Stats :count="filteredData.length"></Stats>
            <DataTable :data="filteredData"></DataTable>
            <Footer></Footer>
        </div>
    `
};

// アプリケーションの起動
createApp(AppComponent).mount('#app');
