// src/components/containers/TechnologyContainer.vue
<template>
  <div class="container-base technology-container">
    <div class="container-content">
      <div class="brand-title">Nexxis</div>
      <h2 class="section-title">Always up to date</h2>
      
      <p class="section-description">
        Built on a non-proprietary IP technology platform, Nexxis is ready for any new technology (such as 4K) as soon as you are. Scalable and flexible, Nexxis allows you to adapt as you need to and expand as you grow.
      </p>
      
      <ul class="feature-list-simple">
        <li class="feature-item">Always up to date with the latest networking and visualization technologies</li>
        <li class="feature-item">Easy to adopt new integration requirements in the OR</li>
        <li class="feature-item">Easy to connect new ORs to the network architecture</li>
        <li class="feature-item">Expansion results in lower TCO</li>
      </ul>
      
      <div class="certification-note">
        <div class="cert-icon">✅</div>
        <p>Certified as a medical device (CE/FDA), Nexxis is fit for use in the interventional OR. Every part of the solution has been designed and approved for use in a surgical environment.</p>
      </div>
      
      <div class="button-container">
        <button class="action-button back-button" @click="$emit('go-back')">
          <span class="button-text">Back</span>
          <span class="button-icon">◀</span>
        </button>
        
        <button class="action-button next-button" @click="$emit('go-next')">
          <span class="button-text">Next</span>
          <span class="button-icon">▶</span>
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
defineEmits(['go-back', 'go-next', 'go-home']);
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

.feature-list-simple {
  list-style: none;
  padding: 0;
  text-align: left;
  margin: 30px auto;
  width: 90%;
}

.feature-item {
  position: relative;
  padding-left: 30px;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: #34495e;
}

.feature-item::before {
  content: '*';
  position: absolute;
  left: 0;
  color: #e67e22; /* Orange color for asterisks */
  font-weight: bold;
  font-size: 1.5rem;
}

.certification-note {
  display: flex;
  align-items: center;
  margin: 30px auto;
  padding: 15px;
  background-color: rgba(46, 204, 113, 0.1);
  border-left: 4px solid #2ecc71;
  border-radius: 4px;
  width: 90%;
  text-align: left;
}

.cert-icon {
  font-size: 2rem;
  margin-right: 15px;
  color: #2ecc71;
}

.certification-note p {
  font-size: 0.95rem;
  color: #34495e;
  margin: 0;
  line-height: 1.5;
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

.next-button {
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.4);
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