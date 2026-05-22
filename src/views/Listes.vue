<script setup>
import { ref, onMounted } from 'vue'

const checklists = ref([])

onMounted(async () => {
  const response = await fetch('/mock/checklists.json')
  const data = await response.json() // Data contient tout le JSON

  checklists.value = data.checklists // Ne charge dans la variable que l'élément checkLists depuis data
})
</script>

<template>
  <div class="min-h-screen bg-deep flex flex-col p-4">

    <div class="flow-root">
      <p class="float-left text-cream font-sans text-2xl font-medium bg-surface">Listes à cocher</p>
      <button class="float-right bg-accent bg-surgace text-cream gap-sm px-md py-md rounded-md text-md"><i class="fa-solid fa-plus"></i> <span class="hidden sm:block">Nouvelle liste</span></button>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4">
      <div v-for="list in checklists" :key="list.id" class="mb-4 bg-surface border border-border rounded-lg p-lg px-sm py-sm mt-sm flex flex-col">
        <h2>{{ list.name }}</h2>
        <div class="w-full bg-neutral-quaternary rounded-full">
          <div class="bg-success h-2 rounded-full" style="width: 35%"></div>
          <label>{{ list.items_checked }} / {{ list.items_total }} terminés</label>
        </div>
        <!--<div v-for="item in list.items" :key="item.id">
          <label>
            <input type="checkbox" :checked="item.checked">
            {{ item.label }}
          </label>
        </div> -->
      </div>
    </div>

  </div>
</template>