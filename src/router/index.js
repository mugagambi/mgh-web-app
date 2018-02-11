import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Centers from '@/components/aggregation-centers/index'
import CreateCenter from '@/components/aggregation-centers/create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/centers',
      name: 'Centers',
      component: Centers
    },
    {
      path: '/centers/add',
      name: 'CreateCenter',
      component: CreateCenter
    }
  ]
})
