<script setup>
  import HeaderCalendar from '../components/HeaderCalendar.vue'
  import CalendarGrid from '../components/CalendarGrid.vue'
</script>
<template>
  <main>
    <!-- Using HeaderCalendar and CalendarGrid Component -->
    <i class="fa-solid fa-calendar-days"></i>
    <HeaderCalendar/>
    <CalendarGrid/>
  </main>
</template>
<style>
main{
  width: 500px;
  padding-bottom: 30px;
  border-radius: 5px;
  background-color: azure;
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.5);
  @media(max-width: 500px){
    width: 90vw;
  }
}
</style>

