<template>
  <footer class="footer">
    <p>&copy; 2026 Arknights: Endfield Skill Search</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppFooter',
});
</script>

<style scoped>
.footer {
  padding: 20px;
  background: #1a1a1a;
  border-top: 2px solid #ffd700;
  text-align: center;
  color: #ffd700;
  margin-top: 20px;
}
</style>
