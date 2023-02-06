<template>
  <div class="max-w-md w-full py-12 text-dollar-blue" v-if="history">
    <h2 class="mb-4 text-center text-lg">7 Day Tracking history 1 USD</h2>
    <div v-for="(rate, key) in history.quotes" :key="key"
      class="flex py-2 px-12 bg-dollar-secondary text-white rounded-md shadow-md mb-2">
      <p class="flex-1">{{ dateWeekDay(key) }}</p>

      <template class="flex gap-2 flex-1 justify-between" v-for="(value, key, index) in rate" :key="index">
        <p>{{ value }} {{ simbolMoney }}</p>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  history: {
    typeof: Array,
    require: true
  },
  dateWeekDay: {
    typeof: Function,
    require: false,
    default: () => { }
  },
  simbolMoney: {
    typeof: String,
    require: true
  }
})
</script>

<style lang="scss" scoped>

</style>