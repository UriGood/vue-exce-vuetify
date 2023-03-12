import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

import UploadExcel from '../modules/excelUpload/pages/UploadExcel'
// import UserDetails from '../modules/excelUpload/pages/UserDetails'
import UsersList from '../modules/excelUpload/pages/UsersList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'listusers',
    component: UsersList
  },
  {
    path: '/upload-excel',
    name: 'upload-excel',
    component: UploadExcel
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../modules/excelUpload/pages/UserDetails')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
