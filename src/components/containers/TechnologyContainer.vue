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
      
      <NavigationButtons 
        :showBack="true"
        :showNext="true"
        :showHome="true"
        :isAnimating="isAnimating"
        :backIcon="BACK_ICON"
        :nextIcon="NEXT_ICON"
        :homeIcon="HOME_ICON"
        @go-back="$emit('go-back')"
        @go-next="$emit('go-next')"
        @go-home="$emit('go-home')"
      />
    </div>
  </div>
</template>

<script setup>
import NavigationButtons from '../ui/NavigationButtons.vue';
import { BACK_ICON, NEXT_ICON, HOME_ICON } from '../../icons/index';

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