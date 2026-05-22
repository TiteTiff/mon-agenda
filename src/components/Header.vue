<script setup>
import logo from '../assets/plumebig.png'
import { ref } from 'vue'
const isSearchOpen = ref(false)
</script>

<template>
  <header class="bg-surface border-b border-border relative">
    <div class="flex justify-between items-center px-md md:px-xl py-sm md:py-md">
      <!-- Groupe logo + titre -->
      <div class="flex items-center gap-sm">
        <img :src="logo" alt="Quill" class="h-10 md:h-22" />
        <div class="text-cream font-sans font-medium text-lg md:text-4xl">Quill</div>
      </div>
      <div class="text-cream font-sans flex items-center gap-md md:gap-lg text-lg md:text-2xl">
        <!-- Recherche fermée : on voit la loupe -->
        <button v-if="!isSearchOpen" @click="isSearchOpen = true" class="text-cream">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <!-- Recherche ouverte : on voit l'input + croix -->
        <div v-if="isSearchOpen" class="flex items-center gap-sm">
          <input
              type="text"
              placeholder="Rechercher..."
              class="bg-raised text-cream font-sans text-sm px-md py-sm rounded-md border border-accent focus:outline-none w-48"
          />
          <button @click="isSearchOpen = false" class="text-cream font-sans">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <i class="fa-solid fa-bell"></i>
        <i class="fa-solid fa-gear"></i>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>