<script setup>

import {ref} from 'vue'

const props = defineProps({
  list: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['save', 'cancel', 'delete', 'add'])

const title = ref(props.list?.name || '')
const content = ref(props.list?.text || '')

function save() {
  emit('save', {
    title: title.value,
    content: content.value,
  })
}
</script>

<template>

  <div class="bg-deep text-cream p-4 lg:mx-48 pb-16 min-h-screen">
    <div class="flex flex-row justify-between items-center">

      <div class="flex justify-between gap-2 mb-4 flex-1 mr-4">
        <button @click="emit('cancel')" class="bg-raised rounded-lg px-3 py-2"><i class="fa-solid fa-arrow-left"></i> </button>
        <input v-model="title" type="text" placeholder="Nouvelle liste" class="placeholder-cream w-full text-xl text-cream font-sans font-medium bg-transparent border-0 border-b-2 border-transparent focus:border-accent outline-none"/>
      </div>

      <div class="flex justify-between gap-2">
        <button @click="save" class="bg-raised text-muted rounded-lg px-3 py-2 inline-flex items-center gap-2">
          <i class="fa-regular fa-floppy-disk"></i>
          <span class="hidden sm:inline-block"> Enregistrer </span>
        </button>
        <button @click="emit('delete')" class="bg-red-700/15 text-red-500 hover:bg-red-700/25 transition-colors rounded-lg px-3 py-2 inline-flex items-center gap-2">
          <i class="fa-solid fa-trash-can"></i>
          <span class="hidden sm:inline-block"> Supprimer </span>
        </button>
      </div>

    </div>

    <div class="bg-surface border border-border rounded-lg  p-4">
      <textarea v-model="content" placeholder="Commencez à écrire..." class="w-full min-h-96 bg-transparent border-none border-transparent outline-none"/>

    </div>

  </div>

</template>

<style scoped>

</style>