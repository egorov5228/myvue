import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserList from '@/components/UserList'
import UserEdit from '@/components/UserEdit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user-list',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/user-edit',
      name: 'UserEdit',
      component: UserEdit
    }
  ]
})
