<template>
  <div class="filter-section">
    <div class="filter-group">
      <label for="skillFilter">スキルで絞り込み:</label>
      <select
        id="skillFilter"
        :value="skillFilter"
        @change="$emit('update:skillFilter', $event.target.value)"
      >
        <option value="">すべて表示</option>
        <option v-for="skill in skillOptions" :key="skill" :value="skill">{{ skill }}</option>
      </select>
    </div>
    <div class="filter-group">
      <label for="basicEffectFilter">基礎効果で絞り込み:</label>
      <select
        id="basicEffectFilter"
        :value="basicEffectFilter"
        @change="$emit('update:basicEffectFilter', $event.target.value)"
      >
        <option value="">すべて表示</option>
        <option v-for="effect in basicEffectOptions" :key="effect" :value="effect">
          {{ effect }}
        </option>
      </select>
    </div>
    <button class="reset-btn" @click="$emit('reset')">リセット</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FilterSection',
  props: {
    skillOptions: {
      type: Array as () => string[],
      required: true,
    },
    basicEffectOptions: {
      type: Array as () => string[],
      required: true,
    },
    skillFilter: String,
    basicEffectFilter: String,
  },
  emits: ['update:skillFilter', 'update:basicEffectFilter', 'reset'],
});
</script>

<style scoped>
.filter-section {
  padding: 25px 20px;
  background: #1a1a1a;
  border-bottom: 2px solid #ffd700;
  display: flex;
  gap: 20px;
  align-items: flex-end;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 250px;
}

.filter-group label {
  font-weight: 600;
  color: #ffd700;
  font-size: 0.95rem;
}

.filter-group select {
  padding: 10px 15px;
  border: 2px solid #ffd700;
  border-radius: 5px;
  font-size: 1rem;
  background: #2d2d2d;
  color: #ffd700;
  cursor: pointer;
  transition: border-color 0.3s;
}

.filter-group select:hover {
  border-color: #ffff00;
}

.filter-group select:focus {
  outline: none;
  border-color: #ffff00;
  box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.3);
}

.reset-btn {
  padding: 10px 25px;
  background: #ffd700;
  color: #1a1a1a;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s;
  font-size: 1rem;
}

.reset-btn:hover {
  background: #ffff00;
}

@media (max-width: 768px) {
  .filter-section {
    flex-direction: column;
  }

  .filter-group {
    min-width: 100%;
  }
}
</style>
