<script setup>

const emit = defineEmits(['previous', 'next', 'today'])

</script>

<template>

  <div class="flex justify-between items-center mb-4">

    <div class="md:text-xl text-md font-medium">Mai 2026</div>

    <div class="flex items-center gap-2">
      <button @click="emit('previous')"><i class="fa-solid fa-angle-left bg-surface px-3 py-1 rounded-md"></i></button>
      <button @click="emit('today')" class="bg-surface px-3 py-1 rounded-md hidden sm:flex"> Aujourd'hui </button>
      <button @click="emit('next')"><i class="fa-solid fa-angle-right bg-surface px-3 py-1 rounded-md"></i></button>
    </div>

  </div>

</template>

<style>

</style>