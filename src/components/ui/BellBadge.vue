// src/components/ui/BellBadge.vue
<template>
  <div class="badge-bell" :class="{ 'active': isActive }" @click="$emit('toggle')">
    <div class="bell-icon">{{ bellIcon }}</div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// Define props
const props = defineProps({
  bellIcon: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
});

// Define emits
defineEmits(['toggle']);
</script>

<style scoped>
.badge-bell {
  position: absolute;
  top: -15px;
  right: -15px;
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(231, 76, 60, 0.5);
  transform: scale(0);
  animation: fade-in-bell 1s ease 1.8s forwards;
  cursor: pointer;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.badge-bell.active {
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  box-shadow: 0 4px 10px rgba(46, 204, 113, 0.5);
}

.bell-icon {
  color: white;
  font-weight: bold;
  font-size: 1.6rem;
  animation: ring 1s ease 2s;
}

.badge-bell:hover .bell-icon {
  animation: ring 0.5s ease;
}

@keyframes ring {
  0%, 100% { transform: rotate(0); }
  20% { transform: rotate(-15deg); }
  40% { transform: rotate(15deg); }
  60% { transform: rotate(-15deg); }
  80% { transform: rotate(15deg); }
}

@keyframes fade-in-bell {
  0% { transform: scale(0); opacity: 0; }
  70% { transform: scale(1.1); opacity: 0.9; }
  100% { transform: scale(1); opacity: 1; }
}
</style>