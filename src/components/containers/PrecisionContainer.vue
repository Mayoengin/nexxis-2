// src/components/containers/PrecisionContainer.vue
<template>
  <div class="container-base precision-container">
    <div class="container-content">
      <h2 class="section-title">The precision you need</h2>
      
      <p class="section-description">
        High resolution, uncompressed medical images are presented with pixel-perfect precision and shared more efficiently.
      </p>
      
      <FeatureList 
        :items="features"
        color="blue"
      />
      
      <NavigationButtons 
        :showBack="true"
        :showNext="true"
        :showHome="false"
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
  'Raw, uncompressed images – eliminating artifacts',
  'Near-zero latency for perfect hand-eye coordination',
  '4K end-to-end'
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