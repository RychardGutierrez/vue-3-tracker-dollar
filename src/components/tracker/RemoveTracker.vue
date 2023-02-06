<template>
  <div @click="removeTracker"
    class="flex flex-col items-center gap-2 text-orange-600 cursor-pointer duration-500 hover:text-red-700">
    <img :src="iconDelete" alt="Remove Tracker" class="w-7" />
    <p>Remove</p>
  </div>
</template>

<script setup>
import iconDelete from '@/assets/delete.svg';

defineProps({
  removeTracker: {
    typeof: Function,
    require: true
  }
})

</script>

<style lang="scss" scoped>

</style>