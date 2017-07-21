import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Student from '../views/Student.vue'

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
      component: Student
    }
  ]
})
