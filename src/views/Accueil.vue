<script>
import { RouterLink, RouterView } from 'vue-router'
import {defineComponent} from "vue";
import Calendar from "./Calendar.vue";

export default defineComponent({
  components: {Calendar}
})

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
  </div>
  <router-link to="/calendar">View Calendar</router-link>
  <RouterView />
</template>

<style>

</style>