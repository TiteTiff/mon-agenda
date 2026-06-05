<script setup>

  import HeaderCalendar from '../components/HeaderCalendar.vue'
  import CalendarGrid from '../components/CalendarGrid.vue'
  import ToCome from '../components/ToCome.vue'

  import { ref } from 'vue'

  const today = new Date()
  const currentMonth = ref(today.getMonth() + 1)
  const currentYear = ref(today.getFullYear())

</script>

<template>

    <div class="grid grid-cols-1 gap-2 bg-deep md:py-2 lg:gap-6 lg:p-6 lg:grid-cols-[4fr_1fr]">

      <div
          class="border-b border-border px-4 py-4 text-cream lg:rounded-md lg:border bg-surface">
        <HeaderCalendar @previous @today @next />
        <CalendarGrid />
      </div>

      <div class="pb-16">
        <ToCome />
      </div>

    </div>

  </template>

  <style>

  </style>

