// src/App.vue
<template>
  <div id="app">
    <div class="video-page">
      <AutoPlayVideoComponent 
        :videoSrc="'/4k+++.mp4'" 
        @video-ended="handleVideoEnded"
        @progress="handleProgress"
        @welcome-shown="handleWelcomeShown"
      >
        <!-- Side Navigation Arrows - hide for video gallery -->
        <SideNavigationArrows
          v-if="activeContainer !== 'videogallery'"
          :showBack="hasPrevious"
          :showNext="hasNext"
          :showHome="!isOnWelcome"
          :isAnimating="isAnimating"
          :homeIcon="HOME_ICON"
          @go-back="handleNavigation('back')"
          @go-next="handleNavigation('next')"
          @go-home="goToContainer('welcome')"
        />
        
        <!-- Show the active container -->
        <div class="container-wrapper">
          <TransitionContainer 
            :transitionName="transitionDirection"
            @animation-start="handleAnimationStart"
            @animation-end="handleAnimationEnd"
          >
            <component 
              :is="currentComponent" 
              :key="activeContainer"
              :isAnimating="isAnimating"
              :initialVideoSrc="selectedVideoSrc"
              @read-more="goToContainer('precision')"
              @open-video-gallery="openVideoGallery"
              @go-back="handleNavigation('back')"
              @go-next="handleNavigation('next')"
              @go-home="goToContainer('welcome')"
            />
          </TransitionContainer>
        </div>
      </AutoPlayVideoComponent>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, provide } from 'vue';
import AutoPlayVideoComponent from './components/AutoPlayVideoComponent.vue';
import WelcomeContainer from './components/containers/WelcomeContainer.vue';
import PrecisionContainer from './components/containers/PrecisionContainer.vue';
import FlexibilityContainer from './components/containers/FlexibilityContainer.vue';
import CollaborationContainer from './components/containers/CollaborationContainer.vue';
import TechnologyContainer from './components/containers/TechnologyContainer.vue';
import ThreeDImageContainer from './components/containers/ThreeDImageContainer.vue';
import VideoGalleryContainer from './components/containers/VideoGalleryContainer.vue';
import TransitionContainer from './components/ui/TransitionContainer.vue';
import SideNavigationArrows from './components/ui/SideNavigationArrows.vue';
import { NAVIGATION_MAP, CONTAINERS } from './constants/navigation';
import { HOME_ICON } from './icons/index';

// Active container state
const activeContainer = ref('welcome');
const showWelcome = ref(false);
const videoProgress = ref(0);
const isAnimating = ref(false);
const transitionDirection = ref('slide-right');

// Video gallery state
const selectedVideoSrc = ref('');

// Computed properties for navigation
const hasPrevious = computed(() => {
  return NAVIGATION_MAP[activeContainer.value]?.prev !== null;
});

const hasNext = computed(() => {
  return NAVIGATION_MAP[activeContainer.value]?.next !== null;
});

const isOnWelcome = computed(() => {
  return activeContainer.value === CONTAINERS.WELCOME;
});

// Component mapping based on active container
const currentComponent = computed(() => {
  const componentMap = {
    'welcome': WelcomeContainer,
    'precision': PrecisionContainer,
    'flexibility': FlexibilityContainer,
    'collaboration': CollaborationContainer,
    'technology': TechnologyContainer,
    'threedimage': ThreeDImageContainer,
    'videogallery': VideoGalleryContainer
  };
  
  return componentMap[activeContainer.value] || WelcomeContainer;
});

// Define the shared video data
const videoData = [
  { 
    src: '/output.mp4', 
    label: 'Surgical Procedure', 
    thumbnail: '/thumbnails/t1.PNG',
    description: 'High-definition footage of a minimally invasive surgical procedure demonstrating precise instrument control.' 
  },
  { 
    src: '/output1.mp4', 
    label: 'Endoscopic View', 
    thumbnail: '/thumbnails/t2.PNG',
    description: 'Detailed endoscopic visualization with uncompressed transmission for maximum detail clarity.' 
  },
  { 
    src: '/output2.mp4', 
    label: 'OR Environment', 
    thumbnail: '/thumbnails/t3.PNG',
    description: 'Operating room setup with Nexxis integration showing multiple displays and control systems.' 
  },
  { 
    src: '/output3.mp4', 
    label: 'Remote Consultation', 
    thumbnail: '/thumbnails/t4.PNG',
    description: 'Live collaboration session with real-time video sharing between surgical teams in different locations.' 
  },
  { 
    src: '/output4.mp4', 
    label: 'Laparoscopic Procedure', 
    thumbnail: '/thumbnails/t5.PNG',
    description: 'Advanced laparoscopic surgery with 4K video quality showing tissue detail and instrument precision.' 
  }
];

// Provide the video data to all child components
provide('videoData', videoData);

// Event handlers
const handleVideoEnded = () => {
  console.log('Video has ended');
};

const handleProgress = (progress) => {
  videoProgress.value = progress;
};

const handleWelcomeShown = () => {
  console.log('Welcome message shown');
  showWelcome.value = true;
};

// Animation handlers
const handleAnimationStart = () => {
  isAnimating.value = true;
};

const handleAnimationEnd = () => {
  isAnimating.value = false;
};

// Handle navigation based on direction
const handleNavigation = (direction) => {
  if (isAnimating.value) return;
  
  if (direction === 'next') {
    const nextContainer = NAVIGATION_MAP[activeContainer.value]?.next;
    if (nextContainer) {
      transitionDirection.value = 'slide-right';
      goToContainer(nextContainer);
    }
  } else if (direction === 'back') {
    // Special case for VideoGallery - always go back to welcome
    if (activeContainer.value === 'videogallery') {
      transitionDirection.value = 'slide-left';
      goToContainer('welcome');
      return;
    }
    
    // Normal navigation for other containers
    const prevContainer = NAVIGATION_MAP[activeContainer.value]?.prev;
    if (prevContainer) {
      transitionDirection.value = 'slide-left';
      goToContainer(prevContainer);
    }
  }
};

// Video gallery handler
const openVideoGallery = (videoSrc) => {
  console.log('Opening video gallery with source:', videoSrc);
  selectedVideoSrc.value = videoSrc;
  transitionDirection.value = 'slide-right';
  goToContainer('videogallery');
};

// Navigation function
const goToContainer = (containerName) => {
  console.log(`Navigating to: ${containerName}`);
  activeContainer.value = containerName;
};
</script>

<style>
@import './styles/base.css';
@import './styles/containers.css';
@import './styles/buttons.css';

/* Critical styles to ensure visibility */
.container-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 10; /* Above the video */
  overflow: hidden; /* Important to contain animations */
}
</style>