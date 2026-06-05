<script setup>

const DAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']

const props = defineProps({
  currentMonth: Number,
  currentYear: Number
})

const daysInMonth = new Date(props.currentYear, props.currentMonth, 0).getDate(); //demander le jour 0 d'un mois donne le dernier jour du mois précédent

const firstDay = new Date(props.currentYear, props.currentMonth - 1, 1);
const day = firstDay.getDay() === 0 ? 7 : firstDay.getDay(); //0 renvoie au dimanche alors qu'en France c'est 7, permet de convertir

const prevMonth = props.currentMonth === 1 ? 12 : props.currentMonth - 1
const prevYear = props.currentMonth === 1 ? props.currentYear - 1 : props.currentYear
const daysInPrevMonth = new Date(prevYear, prevMonth, 0).getDate()

//const daysPreviousMonth = []

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
    <div class="md:border border-border rounded-md h-10 md:h-28 flex justify-center p-2 hover:border-accent"
         v-for="date in 31">
      <div
          class="">
        {{ date }}
      </div>
    </div>
</div>
</template>
<style>
</style>

