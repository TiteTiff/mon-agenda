<script setup>
import {ref, onMounted} from 'vue'
import ListEditor from "../components/ListEditor.vue";

const checklists = ref([])

onMounted(async () => {
  const response = await fetch('/mock/checklists.json')
  const data = await response.json() // Data contient tout le JSON

  checklists.value = data.checklists // Ne charge dans la variable que l'élément checkLists depuis data
})


const showForm = ref(false)

const newList = ref("")

function addList() {
    checklists.value.push({
      id: String(checklists.value.length + 1),
      name: newList.value,
      items_checked: "0",
      items_total: "0"
    })
    newList.value = "";
    showForm.value = false;
}

const selectedList = ref(null)

async function selectList(list) {
  const response = await fetch(`/mock/checklist_${list.id}.json`)
  const data = await response.json()
  selectedList.value = data.checklist[0];
}

</script>

<template>

  <ListEditor :list="selectedList" v-if="selectedList !== null"
              @save="selectedList = null"
              @cancel="selectedList = null"
              @delete="selectedList = null"/>

  <div v-else class="bg-deep flex flex-col p-4 pb-16">

    <div class="flex items-center justify-between min-h-15 mb-md">
      <h2 class="text-cream font-sans text-2xl font-medium">Listes à cocher</h2>
      <button @click="showForm = true"
              class="bg-accent text-cream px-md py-md rounded-md text-md flex items-center gap-sm">
        <i class="fa-solid fa-plus"></i> <span class="hidden sm:inline-block">Nouvelle liste</span>
      </button>
    </div>

    <div class="bg-surface border border-border rounded-lg p-sm mt-sm flex flex-col" v-if="showForm">
      <form @submit.prevent="addList" class="flex flex-col gap-sm p-md">
        <input v-model="newList" type="text" required="required" placeholder="Nom de la liste"
               class="bg-raised text-cream py-md px-md border border-border rounded-lg focus:border-accent outline-none"/>
        <div class="flex gap-sm">
          <input type="submit" value="Créer" class="bg-accent text-cream border-border rounded-lg w-full py-md"/>
          <button @click="showForm = false" class="text-cream bg-surface border-border rounded-lg px-lg py-md">
            Annuler
          </button>
        </div>
      </form>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-md">

      <button @click="selectList(list)"
              class="bg-surface border border-border rounded-lg hover:border-accent transition-colors p-4 lg:p-10 flex flex-col group"
              v-for="list in checklists" :key="list.id">
        <div>
          <h2 class="text-cream font-medium text-xl flex flex-row justify-between items-center mb-md">{{ list.name }}
            <i class="fa-solid fa-chevron-right group-hover:text-accent transition-colors"></i>
          </h2>
          <div class="w-full rounded-full bg-raised">
            <div class="bg-success h-2 rounded-full"
                 :style="{ width: (list.items_total == 0 ? 0 : (list.items_checked / list.items_total * 100)) + '%' }">
            </div>
          </div>
          <p class="text-left text-muted text-sm mt-md">{{ list.items_checked }} / {{ list.items_total }} terminés</p>

        </div>
      </button>

    </div>

  </div>

</template>