// src/components/containers/FlexibilityContainer.vue
<template>
  <div class="container-base flexibility-container">
    <div class="container-content">
      <div class="brand-title">Nexxis</div>
      <h2 class="section-title">The flexibility you've always wanted</h2>
      
      <p class="section-description">
        Nexxis meets every requirement of any surgical procedure. Plug and play (new) devices, switch sources with ease, and display images where and when you need them for optimal viewing comfort and ergonomics. Without interruptions, as the entire platform can be maintained remotely.
      </p>
      
      <ul class="feature-list-simple">
        <li class="feature-item">Simple to set up the OR (all you need is a single optical cable)</li>
        <li class="feature-item">Easy plug and play of devices</li>
        <li class="feature-item">Central & remote control</li>
      </ul>
      
      <div class="button-container">
        <button class="action-button back-button" @click="$emit('go-back')">
          <span class="button-text">Back</span>
          <span class="button-icon">◀</span>
        </button>
        
        <button class="action-button next-button" @click="$emit('go-next')">
          <span class="button-text">Next</span>
          <span class="button-icon">▶</span>
        </button>
        
        <button class="action-button home-button" @click="$emit('go-home')">
          <span class="button-text">Home</span>
          <span class="button-icon">🏠</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Define emits
defineEmits(['go-back', 'go-next', 'go-home']);
</script>
<style scoped>
/* Correct path going from src/components/containers to src/assets/styles */
@import '../../styles/base.css';
@import '../../styles/containers.css';
@import '../../styles/buttons.css';


</style>