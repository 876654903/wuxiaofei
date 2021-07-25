//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//第三方库需要use一下才能用
Vue.use(VueRouter)
//引用page1页面
import login from '@/pages/login';
//引用page2页面
import main from './pages/main';
import home from './pages/main/components/home'
import user from './pages/main/components/user'
import find from './pages/main/components/find'

//定义routes路由的集合，数组类型
const routes = [
  // 登陆页
  {
    path: '/login',
    component: login
  },
  {
    // 主页
    path: '/',
    component: main,
    // 二级页面
    children: [
      {
        path: 'home',
        component: home
      },
      {
        path: 'find',
        component: find
      },
      {
        path: 'user',
        component: user,
        meta: { requireAuth: true },
      }
    ]
  }

]

//实例化VueRouter并将routes添加进去
const router = new VueRouter({
  //ES6简写，等于routes：routes
  routes
});

//抛出这个这个实例对象方便外部读取以及访问
export default router