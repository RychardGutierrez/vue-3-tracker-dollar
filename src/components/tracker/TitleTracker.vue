<template>
  <div class="flex flex-col items-center text-dollar-blue py-12">
    <div class="flex gap-7">
      <h1 class="text-5xl mb-2">{{ official }}</h1>
      <img :src="flagContry" :alt="nameDefaultFlag" class="w-24" />
    </div>
    <p class="text-base mb-2">{{ trackerDate }} - {{ trackerTime }}</p>
  </div>
</template>

<script setup>
defineProps({
  official: { typeof: String, require: true },
  flagContry: { typeof: String, require: true },
  nameDefaultFlag: { typeof: String, require: true },
  trackerDate: { typeof: String, require: true },
  trackerTime: { typeof: String, require: true },
})


</script>