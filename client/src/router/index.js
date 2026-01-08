import { createRouter, createWebHistory } from 'vue-router'

// Import Components
import UserIndex from '../components/Users/Index.vue'
import UserCreate from '../components/Users/CreateUser.vue'
import UserEdit from '../components/Users/EditUser.vue'
import UserShow from '../components/Users/ShowUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },



    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
  ]
})

export default router