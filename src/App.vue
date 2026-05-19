<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'

</script>

<template>
  <div class="min-h-screen bg-deep">
  <Header/>
  <RouterView />
  </div>
</template>

<style>
</style>