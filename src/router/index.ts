import FrontPage from '@/pages/Front-page.vue'
import Introduction from '@/pages/Introduction.vue'
import faketalk from '@/pages/FakeTalk/Input.vue'
import Puzzle from '@/pages/Puzzle.vue'
// 拼图难度组件
import EasyPuzzle from '@/pages/PuzzleEasy.vue'
import PuzzleMedium from '@/pages/PuzzleMedium.vue'
import PuzzleHard from '@/pages/PuzzleHard.vue'
import PuzzleHell from '@/pages/PuzzleHell.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
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
            redirect:'/puzzle/easy',
            name:'puzzle',
            component: Puzzle,
            children:[
                {
                    path:'easy',
                    name:'EasyPuzzle',
                    component: EasyPuzzle,
                },
                {
                    path:'medium',
                    name:'PuzzleMedium',
                    component: PuzzleMedium,
                },
                {
                    path:'hard',
                    name:'PuzzleHard',
                    component: PuzzleHard,
                },
                {
                    path:'hell',
                    name:'PuzzleHell',
                    component: PuzzleHell,
                },
            ]
        }
    ]
})
export default router