// src/components/ui/TransitionContainer.vue
<template>
  <transition
    :name="transitionName"
    mode="out-in"
    @before-leave="onBeforeLeave"
    @after-leave="onAfterLeave"
    @before-enter="onBeforeEnter"
    @after-enter="onAfterEnter"
  >
    <slot></slot>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  transitionName: {
    type: String,
    default: 'slide-up'
  }
});

const emit = defineEmits(['animation-start', 'animation-end']);

// Animation handlers
const onBeforeLeave = () => {
  emit('animation-start');
};

const onAfterLeave = () => {
  // Mid-animation point
};

const onBeforeEnter = () => {
  // Right before new element appears
};

const onAfterEnter = () => {
  emit('animation-end');
};
</script>

<style scoped>
/* Slide Up Animation (going to next container) */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.6s ease, opacity 0.6s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translate(-50%, 100%);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translate(-50%, -150%);
}

/* Slide Down Animation (going to previous container) */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.6s ease, opacity 0.6s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translate(-50%, -150%);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translate(-50%, 100%);
}
</style>