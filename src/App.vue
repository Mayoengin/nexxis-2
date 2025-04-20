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
        <!-- Show the active container -->
        <div class="container-wrapper">
          <WelcomeContainer 
            v-if="activeContainer === 'welcome'"
            @read-more="goToContainer('precision')"
            @open-video-gallery="openVideoGallery"
          />
          
          <PrecisionContainer 
            v-if="activeContainer === 'precision'"
            @go-back="goToContainer('welcome')"
            @go-next="goToContainer('flexibility')"
            @go-home="goToContainer('welcome')"
          />
          
          <FlexibilityContainer 
            v-if="activeContainer === 'flexibility'"
            @go-back="goToContainer('precision')"
            @go-next="goToContainer('collaboration')"
            @go-home="goToContainer('welcome')"
          />
          
          <CollaborationContainer 
            v-if="activeContainer === 'collaboration'"
            @go-back="goToContainer('flexibility')"
            @go-next="goToContainer('technology')"
            @go-home="goToContainer('welcome')"
          />
          
          <TechnologyContainer 
            v-if="activeContainer === 'technology'"
            @go-back="goToContainer('collaboration')"
            @go-next="goToContainer('threedimage')"
            @go-home="goToContainer('welcome')"
          />
          
          <ThreeDImageContainer 
            v-if="activeContainer === 'threedimage'"
            @go-back="goToContainer('technology')"
            @go-home="goToContainer('welcome')"
          />
          
          <!-- Add the VideoGalleryContainer -->
          <VideoGalleryContainer 
            v-if="activeContainer === 'videogallery'"
            :initialVideoSrc="selectedVideoSrc"
            :videoData="videoOptions"
            @go-back="goToContainer('welcome')"
          />
        </div>
      </AutoPlayVideoComponent>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AutoPlayVideoComponent from './components/AutoPlayVideoComponent.vue';
import WelcomeContainer from './components/containers/WelcomeContainer.vue';
import PrecisionContainer from './components/containers/PrecisionContainer.vue';
import FlexibilityContainer from './components/containers/FlexibilityContainer.vue';
import CollaborationContainer from './components/containers/CollaborationContainer.vue';
import TechnologyContainer from './components/containers/TechnologyContainer.vue';
import ThreeDImageContainer from './components/containers/ThreeDImageContainer.vue';
import VideoGalleryContainer from './components/containers/VideoGalleryContainer.vue';

// Active container state
const activeContainer = ref('welcome');
const showWelcome = ref(false);
const videoProgress = ref(0);

// Video gallery state
const selectedVideoSrc = ref('');

// Video options data for the gallery
const videoOptions = [
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

// Video gallery handler
const openVideoGallery = (videoSrc) => {
  console.log('Opening video gallery with source:', videoSrc);
  selectedVideoSrc.value = videoSrc;
  activeContainer.value = 'videogallery';
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
}
</style>