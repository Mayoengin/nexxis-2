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
        <!-- Container display based on activeContainer state -->
        <div class="container-wrapper">
          <!-- Welcome Container -->
          <WelcomeContainer 
            v-if="activeContainer === CONTAINERS.WELCOME"
            @read-more="navigateTo(CONTAINERS.PRECISION)"
          />
          
          <!-- Precision Container -->
          <PrecisionContainer 
            v-if="activeContainer === CONTAINERS.PRECISION"
            @go-back="navigateTo(CONTAINERS.WELCOME)"
            @go-next="navigateTo(CONTAINERS.FLEXIBILITY)"
            @go-home="navigateTo(CONTAINERS.WELCOME)"
          />
          
          <!-- Remaining containers would be added here in the same pattern... -->
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
import { CONTAINERS, NAVIGATION_MAP } from './constants/navigation';

// Active container state
const activeContainer = ref(CONTAINERS.WELCOME);
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
};

// Navigation function
const navigateTo = (containerId) => {
  if (CONTAINERS[containerId]) {
    activeContainer.value = containerId;
  }
};
</script>

<style>
@import './styles/base.css';
</style>