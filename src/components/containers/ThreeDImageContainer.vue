// src/components/containers/ThreeDImageContainer.vue
<template>
  <div class="container-base threed-container">
    <div class="container-content">
      <h2 class="section-title">3D imaging with MDSC-8232 M3D</h2>
      
      <div class="monitor-showcase">
        <div class="monitor-icon">{{ MONITOR_ICON }}</div>
        <div class="glasses-icon">{{ GLASSES_ICON }}</div>
      </div>
      
      <p class="section-description">
        The MDSC-8232 M3D is a 31-inch, 2D and 3D 4K surgical monitor that can be seamlessly integrated into Nexxis architectures. With this display integrated into your Nexxis system, 3D sources become part of the full integration, including support for inter-OR sharing, remote management, streaming and recording.
      </p>

      <div class="translation-feature">
        <div class="display-icons">
          <span class="display-3d">{{ MONITOR_ICON }} 3D</span>
          <span class="arrow-icon">⟷</span>
          <span class="display-2d">{{ DISPLAY_ICON }} 2D</span>
        </div>
        <p>The MDSC-8232 M3D can translate 3D to 2D content when required, ensuring compatibility with all viewing devices in your network.</p>
      </div>

      <ul class="feature-list-simple">
        <li class="feature-item">
          <span class="feature-icon">{{ MONITOR_ICON }}</span>
          31-inch 4K UHD surgical display with 2D and 3D capability
        </li>
        <li class="feature-item">
          <span class="feature-icon">{{ VISIBILITY_ICON }}</span>
          Enhanced depth perception for improved surgical visualization
        </li>
        <li class="feature-item">
          <span class="feature-icon">{{ DISPLAY_ICON }}</span>
          Compatible with all major 3D camera and endoscope systems
        </li>
        <li class="feature-item">
          <span class="feature-icon">{{ GLASSES_ICON }}</span>
          Lightweight passive 3D glasses for comfortable extended wear
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { MONITOR_ICON, DISPLAY_ICON, GLASSES_ICON, VISIBILITY_ICON } from '../../icons/index.js';

// Animation state
const props = defineProps({
  isAnimating: {
    type: Boolean,
    default: false
  }
});

// Define emits
defineEmits(['go-back', 'go-next', 'go-home']);
</script>

<style scoped>
/* Import correct styles */
@import '../../styles/base.css';
@import '../../styles/containers.css';
@import '../../styles/buttons.css';

/* Feature icon styles */
.feature-icon {
  margin-right: 10px;
  font-size: 1.2rem;
}

/* Monitor showcase styles */
.monitor-showcase {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  gap: 30px;
}

.monitor-icon {
  font-size: 4rem;
}

.glasses-icon {
  font-size: 2.5rem;
}

/* Translation feature styles */
.translation-feature {
  background-color: rgba(52, 152, 219, 0.1);
  padding: 20px;
  border-radius: 8px;
  margin: 30px auto;
  width: 100%;
}

.display-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  font-weight: bold;
}

.display-3d {
  font-size: 2rem;
  color: #9b59b6;
}

.arrow-icon {
  font-size: 1.5rem;
  color: #34495e;
}

.display-2d {
  font-size: 2rem;
  color: #3498db;
}
</style>