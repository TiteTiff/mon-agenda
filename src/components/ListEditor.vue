<script setup>

import {ref} from 'vue'

const props = defineProps({
  list: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['save', 'cancel', 'delete', 'add'])

const title = ref(props.list.name)
const items = ref(props.list.items)
const newItemLabel = ref('')

const showAddItem = ref(false);

function addItem() {
  const label = newItemLabel.value.trim()
  if (!label) return
  const maxId = items.value.reduce((max, item) => Math.max(max, Number(item.id)), 0)
  items.value.push({
    id: String(maxId + 1),
    label,
    checked: false,
  })
  newItemLabel.value = ''
  showAddItem.value = false
}

function removeItem(itemId) {
  items.value = items.value.filter(i => i.id !== itemId)
}

</script>

<template>

  <div class="bg-deep text-cream p-4 lg:mx-48 pb-16 min-h-screen">
    <div class="flex flex-row justify-between items-center">

      <div class="flex justify-between gap-2 mb-4 flex-1 mr-4">
        <button @click="emit('cancel')" class="bg-raised rounded-lg px-md py-md"><i class="fa-solid fa-arrow-left"></i>
        </button>
        <input v-model="title" type="text" placeholder="Nouvelle liste"
               class="placeholder-cream w-full text-xl text-cream font-sans font-medium bg-transparent border-0 border-b-2 border-transparent focus:border-accent outline-none"/>
      </div>

      <div class="flex justify-between gap-2">
        <button @click="emit('save')" class="bg-raised text-muted rounded-lg px-3 py-2 inline-flex items-center gap-2">
          <i class="fa-regular fa-floppy-disk"></i>
          <span class="hidden sm:inline-block"> Enregistrer </span>
        </button>
        <button @click="emit('delete')"
                class="bg-red-700/15 text-red-500 hover:bg-red-700/25 transition-colors rounded-lg px-3 py-2 inline-flex items-center gap-2">
          <i class="fa-solid fa-trash-can"></i>
          <span class="hidden sm:inline-block"> Supprimer </span>
        </button>
      </div>

    </div>

    <div class="bg-surface border border-border rounded-lg p-4">

      <div v-for="item in items" :key="item.id"
           class="flex items-center gap-3 p-3 group bg-raised border border-border hover:border-accent transition-colors rounded-lg mb-sm">
        <div @click="item.checked = !item.checked"
             class="w-5 h-5 rounded border-2 flex items-center justify-center cursor-pointer transition-colors shrink-0"
             :class="item.checked ? 'bg-success border border-success': 'bg-raised border border-border hover:border-accent'">
          <i v-if="item.checked" class="fa-solid fa-check text-cream text-xs"></i>
        </div>
        <span @click="item.checked = !item.checked" :class="item.checked ? 'line-through text-muted' : 'text-cream'"
              class="flex-1 cursor-pointer">
          {{ item.label }}
        </span>
        <button @click="removeItem(item.id)"
                class="text-muted hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 text-sm">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <button @click="showAddItem=true" v-if="!showAddItem" class="w-full text-muted bg-raised rounded-lg px-lg py-md mt-lg flex items-center justify-center gap-sm hover:text-cream
      hover:bg-raised/70">
        <i class="fa-solid fa-plus"></i>
        <span> Ajouter un élément </span>
      </button>

      <div class="mt-sm px-md py-md flex flex-col" v-if="showAddItem">
        <form @submit.prevent="addItem()" class="flex flex-col gap-sm">
            <input v-model="newItemLabel" type="text" required="required" placeholder="Nouvel élément"
                   class="flex-1 outline-none border border-border rounded-lg focus:border-accent focus:border-2 placeholder-muted bg-raised text-cream py-md px-md" />
          <div class="flex gap-sm">
          <input :disabled="!newItemLabel.trim()" value="Ajouter" type="submit"
                    class="text-cream bg-accent rounded-lg w-full py-md" />
            <button @click="showAddItem=false" class="text-cream bg-deep border-border rounded-lg px-lg py-md">
              Annuler
            </button>
          </div>
        </form>
      </div>

    </div>

  </div>

</template>

<style scoped>

</style>