<script setup>
  import Header from './Header.vue'
  import calendarGrid from './calendarGrid.vue'
</script>
<template>
  <main>
    <!-- Using Header and calendarGrid Component -->
    <i class="fa-solid fa-calendar-days"></i>
    <Header/>
    <calendarGrid/>
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

