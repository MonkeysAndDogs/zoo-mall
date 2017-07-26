import Vue from 'vue'
import Router from 'vue-router'
import GoodList from '@/views/GoodList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'
Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/goods',
      name: 'GoodList',
      components: {
        default:GoodList,
        title:Title,
        img:Image
      },
      children:[
        {
          path:'title',
          name:'title',
          component:Title
        },
        {
          path:'img',
          name:'img',
          component:Image
        }
      ]
    },
    {
      path:'/cart/:cartId',
      name:'cart',
      component:Cart
    }
  ]
})
