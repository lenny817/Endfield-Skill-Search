<template>
  <div class="container">
    <AppHeader></AppHeader>
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
    <AppFooter></AppFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './components/Header.vue';
import AppFooter from './components/Footer.vue';
import FilterSection from './components/FilterSection.vue';
import Stats from './components/Stats.vue';
import DataTable from './components/DataTable.vue';

interface SkillData {
  basicEffect: string;
  addedEffect: string;
  skill: string;
  weapon1: string;
  weapon2: string;
}

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    FilterSection,
    Stats,
    DataTable,
  },
  data() {
    return {
      allData: [] as SkillData[],
      skillFilter: '',
      basicEffectFilter: '',
    };
  },
  computed: {
    skillOptions(): string[] {
      const skills = new Set(this.allData.map((item) => item.skill));
      return Array.from(skills).sort();
    },
    basicEffectOptions(): string[] {
      const effects = new Set(this.allData.map((item) => item.basicEffect));
      return Array.from(effects).sort();
    },
    filteredData(): SkillData[] {
      let filtered = this.allData;

      if (this.skillFilter) {
        filtered = filtered.filter((item) => item.skill === this.skillFilter);
      }

      if (this.basicEffectFilter) {
        filtered = filtered.filter((item) => item.basicEffect === this.basicEffectFilter);
      }

      return filtered;
    },
  },
  methods: {
    async loadData(): Promise<void> {
      try {
        const response = await fetch('/data.json');
        this.allData = await response.json();
      } catch (error) {
        console.error('データの読み込みエラー:', error);
      }
    },
    resetFilters(): void {
      this.skillFilter = '';
      this.basicEffectFilter = '';
    },
  },
  mounted(): void {
    this.loadData();
  },
});
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
</style>
