<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import SideBar from './components/SideBar.vue'
import BottomNav from './components/BottomNav.vue'

</script>

<template>
  <div class="min-h-screen bg-deep flex flex-col">
    <Header />
    <div class="flex flex-1">
      <SideBar />
      <main class="flex-1">
        <RouterView />
      </main>
    </div>
  </div>
  <BottomNav/>
</template>

<style>
</style>