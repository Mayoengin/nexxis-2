// src/components/containers/FlexibilityContainer.vue
<template>
  <div class="container-base flexibility-container">
    <div class="container-content">
      <BrandTitle />
      <h2 class="section-title">The flexibility you've always wanted</h2>
      
      <p class="section-description">
        Nexxis meets every requirement of any surgical procedure. Plug and play (new) devices, switch sources with ease, and display images where and when you need them for optimal viewing comfort and ergonomics. Without interruptions, as the entire platform can be maintained remotely.
      </p>
      
      <FeatureList 
        :items="features"
        color="green"
      />
      
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
import BrandTitle from '../ui/BrandTitle.vue';
import FeatureList from '../ui/FeatureList.vue';
import NavigationButtons from '../ui/NavigationButtons.vue';
import { BACK_ICON, NEXT_ICON, HOME_ICON } from '../../icons/index';

// Features data
const features = [
  'Simple to set up the OR (all you need is a single optical cable)',
  'Easy plug and play of devices',
  'Central & remote control'
];

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
/* Import correct styles */
@import '../../styles/base.css';
@import '../../styles/containers.css';
@import '../../styles/buttons.css';
</style>