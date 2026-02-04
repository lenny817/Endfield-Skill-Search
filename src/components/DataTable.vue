<template>
  <div class="table-wrapper">
    <div class="data-grid">
      <div class="grid-header">
        <div class="grid-cell header-cell">基礎効果</div>
        <div class="grid-cell header-cell">付加効果</div>
        <div class="grid-cell header-cell">スキル</div>
        <div class="grid-cell header-cell">武器①</div>
        <div class="grid-cell header-cell">武器②</div>
      </div>
      <div v-if="data.length === 0" class="empty-message">検索結果がありません</div>
      <TableRow v-for="item in data" :key="item.skill + item.weapon1" :item="item"></TableRow>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TableRow from './TableRow.vue';

interface SkillData {
  basicEffect: string;
  addedEffect: string;
  skill: string;
  weapon1: string;
  weapon2: string;
}

export default defineComponent({
  name: 'DataTable',
  components: {
    TableRow,
  },
  props: {
    data: {
      type: Array as () => SkillData[],
      required: true,
    },
  },
});
</script>

<style scoped>
.table-wrapper {
  padding: 20px;
  background-color: white;
}

.data-grid {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.grid-header {
  display: grid;
  grid-template-columns: 200px 200px 170px 200px 200px;
  background-color: #1a1a1a;
  border-radius: 8px 8px 0 0;
}

.header-cell {
  background-color: #1a1a1a !important;
  color: #ffd700;
  font-weight: 600;
  padding: 20px 15px;
  text-align: left;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 0.95rem;
  border-radius: 8px 8px 0 0;
}

.grid-cell {
  padding: 20px 15px;
  background-color: white;
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  word-break: break-word;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
}

.grid-cell:last-child {
  border-right: none;
}

.empty-message {
  text-align: center;
  padding: 40px 15px;
  color: #ffd700;
  font-size: 1.1rem;
  background-color: white;
}
</style>
