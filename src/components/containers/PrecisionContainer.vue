// src/components/containers/PrecisionContainer.vue
<template>
  <div class="container-base precision-container">
    <div class="container-content">
      <BrandTitle />
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
        @go-back="$emit('go-back')"
        @go-next="$emit('go-next')"
      />
    </div>
  </div>
</template>

<script setup>
import BrandTitle from '../ui/BrandTitle.vue';
import FeatureList from '../ui/FeatureList.vue';
import NavigationButtons from '../ui/NavigationButtons.vue';
import { CONTAINERS } from '../../constants/navigation';

// Features data
const features = [
  'Raw, uncompressed images – eliminating artifacts',
  'Near-zero latency for perfect hand-eye coordination',
  '4K end-to-end'
];

// Define emits
defineEmits(['go-back', 'go-next', 'go-home']);
</script>

<style>
@import '../../styles/base.css';
@import '../../styles/containers.css';
@import '../../styles/buttons.css';
</style>
