<script setup>

const today = new Date()

const formattedDate = today.toLocaleDateString('fr-FR', {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
})

</script>

<template>
  <div class="h-full p-4 text-cream lg:rounded-md lg:border lg:border-border lg:bg-surface">
    <div class="col-span-2 flex items-center justify-between">

      <div>
        <span class="text-lg font-medium sm:hidden">
        {{ formattedDate }}
      </span>
        <span class="hidden text-lg font-medium sm:inline">
        Événements à venir
      </span>
      </div>

      <button class="bg-accent text-cream px-md py-md rounded-md text-md sm:flex items-center gap-2">
        <i class="fa-solid fa-plus"></i>
        <span class="hidden sm:inline-block">Ajouter</span>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>