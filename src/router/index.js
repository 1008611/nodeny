import Vue from 'vue'
import Router from 'vue-router'
import NotFoundComponent from '../components/frond/404.vue'
import Index from '../pages/frond/index.vue'
// admin
import Admin from '../pages/back/Admin.vue'
import ArticleList from '../pages/back/ArticleList.vue'
import ArticleEdit from '../pages/back/ArticleEdit.vue'

import Blog from '../pages/frond/Blog.vue'
import Images from '../pages/frond/Images.vue'
import About from '../pages/frond/About.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/images',
      name: 'images',
      component: Images
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [

        {
          path: 'articleList',
          component: ArticleList
        },
        {
          path: 'articleEdit',
          component: ArticleEdit
        },

      ]
    },

    {path: '*', component: NotFoundComponent}
  ]
})
