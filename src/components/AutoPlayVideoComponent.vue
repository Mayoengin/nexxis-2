// src/components/AutoPlayVideoComponent.vue
<template>
  <div class="video-container" @click="skipVideo" :class="{ 'no-skip': videoEnded || skipClicked }">
    <video 
      ref="videoRef" 
      class="background-video" 
      preload="auto" 
      muted 
      playsinline
      autoplay
      @ended="handleVideoEnded"
      @timeupdate="handleTimeUpdate"
    >
      <source :src="videoSrc" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="content" :class="{ 'fade-in': showWelcome }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps, defineEmits } from 'vue';

// Define props
const props = defineProps({
  videoSrc: {
    type: String,
    required: true
  },
  welcomeThreshold: {
    type: Number,
    default: 0.85 // Show welcome message at 85% of video completion
  }
});

// Define emits
const emit = defineEmits(['video-ended', 'progress', 'welcome-shown']);

// Reactive state
const videoRef = ref(null);
const videoLoaded = ref(false);
const videoDuration = ref(0);
const currentTime = ref(0);
const progress = ref(0);
const showWelcome = ref(false);
const skipClicked = ref(false);
const videoEnded = ref(false);

// Methods
const playVideo = () => {
  // Try to play the video - this addresses autoplay restrictions in some browsers
  if (videoRef.value) {
    const playPromise = videoRef.value.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.error('Autoplay failed:', error);
      });
    }
  }
};

const handleVideoEnded = () => {
  console.log('Video playback complete');
  videoEnded.value = true; // Mark video as ended
  emit('video-ended');
};

const handleTimeUpdate = () => {
  if (videoRef.value) {
    currentTime.value = videoRef.value.currentTime;
    progress.value = currentTime.value / videoDuration.value;
    
    // Show welcome component when video reaches the threshold
    if (progress.value > props.welcomeThreshold && !showWelcome.value) {
      showWelcome.value = true;
      emit('welcome-shown');
    }
    
    // Emit progress for parent components
    emit('progress', progress.value);
  }
};

const skipVideo = () => {
  // Only allow skipping if video hasn't ended and hasn't been skipped already
  if (videoLoaded.value && videoRef.value && !skipClicked.value && !videoEnded.value) {
    // Mark as clicked to disable future skips
    skipClicked.value = true;
    
    console.log('Video skipped by user');
    
    // Set time to just before the end
    videoRef.value.currentTime = videoDuration.value - 0.1;
    
    // Ensure the welcome message is shown
    if (!showWelcome.value) {
      showWelcome.value = true;
      emit('welcome-shown');
    }
    
    // Emit video-ended event with a slight delay
    setTimeout(() => {
      videoEnded.value = true;
      emit('video-ended');
    }, 100);
  }
};

// Lifecycle hooks
onMounted(() => {
  console.log("Component mounted");
  
  // Wait for the video to load
  if (videoRef.value) {
    videoRef.value.addEventListener('loadedmetadata', () => {
      console.log("Video metadata loaded");
      videoLoaded.value = true;
      videoDuration.value = videoRef.value.duration;
      console.log(`Video duration: ${videoDuration.value}s`);
      
      // Start playing
      playVideo();
    });
    
    // Make sure video autoplays
    videoRef.value.addEventListener('canplay', () => {
      playVideo();
    });
  }
});

onBeforeUnmount(() => {
  // Clean up any event listeners if needed
  if (videoRef.value) {
    // You could remove event listeners here if needed
  }
});
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  cursor: pointer; /* Show pointer cursor to indicate clickability */
}

/* Remove the pointer cursor when skipping is disabled */
.video-container.no-skip {
  cursor: default;
}

.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.content {
  position: relative;
  z-index: 1;
  height: 100%;
  color: white;
  opacity: 0;
  transition: opacity 1s ease;
}

.content.fade-in {
  opacity: 1;
}


</style>