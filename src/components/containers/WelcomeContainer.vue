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
        <div class="features-video-container">
          <!-- Feature List (Left) -->
          <ul class="feature-list">
            <li class="feature-item" v-for="(feature, index) in features" :key="index">
              <div class="icon-wrapper">
                <div class="pulse-circle"></div>
                <i class="feature-icon">{{ feature.icon }}</i>
              </div>
              <span>{{ feature.text }}</span>
            </li>
          </ul>

          <!-- Video Box (Right) -->
          <!-- Video Box (Right) -->
          <div class="video-box">
            <video
              ref="videoRef"
              class="full-video"
              controls
              autoplay
              muted
              playsinline
            >
              <source src="/dog.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <!-- Audio Toggle Button -->
            <button class="audio-button" @click="toggleMute">
              {{ isMuted ? '🔇' : '🔊' }}
            </button>
          </div>
          </div>

      
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
import BrandTitle from '../ui/BrandTitle.vue';
import { ref, onMounted } from 'vue';

const videoRef = ref(null);
const isMuted = ref(true);

const toggleMute = () => {
  if (videoRef.value) {
    videoRef.value.muted = !videoRef.value.muted;
    isMuted.value = videoRef.value.muted;
  }
};

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.muted = isMuted.value;
  }
});

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
@import '../../styles/base.css';
@import '../../styles/containers.css';
@import '../../styles/buttons.css';
.video-box {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.full-video {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  border-radius: 0;
  box-shadow: none;
}

.audio-button {
  position: absolute;
  bottom: 20px;
  right: 30px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  padding: 0.6rem 0.8rem;
  cursor: pointer;
  z-index: 10;
  transition: background 0.3s ease;
}

.audio-button:hover {
  background: rgba(0, 0, 0, 0.8);
}



</style>