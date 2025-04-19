// src/components/ui/NavigationButtons.vue
<template>
  <div class="button-container">
    <!-- Back Button (if not the first page) -->
    <button 
      v-if="showBack" 
      class="action-button back-button" 
      @click="$emit('go-back')"
    >
      <span class="button-text">Back</span>
      <span class="button-icon">{{ backIcon }}</span>
    </button>
    
    <!-- Next Button (if not the last page) -->
    <button 
      v-if="showNext" 
      class="action-button next-button" 
      @click="$emit('go-next')"
    >
      <span class="button-text">Next</span>
      <span class="button-icon">{{ nextIcon }}</span>
    </button>
    
    <!-- Home Button (if not on home page) -->
    <button 
      v-if="showHome" 
      class="action-button home-button" 
      @click="$emit('go-home')"
    >
      <span class="button-text">Home</span>
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
  backIcon: {
    type: String,
    default: '◀'
  },
  nextIcon: {
    type: String,
    default: '▶'
  },
  homeIcon: {
    type: String,
    default: '🏠'
  }
});

defineEmits(['go-back', 'go-next', 'go-home']);
</script>

<style scoped>
@import '../../styles/buttons.css';

.button-container {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 2rem;
}
</style>
