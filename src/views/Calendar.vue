<script setup>

  import HeaderCalendar from '../components/HeaderCalendar.vue'
  import CalendarGrid from '../components/CalendarGrid.vue'
  import ToCome from '../components/ToCome.vue'

  import { ref } from 'vue'

  const today = new Date()
  const currentMonth = ref(today.getMonth() + 1)
  const currentYear = ref(today.getFullYear())

  function goToPrevious() {
    if(currentMonth.value===1){
      currentMonth.value=11+1;
      currentYear.value=currentYear.value-1;}
    else{currentMonth.value=currentMonth.value-1;}
    }

  function goToNext() {
    if(currentMonth.value===12){
      currentMonth.value=1;
      currentYear.value=currentYear.value+1;}
    else{currentMonth.value=currentMonth.value+1;}
  }

  function goToToday(){
    currentMonth.value=today.getMonth()+1;
    currentYear.value=today.getFullYear();
  }


</script>

<template>

    <div class="grid grid-cols-1 gap-2 bg-deep md:py-2 lg:gap-6 lg:p-6 lg:grid-cols-[4fr_1fr]">

      <div
          class="border-b border-border px-4 py-4 text-cream lg:rounded-md lg:border bg-surface">
        <HeaderCalendar @previous="goToPrevious" @today="goToToday" @next="goToNext" :currentMonth="currentMonth" :currentYear="currentYear" />
        <CalendarGrid :currentMonth="currentMonth" :currentYear="currentYear" />
      </div>

      <div class="pb-16">
        <ToCome />
      </div>

    </div>

  </template>

  <style>

  </style>

