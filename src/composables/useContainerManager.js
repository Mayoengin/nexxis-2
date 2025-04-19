// src/composables/useContainerManager.js
import { ref } from 'vue';

export default function useContainerManager() {
  // List of all containers in order
  const containers = ['welcome', 'precision', 'flexibility', 'collaboration', 'technology', '3dimage'];
  
  // Current active container
  const currentContainer = ref('welcome');
  
  // Animation state
  const isAnimating = ref(false);
  const animationType = ref('');
  
  // Transition to next container
  const goToNext = () => {
    if (isAnimating.value) return; // Prevent during animation
    
    const currentIndex = containers.indexOf(currentContainer.value);
    if (currentIndex < containers.length - 1) {
      isAnimating.value = true;
      animationType.value = 'next';
      
      setTimeout(() => {
        currentContainer.value = containers[currentIndex + 1];
        
        // Reset animation state after transition
        setTimeout(() => {
          isAnimating.value = false;
          animationType.value = '';
        }, 50);
      }, 500); // Match animation duration
    }
  };
  
  // Transition to previous container
  const goToPrevious = () => {
    if (isAnimating.value) return; // Prevent during animation
    
    const currentIndex = containers.indexOf(currentContainer.value);
    if (currentIndex > 0) {
      isAnimating.value = true;
      animationType.value = 'back';
      
      setTimeout(() => {
        currentContainer.value = containers[currentIndex - 1];
        
        // Reset animation state after transition
        setTimeout(() => {
          isAnimating.value = false;
          animationType.value = '';
        }, 50);
      }, 500); // Match animation duration
    }
  };
  
  // Go directly to home (welcome)
  const goToHome = () => {
    if (isAnimating.value || currentContainer.value === 'welcome') return;
    
    isAnimating.value = true;
    animationType.value = 'back';
    
    setTimeout(() => {
      currentContainer.value = 'welcome';
      
      // Reset animation state after transition
      setTimeout(() => {
        isAnimating.value = false;
        animationType.value = '';
      }, 50);
    }, 500); // Match animation duration
  };
  
  // Check if a container is currently active
  const isActive = (container) => {
    return currentContainer.value === container;
  };
  
  return {
    currentContainer,
    isAnimating,
    animationType,
    goToNext,
    goToPrevious,
    goToHome,
    isActive
  };
}