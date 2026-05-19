<script setup>

</script>

<template>
  <aside class="hidden md:block bg-surface border-r border-border w-64">
    <nav>
      <ul>
        <li><RouterLink to="/accueil" class="flex items-center gap-sm px-md py-md rounded-md text-cream text-md"><i class="fa-solid fa-house"></i> Accueil </RouterLink></li>
        <li><RouterLink to="/calendrier" class="flex items-center gap-sm px-md py-md rounded-md text-cream text-md"><i class="fa-regular fa-calendar"></i> Calendrier </RouterLink></li>
        <li><RouterLink to="/listes" class="flex items-center gap-sm px-md py-md rounded-md text-cream text-md"> <i class="fa-regular fa-square-check"></i> Listes </RouterLink></li>
        <li><RouterLink to="/notes" class="flex items-center gap-sm px-md py-md rounded-md text-cream text-md"> <i class="fa-regular fa-note-sticky"></i> Notes </RouterLink></li>
        <li><RouterLink to="/bibliotheques" class="flex items-center gap-sm px-md py-md rounded-md text-cream text-md"> <i class="fa-solid fa-lines-leaning"></i> Bibliothèques </RouterLink></li>
        </ul>
    </nav>
  </aside>
</template>

<style scoped>
</style>