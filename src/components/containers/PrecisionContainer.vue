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
      
      <!-- Navigation buttons removed since we now use side arrows -->
    </div>
  </div>
</template>

<script setup>
import FeatureList from '../ui/FeatureList.vue';

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

// Define emits (keeping these for potential future use)
defineEmits(['go-back', 'go-next', 'go-home']);
</script>

<style scoped>
/* Import correct styles */
@import '../../styles/base.css';
@import '../../styles/containers.css';
@import '../../styles/buttons.css';
</style>