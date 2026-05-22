<script setup>
import { ref, onMounted } from 'vue'

const notes = ref([])

onMounted(async () => {
  const response = await fetch('/mock/notes.json')
  notes.value = await response.json()
})
</script>

<template>
  <h1 class="text-cream font-sans text-2xl font-large bg-surface border-b border-border">Notes</h1>
  <body class="bg-surface border-b border-border">

  <div v-for="item in notes" :key="item.id">
    {{ item.label }}
  </div>

  </body>
</template>