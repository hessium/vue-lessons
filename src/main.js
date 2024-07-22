import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory} from "vue-router"
import App from './App.vue'
import Button from "primevue/button"
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const pinia = createPinia()
const app = createApp(App)


const routes =  [
    {   name: "Home",
        path: '/', base: '/',
        component: () => import('@/pages/Home')
    },
    {   name: "Words",
        path: '/words',
        component: () => import('@/pages/Words')
    },
    {   name: "Translation",
        path: '/translation',
        component: () => import('@/pages/Translation')
    },
    {   name: "Editor",
        path: '/editor',
        component: () => import('@/pages/Editor')
    },
    {   name: "404",
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/404')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

app.use(pinia)
    .use(router)
    .use(PrimeVue, {
            theme: {
                preset: Aura
            }
        })
    .component('Button', Button)
    .mount('#app')

