<script setup>

const DAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']

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

