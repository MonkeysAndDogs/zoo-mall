import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Student from '../views/Student.vue'
import Score from '@/views/Score.vue'
import Hobby from '@/views/Hobby.vue'

Vue.use(Router)

export default new Router({
  mode:'hash', /*default*/
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/class/:classId/student/:studentNo',
      name: 'Student',
      component: Student,
      children:[
        {
          path:"score",
          name:'score',
          component: Score
        },{
          path:"hobby",
          name:'hobby',
          component: Hobby
        }
      ]
    }
  ]
})
