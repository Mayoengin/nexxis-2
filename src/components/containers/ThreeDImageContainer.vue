// src/components/containers/ThreeDImageContainer.vue
<template>
  <div class="container-base threed-container">
    <div class="container-content">
      <h2 class="section-title">3D imaging with MDSC-8232 M3D</h2>
      
      <div class="monitor-showcase">
        <div class="monitor-icon">🖥️</div>
        <div class="glasses-icon">👓</div>
      </div>
      
      <p class="section-description">
        The MDSC-8232 M3D is a 31-inch, 2D and 3D 4K surgical monitor that can be seamlessly integrated into Nexxis architectures. With this display integrated into your Nexxis system, 3D sources become part of the full integration, including support for inter-OR sharing, remote management, streaming and recording.
      </p>

      

    </div>
  </div>
</template>

<script setup>

// Animation state
const props = defineProps({
  isAnimating: {
    type: Boolean,
    default: false
  }
});

// Define emits
defineEmits(['go-back', 'go-next', 'go-home']);
</script>

<style scoped>
/* Correct path going from src/components/containers to src/assets/styles */
@import '../../styles/base.css';
@import '../../styles/containers.css';
@import '../../styles/buttons.css';
</style>