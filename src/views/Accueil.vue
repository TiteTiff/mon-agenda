<script setup>
import {RouterLink} from 'vue-router'

const today = new Date()

const formattedDate = today.toLocaleDateString('fr-FR', {
  //timeZone: "France/Paris",
  weekday: 'long',
  day: 'numeric',
  month: 'long'
})

let greeting = ""
if (today.getHours() >= 4 && today.getHours() <= 11) {
  greeting = "Bonjour"
} else if (today.getHours() >= 11 && today.getHours() <= 17) {
  greeting = "Bon après-midi"
} else greeting = "Bonsoir";

const items = [
  {
    to: '/calendrier',
    icon: 'fa-regular fa-calendar',
    color: 'bg-accent',
    label: 'Calendrier',
    description: 'Gérer l\'agenda'
  },
  {
    to: '/listes',
    icon: 'fa-regular fa-square-check',
    color: 'bg-success',
    label: 'Listes',
    description: 'Organiser les tâches'
  },
  {
    to: '/notes',
    icon: 'fa-regular fa-file-lines',
    color: 'bg-subtle',
    label: 'Notes',
    description: 'Prendre des notes'
  },
  {
    to: '/medias',
    icon: 'fa-solid fa-lines-leaning',
    color: 'bg-accent',
    label: 'Medias',
    description: 'Gérer les bibliothèques'
  },
]

</script>


<template>

  <div class="bg-deep flex flex-col p-lg md:mx-24 pb-16">

    <div class="min-h-15 m-6">
      <h1 class="text-cream font-sans text-2xl font-medium">{{ greeting }}</h1>
      <p class="text-cream">{{ formattedDate }}</p>
    </div>

    <div class="text-cream bg-surface border border-border rounded-lg p-md mt-md m-6">
      <div class="w-full flex items-center gap-3">
        <div class="bg-accent-muted rounded-lg text-accent">
          <i class="fa-regular fa-clock fa-xl"></i>
        </div>

        <div class="flex flex-col p-md ">
          <span class="text-cream text-lg"> Aperçu du jour </span>
          <p class="text-cream text-sm"> Les activités en cours</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">

        <div class="text-cream font-light bg-raised border border-border rounded-lg p-md mt-md flex flex-col">
          <div class="flex justify-between">
            <span> Rendez-vous</span>
            <i class="fa-regular fa-calendar fa-md text-accent"></i>
          </div>
          <p class="text-2xl font-medium"> 2</p>
        </div>

        <div class="text-cream font-light bg-raised border border-border rounded-lg p-md mt-md flex flex-col">
          <div class="flex justify-between">
            <span> Taches en cours</span>
            <i class="fa-regular fa-square-check fa-md text-success"></i>
          </div>
          <p class="text-2xl font-medium"> 3</p>
        </div>

        <div class="text-cream font-light bg-raised border border-border rounded-lg p-md mt-md flex flex-col">
          <div class="flex justify-between">
            <span> Notes récentes</span>
            <i class="fa-regular fa-file-lines fa-md text-subtle"></i>
          </div>
          <p class="text-2xl font-medium"> 4</p>
        </div>

      </div>
    </div>

    <div class="text-cream mt-md m-6">Accès rapide</div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 m-6 mt-md">
      <router-link v-for="item in items" :key="item.to" :to="item.to">
        <div class="text-cream bg-surface border border-border rounded-lg py-md text-center h-full hover:border-accent">
          <div class="flex justify-center">
            <div :class="[item.color, 'rounded-lg p-3 text-cream']">
              <i :class="[item.icon, 'fa-xl']"></i>
            </div>
          </div>
          <p class="text-lg">{{ item.label }}</p>
          <p class="text-sm">{{ item.description }}</p>
        </div>
      </router-link>
    </div>

  </div>


</template>

<style>

</style>