<template>
  <BaseModal v-show="modalActive">
    <About />
  </BaseModal>
</template>

<script setup>
import { defineProps } from 'vue';
import About from './About.vue';

import BaseModal from './BaseModal.vue';

// Props - use props 
const props = defineProps({
  modalActive: {
    typeof: Boolean,
    default: false,
  },
});

const toogleModal = () => {
  props.modalActive.value = !props.modalActive.value;
};
</script>

<style lang="scss" scoped>

</style>
