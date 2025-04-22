// src/components/containers/VideoGalleryContainer.vue
<template>
  <div class="container-base video-gallery-container">
    <button 
      class="close-button" 
      @click="handleClose"
      :disabled="isAnimating"
    >
      ✕
    </button>
    
    <div class="container-content">
      
      <div class="main-video-container">
        <video 
          ref="mainVideoRef" 
          class="main-video" 
          controls 
          autoplay 
          :src="currentVideo.src" 
          @volumechange="updateMuteState"
        ></video>
      </div>
      
      <div class="video-slider-container">
        <button 
          class="slider-nav prev-button" 
          @click="scrollSlider('left')"
          :disabled="sliderAtStart || isAnimating"
        >
          ◀
        </button>
        
        <div class="video-slider" ref="sliderRef">
          <div 
            v-for="(video, index) in videos" 
            :key="index" 
            class="slider-thumbnail" 
            :class="{ 'active': currentVideo.src === video.src }"
            @click="selectVideo(video)"
          >
            <img :src="video.thumbnail" alt="Video thumbnail" class="thumbnail-img" />
            <div class="thumbnail-overlay">
              <span class="play-icon">▶</span>
            </div>
          </div>
        </div>
        
        <button 
          class="slider-nav next-button" 
          @click="scrollSlider('right')"
          :disabled="sliderAtEnd || isAnimating"
        >
          ▶
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, inject } from 'vue';

// Props
const props = defineProps({
  initialVideoSrc: {
    type: String,
    default: ''
  },
  isAnimating: {
    type: Boolean,
    default: false
  }
});

// Define emits
const emit = defineEmits(['go-back']);

// Inject the video data provided by App.vue
const videos = inject('videoData');

// References
const mainVideoRef = ref(null);
const sliderRef = ref(null);
const isMuted = ref(true);
const sliderScrollPosition = ref(0);
const sliderMaxScroll = ref(0);

// Set initial video on component creation
const currentVideo = ref(findVideoBySource(props.initialVideoSrc) || videos[0]);

// Slider navigation state
const sliderAtStart = computed(() => {
  return sliderScrollPosition.value <= 0;
});

const sliderAtEnd = computed(() => {
  return sliderScrollPosition.value >= sliderMaxScroll.value;
});

// Methods
function findVideoBySource(src) {
  if (!src) return null;
  return videos.find(video => video.src === src);
}

function selectVideo(video) {
  if (props.isAnimating) return;
  
  currentVideo.value = video;
  
  // Reset video to beginning when switching and apply muted state
  if (mainVideoRef.value) {
    mainVideoRef.value.currentTime = 0;
    mainVideoRef.value.muted = isMuted.value;
    mainVideoRef.value.play();
  }
}

function handleClose() {
  console.log('Close button clicked, returning to welcome container');
  emit('go-back');
}

function updateMuteState() {
  if (mainVideoRef.value) {
    isMuted.value = mainVideoRef.value.muted;
  }
}

function scrollSlider(direction) {
  if (!sliderRef.value || props.isAnimating) return;
  
  const scrollAmount = 200; // Adjust as needed
  
  if (direction === 'left') {
    sliderRef.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    sliderRef.value.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
  
  // Update scroll position after scrolling
  setTimeout(() => {
    sliderScrollPosition.value = sliderRef.value.scrollLeft;
  }, 300);
}

function updateSliderScrollState() {
  if (!sliderRef.value) return;
  
  sliderScrollPosition.value = sliderRef.value.scrollLeft;
  sliderMaxScroll.value = sliderRef.value.scrollWidth - sliderRef.value.clientWidth;
}

// Lifecycle hooks
onMounted(() => {
  // Initialize video player
  if (mainVideoRef.value) {
    mainVideoRef.value.muted = isMuted.value;
  }
  
  // Initialize slider scroll values
  updateSliderScrollState();
  
  // Add scroll event listener to slider
  if (sliderRef.value) {
    sliderRef.value.addEventListener('scroll', updateSliderScrollState);
  }
  
  // Initialize with responsive slider updates
  window.addEventListener('resize', updateSliderScrollState);
});
</script>

<style scoped>
/* Import the shared styles */
@import '../../styles/base.css';
@import '../../styles/containers.css';
@import '../../styles/buttons.css';

/* Custom styles for the video gallery */
.video-gallery-container {
  max-width: 80%; /* Smaller container width */
  background-color: rgba(255, 255, 255, 0.7); /* Transparent background */
  backdrop-filter: blur(10px); /* Optional: adds a blur effect behind the container */
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5); /* Enhanced shadow */
  position: relative;
  padding: 25px; /* Reduced padding for smaller container */
}

.container-content {
  position: relative;
}

/* Close button styles */
.close-button {
  position: absolute;
  top: -20px;
  right: -20px; /* Positioned outside at the top-right */
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;
}

.close-button:hover:not(:disabled) {
  background: rgba(231, 76, 60, 0.9);
  transform: scale(1.1);
}

.close-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.main-video-container {
  margin: 10px 0 15px 0;
  display: flex;
  flex-direction: column;
}

.main-video {
  width: 100%;
  height: auto;
  max-height: 400px; /* Reduced height */
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  background-color: #000;
}

/* Video slider styles */
.video-slider-container {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 15px 0; /* Reduced margin */
}

.video-slider {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
  gap: 10px; /* Reduced gap */
  padding: 5px 0; /* Reduced padding */
  flex: 1;
}

.video-slider::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Opera */
}

.slider-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px; /* Smaller nav buttons */
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  font-size: 0.8rem;
  border: none;
  cursor: pointer;
  margin: 0 8px;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.slider-nav:hover:not(:disabled) {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(52, 152, 219, 0.5);
}

.slider-nav:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.slider-thumbnail {
  flex: 0 0 auto;
  width: 150px; /* Smaller thumbnails */
  height: 85px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border: 3px solid transparent;
  transition: all 0.3s ease;
}

.slider-thumbnail.active {
  border-color: #e74c3c;
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(231, 76, 60, 0.5);
}

.slider-thumbnail:hover:not(.active) {
  transform: scale(1.05);
  border-color: #3498db;
}

.thumbnail-img {
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
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.slider-thumbnail:hover .thumbnail-overlay {
  opacity: 1;
}

.play-icon {
  font-size: 2rem;
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .video-gallery-container {
    max-width: 95%;
    padding: 15px;
  }
  
  .slider-thumbnail {
    width: 100px;
    height: 60px;
  }
  
  .main-video {
    max-height: 250px;
  }
  
  .close-button {
    width: 30px;
    height: 30px;
    font-size: 14px;
  } 
}
</style>