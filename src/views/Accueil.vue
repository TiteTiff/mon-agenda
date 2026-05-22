<script setup>
import Calendar from "./Calendar.vue";

</script>

<template>
  <div class="min-h-screen bg-deep flex items-center justify-center">
    <div class="bg-surface border border-border rounded-lg p-lg">
      <h1 class="text-cream font-sans text-2xl font-medium">
        Mon Agenda
      </h1>
      <p class="text-muted text-sm mt-sm">
        Calendrier · Notes · Rappels
      </p>
      <button class="mt-md bg-accent text-cream px-lg py-sm rounded-md font-medium">
        Ajouter un événement
      </button>
    </div>
    <p><router-link to="/calendar">Voir le calendrier</router-link></p>
  </div>

</template>

<style>

</style>