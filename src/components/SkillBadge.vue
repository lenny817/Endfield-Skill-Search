<template>
  <span class="skill-highlight" :style="badgeStyle">{{ skill }}</span>
</template>

<script lang="ts">
import { defineComponent, CSSProperties } from 'vue';

interface SkillColor {
  bg: string;
  text: string;
}

const skillColors: Record<string, SkillColor> = {
  効率: { bg: '#795548', text: '#fff' },
  治癒: { bg: '#009688', text: '#fff' },
  流回: { bg: '#2196F3', text: '#fff' },
  圧制: { bg: '#7F8C8D', text: '#fff' },
  昇揚: { bg: '#9C27B0', text: '#fff' },
  追撃: { bg: '#F44336', text: '#fff' },
  付術: { bg: '#1B5E20', text: '#fff' },
  破砕: { bg: '#E91E63', text: '#fff' },
  噴発: { bg: '#FF9800', text: '#fff' },
  残虐: { bg: '#1A237E', text: '#fff' },
  夜幕: { bg: '#5E35B1', text: '#fff' },
  切骨: { bg: '#90A4AE', text: '#fff' },
};

export default defineComponent({
  name: 'SkillBadge',
  props: {
    skill: String,
  },
  computed: {
    badgeStyle(): CSSProperties {
      const color = skillColors[this.skill || ''] || { bg: '#FFD700', text: '#1a1a1a' };
      return {
        backgroundColor: color.bg,
        color: color.text,
      };
    },
  },
});
</script>

<style scoped>
.skill-highlight {
  background-color: #ffd700;
  padding: 2px 6px;
  border-radius: 3px;
  font-weight: 600;
  color: #1a1a1a;
  display: inline-block;
}
</style>
