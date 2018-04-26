import Vue from 'vue'
import Router from 'vue-router'
import NotFoundComponent from '../components/frond/404.vue'
import Index from '../pages/frond/index.vue'
import Splash from '../pages/frond/Splash.vue'
// admin
import Login from '../pages/back/Login.vue'
import Register from '../pages/back/Register.vue'
import Admin from '../pages/back/Admin.vue'
import ArticleList from '../pages/back/ArticleList.vue'
import ArticleEdit from '../pages/back/ArticleEdit.vue'
import ApiList from '../pages/back/ApiList.vue'

import Blog from '../pages/frond/Blog.vue'
import BlogDetail from '../pages/frond/BlogDetail.vue'
import Images from '../pages/frond/Images.vue'
import About from '../pages/frond/About.vue'
import Jock from '../pages/frond/Jock.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'splash',
      component: Splash,
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      meta: {showHeader: true}
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      meta: {showHeader: true}
    },
    {
      path: '/blog/:id',
      name: 'blogdetail',
      component: BlogDetail
    },
    {
      path: '/images',
      name: 'images',
      component: Images,
      meta: {showHeader: true}
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {showHeader: true}
    },
    {
      path: '/jock',
      name: 'jock',
      component: Jock,
      meta: {showHeader: true}
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [

        {
          path: 'articleList',
          name: 'articleList',
          component: ArticleList
        },
        {
          path: 'articleEdit',
          name: 'articleEdit',
          component: ArticleEdit
        },
        {
          path: 'apiList',
          name: 'apiList',
          component: ApiList
        },

      ]
    },

    {path: '*', component: NotFoundComponent}
  ]
})
