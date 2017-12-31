import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main.vue'
import Table from '@/components/Table.vue'
import UserAdd from '@/components/UserAdd.vue'
import UserEdit from '@/components/UserEdit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/list',
      name: 'Users list',
      component: Table
    },
    {
      path: '/user/add',
      component: UserAdd
    },
    {
      path: '/user/:id',
      component: UserEdit,
      props: true
    }
  ]
})
