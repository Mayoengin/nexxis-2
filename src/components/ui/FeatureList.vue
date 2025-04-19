// src/components/ui/FeatureList.vue
<template>
  <ul :class="['feature-list-simple', colorClass]">
    <li v-for="(item, index) in items" :key="index" class="feature-item">
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  color: {
    type: String,
    default: 'blue', // blue, green, purple, orange
    validator: (value) => ['blue', 'green', 'purple', 'orange'].includes(value)
  }
});

// Compute the color class based on the color prop
const colorClass = computed(() => {
  const colorMap = {
    blue: 'color-blue',
    green: 'color-green',
    purple: 'color-purple',
    orange: 'color-orange'
  };
  
  return colorMap[props.color] || 'color-blue';
});
</script>

<style scoped>
.feature-list-simple {
  list-style: none;
  padding: 0;
  text-align: left;
  margin: 30px auto;
  width: 90%;
}

.feature-item {
  position: relative;
  padding-left: 30px;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: #34495e;
}

.feature-item::before {
  content: '*';
  position: absolute;
  left: 0;
  font-weight: bold;
  font-size: 1.5rem;
}

/* Color variants for the asterisks */
.color-blue .feature-item::before {
  color: #3498db;
}

.color-green .feature-item::before {
  color: #27ae60;
}

.color-purple .feature-item::before {
  color: #9b59b6;
}

.color-orange .feature-item::before {
  color: #e67e22;
}
</style>