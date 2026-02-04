<template>
  <header>
    <h1>エンドフィールド スキル検索</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppHeader',
});
</script>

<style scoped>
header {
  background: linear-gradient(135deg, #ffd700 0%, #ffc700 100%);
  color: #1a1a1a;
  padding: 30px 20px;
  text-align: center;
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

header p {
  font-size: 1.1rem;
  opacity: 0.9;
}
</style>
