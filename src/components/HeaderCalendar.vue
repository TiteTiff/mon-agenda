<script setup>

import {computed} from "vue";

const emit = defineEmits(['previous', 'next', 'today'])

const props = defineProps({
  currentMonth: Number,
  currentYear: Number
})

const monthLabel = computed(() => { //computed met la valeur à jour automatiquement
  const currentDate = new Date(props.currentYear, props.currentMonth - 1, 1)
      .toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })
      return currentDate.charAt(0).toUpperCase() + currentDate.slice(1)
})

</script>

<template>

  <div class="flex justify-between items-center mb-4">

    <div class="md:text-xl text-md font-medium"> {{ monthLabel }}</div>

    <div class="flex items-center gap-2">
      <button @click="emit('previous')"><i class="fa-solid fa-angle-left bg-surface px-3 py-1 rounded-md"></i></button>
      <button @click="emit('today')" class="bg-surface px-3 py-1 rounded-md hidden sm:flex"> Aujourd'hui </button>
      <button @click="emit('next')"><i class="fa-solid fa-angle-right bg-surface px-3 py-1 rounded-md"></i></button>
    </div>

  </div>

</template>

<style>

</style>