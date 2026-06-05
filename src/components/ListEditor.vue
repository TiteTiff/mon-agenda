<script setup>

import { ref, computed } from 'vue'

const props = defineProps({
  list: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['save', 'cancel', 'delete', 'add'])

const checklistData = computed(() => {
  if (Array.isArray(props.list)) {
    return props.list[0] || {}
  }
  return props.list || {}
})

const title = ref(checklistData.value.name || '')
const items = ref(checklistData.value.items ? checklistData.value.items.map(item => ({...item})) : [])
const newItemLabel = ref('')

function toggleItem(itemId) {
  const item = items.value.find(i => i.id === itemId)
  if (item) {
    item.checked = !item.checked
  }
}

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
}

function removeItem(itemId) {
  items.value = items.value.filter(i => i.id !== itemId)
}

function save() {
  const checkedCount = items.value.filter(i => i.checked).length
  emit('save', {
    id: checklistData.value.id,
    name: title.value,
    items: items.value,
    items_checked: String(checkedCount),
    items_total: String(items.value.length),
  })
}
</script>

<template>

  <div class="bg-deep text-cream p-4 lg:mx-48 pb-16 min-h-screen">
    <div class="flex flex-row justify-between items-center">

      <div class="flex justify-between gap-2 mb-4 flex-1 mr-4">
        <button @click="emit('cancel')" class="bg-raised rounded-lg px-3 py-2"><i class="fa-solid fa-arrow-left"></i> </button>
        <input v-model="title" type="text" placeholder="Nouvelle liste"
               class="placeholder-cream w-full text-xl text-cream font-sans font-medium bg-transparent border-0 border-b-2 border-transparent focus:border-accent outline-none"/>
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

    <div class="bg-surface border border-border rounded-lg p-4">

      <div v-for="item in items" :key="item.id"
           class="flex items-center gap-3 p-3 group rounded-lg transition-colors">
        <div @click="toggleItem(item.id)"
             class="w-5 h-5 rounded border-2 flex items-center justify-center cursor-pointer transition-colors shrink-0"
             :class="item.checked ? 'bg-accent border-accent' : 'border-muted'">
          <i v-if="item.checked" class="fa-solid fa-check text-cream text-xs"></i>
        </div>
        <span @click="toggleItem(item.id)" :class="item.checked ? 'line-through text-muted' : 'text-cream'"
              class="flex-1 cursor-pointer">
          {{ item.label }}
        </span>
        <button @click="removeItem(item.id)"
                class="text-muted hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 text-sm">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="flex items-center gap-3 p-3 border-t border-border mt-2 pt-4">
        <div class="w-5 h-5 rounded border-2 border-dashed border-muted shrink-0"></div>
        <input v-model="newItemLabel" @keydown.enter.prevent="addItem" type="text"
               placeholder="Ajouter un élément..."
               class="flex-1 bg-transparent border-none outline-none placeholder-muted text-cream"/>
        <button @click="addItem" :disabled="!newItemLabel.trim()"
                class="text-accent hover:text-cream transition-colors disabled:opacity-30">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>

    </div>

  </div>

</template>

<style scoped>

</style>