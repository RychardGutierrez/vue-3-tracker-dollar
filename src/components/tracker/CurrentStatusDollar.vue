<template>
  <div class="flex max-w-xl w-full py-4 px-12 bg-dollar-primary text-white justify-center rounded-md shadow-md mb-12"
    v-if="converterDollar">
    <h1 class="text-4xl m-4">
      1 USD = {{ converterDollar.result }} {{ simbolMoney }}
    </h1>
  </div>
</template>

<script setup>
defineProps({
  converterDollar: {
    typeof: Object,
    require: true
  },
  simbolMoney: {
    typeof: String,
    require: true
  }

})
</script>