// src/components/containers/ThreeDImageContainer.vue
<template>
  <div class="container-base threed-container">
    <div class="container-content">
      <div class="brand-title">Nexxis</div>
      <h2 class="section-title">3D imaging with MDSC-8232 M3D</h2>
      
      <div class="monitor-showcase">
        <div class="monitor-icon">🖥️</div>
        <div class="glasses-icon">👓</div>
      </div>
      
      <p class="section-description">
        The MDSC-8232 M3D is a 31-inch, 2D and 3D 4K surgical monitor that can be seamlessly integrated into Nexxis architectures. With this display integrated into your Nexxis system, 3D sources become part of the full integration, including support for inter-OR sharing, remote management, streaming and recording.
      </p>
      
      <div class="translation-feature">
        <div class="display-icons">
          <span class="display-3d">3D</span>
          <span class="arrow-icon">→</span>
          <span class="display-2d">2D</span>
        </div>
        <p>3D source images are automatically translated into 2D or 3D for maximum visibility.</p>
      </div>
      
      <div class="button-container">
        <button class="action-button back-button" @click="$emit('go-back')">
          <span class="button-text">Back</span>
          <span class="button-icon">◀</span>
        </button>
        
        <button class="action-button home-button" @click="$emit('go-home')">
          <span class="button-text">Home</span>
          <span class="button-icon">🏠</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Define emits
defineEmits(['go-back', 'go-home']);
</script>

<style scoped>
/* Base container styling from containers.css */
.container-base {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  max-width: 95%;
  padding: 50px;
  background-color: rgba(198, 206, 220, 0.95);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  text-align: center;
}

.container-base::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(45deg, rgba(66, 133, 244, 0.1), rgba(66, 133, 244, 0.05));
  filter: blur(20px);
  z-index: -1;
}

.brand-title {
  font-size: 3rem;
  font-weight: bold;
  color: #2980b9;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.section-title {
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.section-description {
  font-size: 1.1rem;
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

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

.translation-feature {
  background-color: rgba(52, 152, 219, 0.1);
  padding: 20px;
  border-radius: 8px;
  margin: 30px auto;
  width: 90%;
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

.translation-feature p {
  margin: 0;
  color: #34495e;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 2rem;
}

.action-button {
  position: relative;
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  z-index: 1;
}

.back-button {
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: white;
  box-shadow: 0 4px 15px rgba(44, 62, 80, 0.4);
}

.home-button {
  background: linear-gradient(135deg, #16a085, #1abc9c);
  color: white;
  box-shadow: 0 4px 15px rgba(22, 160, 133, 0.4);
}

.action-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.2);
}
</style>