import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

import Login from '../views/Login.vue'
import NewDetails from '../views/NewDetails.vue'     // 知识库疾病详情页
import SearchPages from '../views/SearchPages.vue'  // 知识库疾病搜索页
import guideDetails from '../views/guideDetails.vue'  //  诊断指南详情页面
import structureCopy from '../views/structureCopy.vue'  //  指南脑图结构文案页面
import drugTarget from '../views/drugTarget.vue'  //  药物靶点页面
import brainMap from '../views/brainMap.vue'  //  脑图页面
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location)
}
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: Login
  // },
  {
    path: '/',
    name : 'SearchPages',
    component: SearchPages,
  },
  {
    path: '/NewDetails',
    name : 'NewDetails',
    component: NewDetails,
  },
  {
    path: '/guideDetails',
    name : 'guideDetails',
    component: guideDetails,
  }, 
  {
    path: '/structureCopy',
    name : 'structureCopy',
    component: structureCopy,
  },
  {
    path: '/drugTarget',
    name : 'drugTarget',
    component: drugTarget,
  },
  {
    path: '/brainMap',
    name : 'brainMap',
    component: brainMap,
  },

]

// 页面刷新时，重新赋值token
if (localStorage.getItem('token')) {
  store.dispatch("setToken",localStorage.getItem('token'));
}

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})


console.log(process.env.BASE_URL)
router.afterEach((to) => {
  if(to.meta.title){
    document.title = to.meta.title
  }
  window.scrollTo(0,0);

})

export default router
