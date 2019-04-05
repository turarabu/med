import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Charts from './views/Charts.vue'
import Chat from './views/Chat.vue'
import Tasks from './views/Tasks.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/charts',
      name: 'charts',
      component: Charts
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    }
  ]
})
