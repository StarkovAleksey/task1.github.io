import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddClient from '../components/AddClient'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddClient',
      component: AddClient
    }
  ]
})
