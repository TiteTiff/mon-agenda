import { createRouter, createWebHistory } from 'vue-router'
import Calendar from '../views/Calendar.vue'
import Accueil from "../views/Accueil.vue";
import Listes from "../views/Listes.vue"
import Notes from "../views/Notes.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: '/accueil',
        },
        {
            path: '/accueil',
            name: 'accueil',
            component: Accueil,
        },
        {
            path: '/calendrier',
            name: 'calendar',
            component: Calendar,
        },
        {
            path: '/listes',
            name: 'listes',
            component: Listes,
        },
        {
            path: '/notes',
            name: 'notes',
            component: Notes,
        },
        {
            path: '/medias',
            name: 'medias',
            //component: Bibliothèques,
        },
    ],
})

export default router