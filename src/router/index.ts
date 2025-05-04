import FrontPage from '@/pages/Front-page.vue'
import Introduction from '@/pages/Introduction.vue'
import faketalk from '@/pages/FakeTalk/Input.vue'
import Puzzle from '@/pages/Puzzle.vue'
import MyHistory from '@/pages/MyHistory.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'FrontPage',
            component:FrontPage
        },
        {
            path:'/introduction',
            name:'Introduction',
            component:Introduction
        },
        {
            path:'/faketalk',
            name:'faketalk',
            component:faketalk
        },
        {
            path:'/puzzle',
            name:'puzzle',
            component: Puzzle
        },
        {
            path:'/myHistory',
            name:'MyHistory',
            component: MyHistory
        }
    ]
})
export default router