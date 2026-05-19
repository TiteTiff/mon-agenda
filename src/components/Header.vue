<script setup>
import logo from '../assets/plume.png'
</script>

<template>
  <header class="bg-surface border-b border-border">
    <div class="flex justify-between items-center px-xl py-md">
      <!-- Groupe logo + titre -->
      <div class="flex items-center gap-sm">
        <img :src="logo" alt="Mon Agenda" class="h-20" />
        <div class="text-cream font-medium text-4xl">Mon Agenda</div>
      </div>
      <!-- Icônes -->
      <div class="text-cream flex gap-lg text-2xl">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-bell"></i>
        <i class="fa-solid fa-gear"></i>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>