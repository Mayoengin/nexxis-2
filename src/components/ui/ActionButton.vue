// src/components/ui/ActionButton.vue
<template>
  <button 
    class="action-button" 
    :class="[buttonType, { 'pressed': isPressed }]" 
    @click="$emit('click')"
  >
    <span class="button-text"><slot></slot></span>
    <span class="button-icon">{{ icon }}</span>
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// Define props
const props = defineProps({
  buttonType: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'quote', 'buy', 'read', 'back', 'next', 'home'].includes(value)
  },
  icon: {
    type: String,
    required: true
  },
  isPressed: {
    type: Boolean,
    default: false
  }
});

// Define emits
defineEmits(['click']);
</script>

<style scoped>
.action-button {
  position: relative;
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  z-index: 1;
}

.action-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.action-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.2);
}

.action-button:hover::before {
  opacity: 1;
}

.action-button:active {
  transform: translateY(1px);
}

.button-icon {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.action-button:hover .button-icon {
  transform: scale(1.2);
}

/* Button types */
.quote {
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.4);
}

.quote::before {
  background: linear-gradient(135deg, #2980b9, #3498db);
}

.quote.pressed {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.4);
}

.buy {
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: white;
  box-shadow: 0 4px 15px rgba(44, 62, 80, 0.4);
}

.buy::before {
  background: linear-gradient(135deg, #34495e, #2c3e50);
}

.buy.pressed {
  background: linear-gradient(135deg, #9b59b6, #8e44ad);
  box-shadow: 0 4px 15px rgba(155, 89, 182, 0.4);
}

.read {
  background: linear-gradient(135deg, #f39c12, #e67e22);
  color: white;
  box-shadow: 0 4px 15px rgba(243, 156, 18, 0.4);
}

.read::before {
  background: linear-gradient(135deg, #e67e22, #f39c12);
}

.back, .next {
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: white;
  box-shadow: 0 4px 15px rgba(44, 62, 80, 0.4);
}

.back::before, .next::before {
  background: linear-gradient(135deg, #34495e, #2c3e50);
}

.home {
  background: linear-gradient(135deg, #16a085, #1abc9c);
  color: white;
  box-shadow: 0 4px 15px rgba(22, 160, 133, 0.4);
}

.home::before {
  background: linear-gradient(135deg, #1abc9c, #16a085);
}
</style>