<script setup>

</script>

<template>
  <aside class="hidden md:block bg-surface border-r border-border w-64">
    <nav>
      <ul>
        <li><RouterLink to="/accueil" class="ml-4 mr-4 mt-md flex items-center gap-sm px-md py-md rounded-md text-cream text-md font-medium"><i class="fa-solid fa-house fa-lg"></i> Accueil </RouterLink></li>
        <li><RouterLink to="/calendrier" class="ml-4 mr-4 flex items-center gap-sm px-md py-md rounded-md text-cream text-md font-medium"><i class="fa-regular fa-calendar fa-lg"></i> Calendrier </RouterLink></li>
        <li><RouterLink to="/listes" class="ml-4 mr-4 flex items-center gap-sm px-md py-md rounded-md text-cream text-md font-medium"> <i class="fa-regular fa-square-check fa-lg"></i> Listes </RouterLink></li>
        <li><RouterLink to="/notes" class="ml-4 mr-4 flex items-center gap-sm px-md py-md rounded-md text-cream text-md font-medium"> <i class="fa-regular fa-file-lines fa-lg"></i> Notes </RouterLink></li>
        <li><RouterLink to="/medias" class="ml-4 mr-4 flex items-center gap-sm px-md py-md rounded-md text-cream text-md font-medium"> <i class="fa-solid fa-lines-leaning fa-lg"></i> Médias </RouterLink></li>
        </ul>
    </nav>
  </aside>
</template>

<style scoped>
.router-link-exact-active {
  background-color: var(--color-accent);
  color: var(--color-cream);
}
</style>