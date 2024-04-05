import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import BookDetails from '../pages/BookDetails.vue'
import UserPage from '../pages/UserPage.vue'

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
    },
    {
        path: '/user',
        name: 'UserPage',
        component: UserPage
    },  
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router