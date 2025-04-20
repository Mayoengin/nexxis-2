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

        <!-- Video Section (Right) -->
        <div class="video-section">
          <div class="video-box">
            <video
              ref="videoRef"
              class="full-video"
              controls
              autoplay
              muted
              playsinline
            >
              <source :src="currentVideo" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <!-- Video Thumbnails with actual images -->
          <div class="video-thumbnails">
            <div 
              v-for="(video, index) in videoOptions" 
              :key="index"
              class="video-thumbnail"
              :class="{ 'active': currentVideo === video.src }"
              @click="openVideoGallery(video.src)"
            >
              <img :src="video.thumbnail" alt="Video thumbnail" class="thumbnail-image" />
              
              <div class="thumbnail-overlay">
                <span class="thumbnail-label">{{ video.label }}</span>
                <span class="view-full-icon">🔍</span>
              </div>
            </div>
          </div>
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

// Define refs and state
const videoRef = ref(null);
const isMuted = ref(true);
const videoOptions = [
  { 
    src: '/output.mp4', 
    label: 'Surgical Procedure', 
    thumbnail: '/thumbnails/t1.PNG'
  },
  { 
    src: '/output1.mp4', 
    label: 'Endoscopic View', 
    thumbnail: '/thumbnails/t2.PNG'
  },
  { 
    src: '/output2.mp4', 
    label: 'OR Environment', 
    thumbnail: '/thumbnails/t3.PNG'
  },
  { 
    src: '/output3.mp4', 
    label: 'Remote Consultation', 
    thumbnail: '/thumbnails/t4.PNG'
  }
];
const currentVideo = ref(videoOptions[0].src);

const toggleMute = () => {
  if (videoRef.value) {
    videoRef.value.muted = !videoRef.value.muted;
    isMuted.value = videoRef.value.muted;
  }
};

const selectVideo = (videoSrc) => {
  currentVideo.value = videoSrc;
  // Reset video to beginning when switching
  if (videoRef.value) {
    videoRef.value.currentTime = 0;
    videoRef.value.play();
  }
};

// Function to open the video gallery
const openVideoGallery = (videoSrc) => {
  emit('open-video-gallery', videoSrc);
};

onMounted(() => {
  // Setup main video
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
const emit = defineEmits(['read-more', 'open-video-gallery']);
</script>

<style scoped>
/* Import the shared styles */
@import '../../styles/base.css';
@import '../../styles/containers.css';
@import '../../styles/buttons.css';

/* Custom styles specific to WelcomeContainer */
.features-video-container {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.title-word {
  display: inline-block;
  margin: 0 5px;
}

.product-name {
  font-size: 1.4rem;
  color: #34495e;
  margin-bottom: 20px;
}

/* Video specific styles */
.video-section {
  display: flex;
  flex-direction: column;
  width: 45%;
}

.video-box {
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 15px;
}

.full-video {
  width: 100%;
  max-height: 220px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.video-thumbnails {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
}

.video-thumbnail {
  height: 70px;
  border: 2px solid #3498db;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
}

.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnail-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.video-thumbnail:hover {
  transform: scale(1.05);
}

.video-thumbnail:hover .thumbnail-overlay {
  background: rgba(0, 0, 0, 0.1);
}

.video-thumbnail.active {
  border-color: #e74c3c;
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(231, 76, 60, 0.5);
}

.thumbnail-label {
  font-size: 0.75rem;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-bottom: 5px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
}

.view-full-icon {
  font-size: 1rem;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.video-thumbnail:hover .view-full-icon {
  opacity: 1;
}

/* Bell badge styles */
.badge-bell {
  position: absolute;
  top: -15px;
  right: -15px;
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(231, 76, 60, 0.5);
  transform: scale(0);
  animation: fade-in-bell 1s ease 1.8s forwards;
  cursor: pointer;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.badge-bell.active {
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  box-shadow: 0 4px 10px rgba(46, 204, 113, 0.5);
}

.bell-icon {
  color: white;
  font-weight: bold;
  font-size: 1.6rem;
  animation: ring 1s ease 2s;
}

.badge-bell:hover .bell-icon {
  animation: ring 0.5s ease;
}

/* Feature list container specific to welcome page */
.feature-list {
  width: 45%;
}
</style>