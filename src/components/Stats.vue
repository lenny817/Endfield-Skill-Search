<template>
  <div class="stats">
    <p>
      合計: <span>{{ count }}</span> 件
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Stats',
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped>
.stats {
  padding: 15px 20px;
  background: #2d2d2d;
  border-bottom: 1px solid #ffd700;
}

.stats p {
  color: #ffd700;
  font-weight: 500;
}

.stats span {
  font-weight: 700;
  color: #ffff00;
  font-size: 1.1rem;
}
</style>
