// src/components/containers/CollaborationContainer.vue
<template>
  <div class="container-base collaboration-container">
    <div class="container-content">
      <h2 class="section-title">Easy to share and collaborate</h2>
      
      <p class="section-description">
        Images can be streamed in, between, and outside operating rooms (e.g. auditoriums) in real time. This makes it easy to educate, consult and collaborate with your peers. Recording is also possible for documentation purposes and clinical research.
      </p>
      
      <ul class="feature-list-simple">
        <li class="feature-item">Bi-directional inter-OR communication</li>
        <li class="feature-item">Physician interaction beyond the OR</li>
        <li class="feature-item">Streaming and recording</li>
        <li class="feature-item">Easy interactive education and training</li>
      </ul>
    
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