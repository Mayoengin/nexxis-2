// src/components/ui/FeatureItem.vue
<template>
  <li class="feature-item" :class="{ 'with-icon': hasIcon }">
    <template v-if="hasIcon">
      <div class="icon-wrapper">
        <div class="pulse-circle"></div>
        <i class="feature-icon">{{ icon }}</i>
      </div>
      <span><slot></slot></span>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </li>
</template>

<script setup>
import { defineProps, computed } from 'vue';

// Define props
const props = defineProps({
  icon: {
    type: String,
    default: null
  },
  delay: {
    type: Number,
    default: 0
  }
});

const hasIcon = computed(() => !!props.icon);
</script>

<style scoped>
.feature-item {
  position: relative;
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
  color: #34495e;
  opacity: 0;
  animation: fade-up 0.5s ease forwards;
  animation-delay: v-bind('delay + "s"');
}

.feature-item.with-icon {
  display: flex;
  align-items: center;
}

.icon-wrapper {
  position: relative;
  width: 40px;
  height: 40px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon {
  font-size: 1.5rem;
  z-index: 2;
}

.pulse-circle {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(52, 152, 219, 0.15);
  border-radius: 50%;
  animation: pulse-animation 2s infinite;
}

/* Standard feature item (without icon) - for the precision and flexibility containers */
.feature-item:not(.with-icon) {
  padding-left: 30px;
  text-align: left;
}

.feature-item:not(.with-icon)::before {
  content: '*';
  position: absolute;
  left: 0;
  color: #3498db;
  font-weight: bold;
  font-size: 1.5rem;
}

@keyframes fade-up {
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes pulse-animation {
  0% { transform: scale(0.8); opacity: 0.7; }
  50% { transform: scale(1.2); opacity: 0.3; }
  100% { transform: scale(0.8); opacity: 0.7; }
}
</style>