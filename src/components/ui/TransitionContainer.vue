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
    default: 'slide-right'
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
/* Slide Right Animation (going to next container) */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.6s ease, opacity 0.6s ease;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translate(-150%, -50%);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translate(150%, -50%);
}

/* Slide Left Animation (going to previous container) */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.6s ease, opacity 0.6s ease;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translate(150%, -50%);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translate(-150%, -50%);
}
</style>  