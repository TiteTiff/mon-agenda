<script setup>
</script>

<template>
  <nav class="fixed bottom-0 left-0 right-0 md:top-0 md:bottom-auto md:hidden bg-surface border-border z-50">
    <ul class="flex md:justify-start md:gap-6 w-full">
      <li class="flex-1 md:flex-none">
        <RouterLink to="/accueil" class="nav-item">
          <i class="fa-solid fa-house nav-icon"></i>
          <span class="nav-label">Accueil</span>
        </RouterLink>
      </li>
      <li class="flex-1 md:flex-none">
        <RouterLink to="/calendrier" class="nav-item">
          <i class="fa-regular fa-calendar nav-icon"></i>
          <span class="nav-label">Calendrier</span>
        </RouterLink>
      </li>
      <li class="flex-1 md:flex-none">
        <RouterLink to="/listes" class="nav-item">
          <i class="fa-regular fa-square-check nav-icon"></i>
          <span class="nav-label">Listes</span>
        </RouterLink>
      </li>
      <li class="flex-1 md:flex-none">
        <RouterLink to="/notes" class="nav-item">
          <i class="fa-regular fa-note-sticky nav-icon"></i>
          <span class="nav-label">Notes</span>
        </RouterLink>
      </li>
      <li class="flex-1 md:flex-none">
        <RouterLink to="/medias" class="nav-item">
          <i class="fa-solid fa-lines-leaning nav-icon"></i>
          <span class="nav-label">Médias</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.router-link-exact-active {
color: var(--color-accent)
}
</style>