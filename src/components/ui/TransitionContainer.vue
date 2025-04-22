<!-- src/components/ui/TransitionContainer.vue -->
<template>
  <transition
    :name="transitionName"
    mode="out-in"
    @before-leave="$emit('animation-start')"
    @after-enter="$emit('animation-end')"
  >
    <slot></slot>
  </transition>
</template>

<script setup>
defineProps({
  transitionName: {
    type: String,
    default: 'slide-right'
  }
});

defineEmits(['animation-start', 'animation-end']);
</script>

<style scoped>
/* Slide animations */
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.6s ease, opacity 0.6s ease;
}

/* Right direction */
.slide-right-enter-from {
  opacity: 0;
  transform: translate(150%, -50%);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(-150%, -50%);
}

/* Left direction */
.slide-left-enter-from {
  opacity: 0;
  transform: translate(-150%, -50%);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(150%, -50%);
}
</style>