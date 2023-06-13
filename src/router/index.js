import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/html',
    name: 'html',
    component: () => import('../views/HtmlView.vue')
  },
  {
    path: '/css',
    name: 'css',
    component: () => import('../views/CssView.vue')
  },
  {
    path: '/js',
    name: 'js',
    component: () => import('../views/JsView.vue')
  }, 
  {
    
    path: '/quiz',
    name: '/quiz',
    component: () => import('../views/QuizView.vue')

  },
  {
    path: '/formquiz',
    name: 'formquiz',
    component: () => import('../views/FormQuizView.vue')
  },
  {
    path: '/modify',
    name: 'modify',
    component: () => import('../views/ModifyFormView.vue')
  }, 
  {
    path: '/quizform',
    name: 'quizform',
    component: () => import('../views/QuizView.vue')

  }  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
