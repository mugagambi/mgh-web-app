import Vue from 'vue'
import Router from 'vue-router'
import { isLoggedIn } from '../components/auth/auth'
import HelloWorld from '@/components/HelloWorld'
import Centers from '@/components/aggregation-centers/index'
import CreateCenter from '@/components/aggregation-centers/create'
import UpdateCenter from '@/components/aggregation-centers/update'
import Products from '@/components/products/products'
import CreateProduct from '@/components/products/create'
import UpdateProduct from '@/components/products/update'
import Login from '@/components/auth/Login'
import AggregationProducts from '@/components/aggregation-products/products'
import CreateAgggregationProduct from '@/components/aggregation-products/create'
import UpdateAggregationProduct from '@/components/aggregation-products/update'
import CrateTypes from '@/components/crate-types/types'
import CreateCrateType from '@/components/crate-types/create'
import UpdateCrateType from '@/components/crate-types/update'
import Crates from '@/components/crates/crates'
import CreateCrate from '@/components/crates/create'
import UpdateCrate from '@/components/crates/update'
import Grades from '@/components/grades/grades'
import CreateGrade from '@/components/grades/create'

Vue.use(Router)
function requireAuth (to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}
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
      component: Centers,
      beforeEnter: requireAuth
    },
    {
      path: '/centers/add',
      name: 'CreateCenter',
      beforeEnter: requireAuth,
      component: CreateCenter
    },
    {
      path: '/centers/:id/edit',
      name: 'UpdateCenter',
      beforeEnter: requireAuth,
      component: UpdateCenter
    },
    {
      path: '/products',
      name: 'Products',
      beforeEnter: requireAuth,
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
      beforeEnter: requireAuth,
      component: UpdateProduct
    },
    {
      path: '/aggregation-products',
      name: 'AggregationProducts',
      beforeEnter: requireAuth,
      component: AggregationProducts
    },
    {
      path: '/aggregation-products/add',
      name: 'CreateAggregationProduct',
      component: CreateAgggregationProduct
    },
    {
      path: '/login',
      name: 'LogIn',
      component: Login
    },
    {
      path: '/aggregation-products/:id/edit',
      name: 'UpdateAggregationProduct',
      beforeEnter: requireAuth,
      component: UpdateAggregationProduct
    },
    {
      path: '/crate-types',
      name: 'CrateTypes',
      beforeEnter: requireAuth,
      component: CrateTypes
    },
    {
      path: '/crate-types/add',
      name: 'CreateCrateType',
      component: CreateCrateType
    },
    {
      path: '/crate-types/:id/edit',
      name: 'UpdateCrateType',
      beforeEnter: requireAuth,
      component: UpdateCrateType
    },
    {
      path: '/crates',
      name: 'Crates',
      beforeEnter: requireAuth,
      component: Crates
    },
    {
      path: '/crates/add',
      name: 'CreateCrate',
      component: CreateCrate
    },
    {
      path: '/crates/:id/edit',
      name: 'UpdateCrates',
      beforeEnter: requireAuth,
      component: UpdateCrate
    },
    {
      path: '/grades',
      name: 'Grades',
      beforeEnter: requireAuth,
      component: Grades
    },
    {
      path: '/grades/add',
      name: 'CreateGrade',
      component: CreateGrade
    }
  ]
})
