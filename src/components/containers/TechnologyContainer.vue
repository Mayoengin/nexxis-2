// src/components/containers/TechnologyContainer.vue
<template>
  <div class="container-base technology-container">
    <div class="container-content">
      <h2 class="section-title">Always up to date</h2>
      
      <p class="section-description">
        Built on a non-proprietary IP technology platform, Nexxis is ready for any new technology (such as 4K) as soon as you are. Scalable and flexible, Nexxis allows you to adapt as you need to and expand as you grow.
      </p>
      
      <ul class="feature-list-simple">
        <li class="feature-item">
          <span class="feature-icon">{{ UPDATE_ICON }}</span>
          Always up to date with the latest networking and visualization technologies
        </li>
        <li class="feature-item">
          <span class="feature-icon">{{ TECH_ICON }}</span>
          Easy to adopt new integration requirements in the OR
        </li>
        <li class="feature-item">
          <span class="feature-icon">{{ NETWORK_ICON }}</span>
          Easy to connect new ORs to the network architecture
        </li>
        <li class="feature-item">
          <span class="feature-icon">{{ CERTIFIED_ICON }}</span>
          Expansion results in lower TCO
        </li>
      </ul>
      
      <div class="certification-note">
        <span class="cert-icon">{{ CERTIFIED_ICON }}</span>
        <p>Nexxis is certified with leading manufacturers, ensuring seamless integration with your existing and future OR equipment.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { UPDATE_ICON, TECH_ICON, NETWORK_ICON, CERTIFIED_ICON } from '../../icons/index.js';


</script>

<style scoped>
/* Import correct styles */
@import '../../styles/base.css';
@import '../../styles/containers.css';
@import '../../styles/buttons.css';

/* Additional styles for feature icons */
.feature-icon {
  margin-right: 10px;
  font-size: 1.2rem;
}

.certification-note {
  display: flex;
  align-items: center;
  margin: 30px auto;
  padding: 15px;
  background-color: rgba(46, 204, 113, 0.1);
  border-left: 4px solid #2ecc71;
  border-radius: 4px;
  width: 100%;
  text-align: left;
}

.cert-icon {
  font-size: 2rem;
  min-width: 40px;
  margin-right: 15px;
  color: #2ecc71;
  flex-shrink: 0;
}
</style>