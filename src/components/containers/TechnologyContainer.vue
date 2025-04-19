// src/components/containers/TechnologyContainer.vue
<template>
  <div class="container-base technology-container">
    <div class="container-content">
      <div class="brand-title">Nexxis</div>
      <h2 class="section-title">Always up to date</h2>
      
      <p class="section-description">
        Built on a non-proprietary IP technology platform, Nexxis is ready for any new technology (such as 4K) as soon as you are. Scalable and flexible, Nexxis allows you to adapt as you need to and expand as you grow.
      </p>
      
      <ul class="feature-list-simple">
        <li class="feature-item">Always up to date with the latest networking and visualization technologies</li>
        <li class="feature-item">Easy to adopt new integration requirements in the OR</li>
        <li class="feature-item">Easy to connect new ORs to the network architecture</li>
        <li class="feature-item">Expansion results in lower TCO</li>
      </ul>
      
      <div class="certification-note">
        <div class="cert-icon">✅</div>
        <p>Certified as a medical device (CE/FDA), Nexxis is fit for use in the interventional OR. Every part of the solution has been designed and approved for use in a surgical environment.</p>
      </div>
      
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