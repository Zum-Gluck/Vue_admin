import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login.vue'
import Admin from '../views/admin/Admin.vue'
import CardUser from '../views/admin/Card/CardUser'
import CardArticle from '../views/admin/Card/CardArticle'
import CardComment from "../views/admin/Card/CardComment"
import CardRight from "../views/admin/Card/CardRight"
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/admin', component: Admin, children: [
      { path: '/', redirect: "user" },
      { path: 'user', component: CardUser },
      { path: 'article', component: CardArticle },
      { path: 'comment', component: CardComment },
      { path: 'right', component: CardRight },

    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // 访问的是登录页直接放行
  if (to.path == '/login') next()
  // 取出token
  const token = sessionStorage.getItem('token')
  // token不存在 阻止访问其他页面
  if (!token) return next('/login')
  next()
})
export default router
