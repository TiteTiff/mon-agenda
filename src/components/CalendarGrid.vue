<script setup>

import {computed} from "vue";

const DAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']

const props = defineProps({
  currentMonth: Number,
  currentYear: Number
})

const numDays = computed(() => {
  const prevMonth = props.currentMonth === 1 ? 12 : props.currentMonth - 1
  const prevYear = props.currentMonth === 1 ? props.currentYear - 1 : props.currentYear
  const daysInPrevMonth = new Date(prevYear, prevMonth, 0).getDate()
  const daysInMonth = new Date(props.currentYear, props.currentMonth, 0).getDate(); //demander le jour 0 d'un mois donne le dernier jour du mois précédent
  const firstDay = new Date(props.currentYear, props.currentMonth - 1, 1);
  const day = firstDay.getDay() === 0 ? 7 : firstDay.getDay(); //0 renvoie au dimanche alors qu'en France c'est 7, permet de convertir
  const totalCases = (day - 1) + daysInMonth
  const remainCases = totalCases % 7 === 0 ? 0 : 7 - (totalCases % 7)
  const today = new Date
  return [
    ...Array.from({length: day - 1}, (_, i) => ({
          dayNumber: daysInPrevMonth - (day - 2) + i,
          currentMonth: false
      })),
    ...Array.from({length: daysInMonth}, (_, i) => ({
          dayNumber: i + 1,
          currentMonth: true,
          isToday: i+1 === today.getDate() && props.currentMonth === today.getMonth() + 1 && props.currentYear === today.getFullYear()
      })),
        ...Array.from({length: remainCases}, (_, i) => ({
          dayNumber: i + 1,
          currentMonth: false
      })),
  ]
})


</script>

<template>

  <div class="grid grid-cols-7 gap-2 text-center">
    <div
        v-for="(day, index) in DAYS"
        :key="index"
        :title="day"
        class="day">
      <span class="md:hidden">{{ day[0] }}</span>
      <span class="hidden md:block">{{ day }}</span>
    </div>
    <div class="md:border border-border md:bg-raised rounded-md h-10 md:h-28 flex justify-center p-2 hover:border-accent"
         :class=" { 'text-muted md:bg-surface': day.currentMonth !== true, 'bg-accent md:border-accent md:border-2 md:text-accent' : day.isToday } "
         v-for="(day, index) in numDays" :key="index">
      <div >
        {{ day.dayNumber }}
      </div>
    </div>
  </div>
</template>
<style>
</style>

