// src/components/containers/WelcomeContainer.vue
<template>
  <div class="container-base welcome-box">
    <div class="container-content">
      <BrandTitle />
      
      <h1>
        <span class="title-word">Subscribe</span>
        <span class="title-word">to this</span>
        <span class="title-word">product</span>
      </h1>
      
      <div class="product-name">Uncompressed AV-over-IP platform</div>
      
      <ul class="feature-list">
        <li class="feature-item" v-for="(feature, index) in features" :key="index">
          <div class="icon-wrapper">
            <div class="pulse-circle"></div>
            <i class="feature-icon">{{ feature.icon }}</i>
          </div>
          <span>{{ feature.text }}</span>
        </li>
      </ul>
      
      <div class="button-container">
        <button class="action-button quote-button" @click="toggleQuoteButton">
          <span class="button-text">Get your quote</span>
          <span class="button-icon">💼</span>
        </button>
        
        <button class="action-button buy-button" @click="toggleBuyButton">
          <span class="button-text">Where to buy</span>
          <span class="button-icon">🛒</span>
        </button>
        
        <button class="action-button read-button" @click="$emit('read-more')">
          <span class="button-text">Read more</span>
          <span class="button-icon">📖</span>
        </button>
      </div>
      
      <!-- Bell Badge -->
      <div class="badge-bell" :class="{ 'active': bellActive }" @click="toggleBell">
        <div class="bell-icon">🔔</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BrandTitle from '../ui/BrandTitle.vue';

// Features data
const features = [
  { icon: '↔️', text: 'Share video/audio in and outside the OR' },
  { icon: '⚡', text: 'With near-zero latency & no compression' },
  { icon: '🔄', text: 'Flexible to meet the needs of any procedure' },
  { icon: '✨', text: '4K ready' }
];

// Reactive state for buttons and bell
const quoteButtonPressed = ref(false);
const buyButtonPressed = ref(false);
const bellActive = ref(false);

// Toggle functions
const toggleQuoteButton = () => {
  quoteButtonPressed.value = !quoteButtonPressed.value;
};

const toggleBuyButton = () => {
  buyButtonPressed.value = !buyButtonPressed.value;
};

const toggleBell = () => {
  bellActive.value = !bellActive.value;
};

// Define emits
defineEmits(['read-more']);
</script>

<style scoped>
/* Correct path going from src/components/containers to src/assets/styles */
@import '../../assets/styles/base.css';
@import '../../assets/styles/containers.css';
@import '../../assets/styles/buttons.css';
</style>