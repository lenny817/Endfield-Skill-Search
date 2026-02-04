<template>
  <div class="grid-row">
    <div class="grid-cell">{{ item.basicEffect }}</div>
    <div class="grid-cell">{{ item.addedEffect }}</div>
    <div class="grid-cell"><SkillBadge :skill="item.skill"></SkillBadge></div>
    <div class="grid-cell">{{ item.weapon1 }}</div>
    <div class="grid-cell">{{ item.weapon2 }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SkillBadge from './SkillBadge.vue';

interface SkillData {
  basicEffect: string;
  addedEffect: string;
  skill: string;
  weapon1: string;
  weapon2: string;
}

export default defineComponent({
  name: 'TableRow',
  components: {
    SkillBadge,
  },
  props: {
    item: {
      type: Object as () => SkillData,
      required: true,
    },
  },
});
</script>

<style scoped>
.grid-row {
  display: grid;
  grid-template-columns: 200px 200px 170px 200px 200px;
  border-bottom: 1px solid #ddd;
}

.grid-cell {
  padding: 20px 15px;
  background-color: white;
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  word-break: break-word;
  box-sizing: border-box;
  border-right: 1px solid #ddd;
}

.grid-cell:last-child {
  border-right: none;
}
</style>
