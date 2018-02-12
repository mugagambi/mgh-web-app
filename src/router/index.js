import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Centers from '@/components/aggregation-centers/index'
import CreateCenter from '@/components/aggregation-centers/create'
import UpdateCenter from '@/components/aggregation-centers/update'
import Products from '@/components/products/products'
import CreateProduct from '@/components/products/create'
import UpdateProduct from '@/components/products/update'

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
    },
    {
      path: '/centers/:id/edit',
      name: 'UpdateCenter',
      component: UpdateCenter
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/products/add',
      name: 'CreateProduct',
      component: CreateProduct
    },
    {
      path: '/products/:id/edit',
      name: 'UpdateProduct',
      component: UpdateProduct
    }
  ]
})
