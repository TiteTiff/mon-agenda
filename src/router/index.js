import { createRouter, createWebHistory } from 'vue-router'
import Calendar from '../views/Calendar.vue'
import Accueil from "../views/Accueil.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/accueil',
            name: 'accueil',
            component: Accueil.vue,
        },
        {
            path: '/calendrier',
            name: 'calendar',
            component: Calendar,
        },
        {
            path: '/listes',
            name: 'listes',
            //component: Listes,
        },
        {
            path: '/notes',
            name: 'notes',
            //component: Notes,
        },
        {
            path: '/bibliotheques',
            name: 'bibliothèques',
            //component: Bibliothèques,
        },
    ],
})

export default router