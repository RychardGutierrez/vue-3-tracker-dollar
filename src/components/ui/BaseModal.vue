<template>
  <Transition name="modal-outer">
    <div
      class="absolute w-full bg-black bg-opacity-40 h-screen top-0 left-0 flex justify-center px-8"
    >
      <Transition name="modal-inner">
        <div class="p-4 bg-white self-start mt-32 max-w-screen-md z-10">
          <slot />
          <button
            @click="$emit('close-modal')"
            class="text-white mt-8 bg-dollar-secondary py-2 px-6"
          >
            {{ textButtonClose }}
          </button>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  textButtonClose: {
    type: String,
    default: 'Close',
  },
});

// Emits
defineEmits(['close-modal']);
</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}
.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
