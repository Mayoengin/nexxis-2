// src/components/ui/SideNavigationArrows.vue
<template>
  <div class="side-navigation">
    <!-- Left/Back Arrow -->
    <button 
      v-if="showBack" 
      class="nav-arrow left-arrow" 
      @click="$emit('go-back')"
      :disabled="isAnimating"
      aria-label="Go back"
    >
      <span class="arrow-icon">◀</span>
    </button>
    
    <!-- Right/Next Arrow -->
    <button 
      v-if="showNext" 
      class="nav-arrow right-arrow" 
      @click="$emit('go-next')"
      :disabled="isAnimating"
      aria-label="Go next"
    >
      <span class="arrow-icon">▶</span>
    </button>
    
    <!-- Home Button (kept at bottom) -->
    <button 
      v-if="showHome" 
      class="home-button" 
      @click="$emit('go-home')"
      :disabled="isAnimating"
      aria-label="Go home"
    >
      <span class="button-icon">{{ homeIcon }}</span>
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  showBack: {
    type: Boolean,
    default: true
  },
  showNext: {
    type: Boolean,
    default: true
  },
  showHome: {
    type: Boolean,
    default: true
  },
  homeIcon: {
    type: String,
    default: '🏠'
  },
  isAnimating: {
    type: Boolean,
    default: false
  }
});

defineEmits(['go-back', 'go-next', 'go-home']);
</script>

<style scoped>
.side-navigation {
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Allow clicks to pass through the container */
  z-index: 100;
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(44, 62, 80, 0.7);
  border: 2px solid rgba(255, 255, 255, 0.6);
  color: white;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: auto; /* Make the button clickable */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.left-arrow {
  left: 20px;
}

.right-arrow {
  right: 20px;
}

.nav-arrow:hover:not(:disabled) {
  background: rgba(52, 152, 219, 0.8);
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

.nav-arrow:active:not(:disabled) {
  transform: translateY(-50%) scale(0.95);
}

.nav-arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.arrow-icon {
  display: inline-block;
}

/* Home button at the bottom */
.home-button {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  border-radius: 50px;
  background: linear-gradient(135deg, #16a085, #1abc9c);
  color: white;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: auto; /* Make the button clickable */
  box-shadow: 0 4px 15px rgba(22, 160, 133, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-button:hover:not(:disabled) {
  transform: translateX(-50%) translateY(-3px);
  box-shadow: 0 7px 20px rgba(22, 160, 133, 0.6);
}

.home-button:active:not(:disabled) {
  transform: translateX(-50%) translateY(-1px);
}

.home-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.button-icon {
  margin-left: 5px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .nav-arrow {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
  
  .left-arrow {
    left: 10px;
  }
  
  .right-arrow {
    right: 10px;
  }
  
  .home-button {
    padding: 10px 20px;
    font-size: 1rem;
  }
}
</style>