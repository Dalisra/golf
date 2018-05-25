import Vue from 'vue'
import Router from 'vue-router'
import Frontpage from '@/components/Frontpage'
const NotFound = () => import('@/components/NotFound')
const Scores = () => import('@/components/Scores')
const Start = () => import('@/components/Start')

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Frontpage',
      component: Frontpage  
    },
    {
      path: '/start',
      name: 'Start',
      component: Start
    },
    {
      path: '/scores',
      name: 'Scores',
      component: Scores
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
