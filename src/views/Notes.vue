<script setup>
import {ref, onMounted} from 'vue'
import NoteEditor from '../components/NoteEditor.vue'

const notes = ref([])

onMounted(async () => {
  const response = await fetch('/mock/notes.json')
  const data = await response.json()

  notes.value = data.notes
})

const showForm = ref(false)

function addNote(note) {
  if (selectedNote.value === null) {
    notes.value.unshift({
      id: Date.now().toString(),
      name: note.title,
      text: note.content,
      updated_at: new Date().toLocaleDateString('fr-FR'),
    })
  } else {
      const existing = notes.value.find(item => item.id === selectedNote.value.id);
      existing.name = note.title;
      existing.text = note.content;
      existing.updated_at = new Date().toLocaleDateString('fr-FR');
  }
  showForm.value = false
}


const selectedNote = ref(null)

function selectNote(note){
  showForm.value = true;
  selectedNote.value = note;
}

</script>

<template>

  <div v-if="!showForm">

    <div class="bg-deep flex flex-col p-4 pb-16">

      <div class="flex items-center justify-between min-h-15 mb-md">
        <h2 class="text-cream font-sans text-2xl font-medium">Bloc-notes</h2>
        <button @click="showForm = true"
                class="bg-accent text-cream px-md py-md rounded-md text-md flex items-center gap-sm"><i
            class="fa-solid fa-plus"></i>
          <span class="hidden sm:inline-block">Nouvelle note</span></button>
      </div>


      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

        <button @click="selectNote(item)" v-for="item in notes" :key="item.id"
             class="bg-surface border border-border rounded-lg hover:border-accent transition-colors p-4 lg:p-10 flex flex-col group">
          <div>
          <h2 class="text-cream font-medium text-xl flex flex-row justify-between items-left mb-md">{{ item.name }}
            <i class="fa-solid fa-chevron-right group-hover:text-accent transition-colors"></i>
          </h2>
          </div>
          <p class="text-muted font-light text-left mb-md line-clamp-2">{{ item.text }}</p>
          <p class="text-muted text-sm font-light text-left"> {{ new Date(item.updated_at).toLocaleDateString('fr-FR') }}</p>
        </button>

      </div>
    </div>

  </div>

  <NoteEditor :note="selectedNote" v-else @save="addNote" @cancel="showForm = false" @delete="showForm = false" />

</template>
