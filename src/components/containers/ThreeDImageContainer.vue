// src/components/containers/ThreeDImageContainer.vue
<template>
  <div class="container-base threed-container">
    <div class="container-content">
      <div class="brand-title">Nexxis</div>
      <h2 class="section-title">3D imaging with MDSC-8232 M3D</h2>
      
      <div class="monitor-showcase">
        <div class="monitor-icon">🖥️</div>
        <div class="glasses-icon">👓</div>
      </div>
      
      <p class="section-description">
        The MDSC-8232 M3D is a 31-inch, 2D and 3D 4K surgical monitor that can be seamlessly integrated into Nexxis architectures. With this display integrated into your Nexxis system, 3D sources become part of the full integration, including support for inter-OR sharing, remote management, streaming and recording.
      </p>
      
      <div class="translation-feature">
        <div class="display-icons">
          <span class="display-3d">3D</span>
          <span class="arrow-icon">→</span>
          <span class="display-2d">2D</span>
        </div>
        <p>3D source images are automatically translated into 2D or 3D for maximum visibility.</p>
      </div>
      
      <div class="button-container">
        <button class="action-button back-button" @click="$emit('go-back')">
          <span class="button-text">Back</span>
          <span class="button-icon">◀</span>
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
defineEmits(['go-back', 'go-home']);
</script>

<style scoped>
/* Correct path going from src/components/containers to src/assets/styles */
@import '../../styles/base.css';
@import '../../styles/containers.css';
@import '../../styles/buttons.css';


</style>