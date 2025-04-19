// src/App.vue (With CSS Imports)
<template>
  <div id="app">
    <div class="video-page">
      <AutoPlayVideoComponent 
        :videoSrc="'/4k+++.mp4'" 
        @video-ended="handleVideoEnded"
        @progress="handleProgress"
        @welcome-shown="handleWelcomeShown"
      >
        <!-- Simply show the active container -->
        <div class="container-wrapper">
          <WelcomeContainer 
            v-if="activeContainer === 'welcome'"
            @read-more="goToContainer('precision')"
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

// Simple active container state
const activeContainer = ref('welcome');
const showWelcome = ref(false);
const videoProgress = ref(0);

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

// Simple navigation function
const goToContainer = (containerName) => {
  console.log(`Navigating to: ${containerName}`);
  activeContainer.value = containerName;
};
</script>

<style>
@import './styles/base.css';
@import './styles/containers.css';
@import './styles/buttons.css';

/* Add these critical styles directly in App.vue to ensure visibility */
.container-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 10; /* Make sure it's above the video */
}

/* If containers still aren't visible, add this debugging style temporarily */
/* 
.container-base {
  border: 3px solid red !important;
  z-index: 999 !important;
  background-color: rgba(255, 255, 255, 0.9) !important;
}
*/
</style>