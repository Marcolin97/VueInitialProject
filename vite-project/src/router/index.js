import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import BookDetails from '../components/BookDetails.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/book/:id',
        name: 'BookDetails',
        component: BookDetails
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router