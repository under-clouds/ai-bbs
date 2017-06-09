import Vue from 'vue'
import Router from 'vue-router'
import topic from '../components/topic.vue'
import post from '../components/post.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: topic
    },
    {
      name: 'post',
      path: '/post/:id',
      component: post
    }
  ]
})
