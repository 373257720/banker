import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/pc/home'
import register from '@/components/pc/register'
import login from '@/components/pc/login'
import usercheck from '@/components/pc/usercheck'
import project_intro from '@/components/pc/project_intro'
import mysign from '@/components/pc/mysign'
import goods_details from '@/components/pc/goods_details'
import userpass from '@/components/pc/userpass'
import mhome from '@/components/moblie/mhome'
// moblie

Vue.use(Router);
const routes = [{
    path: '/register',
    name: 'register',
    component: register,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/usercheck',
    name: 'usercheck',
    component: usercheck,
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    // meta: {
    //   // keepAlive: true, // 需要被缓
    //   requireAuth: true
    // }
  }, 
  {
    path: '/mhome',
    name: 'mhome',
    component: mhome,
  }, 
  {
    path: '/project_intro',
    name: 'project_intro',
    component: project_intro,
  },
  {
    path: '/userpass',
    name: 'userpass',
    component: userpass,
  },
  {
    path: '/mysign',
    name: 'mysign',
    component: mysign,
  },
  {
    path: '/goods_details',
    name: 'goods_details',
    component: goods_details,
  },
  {
    path: '*',
    name: 'login',
    component: login
  },
  {
    path: '/',
    redirect: {
      name: 'login'
    }
  },
]

let router = new Router({
  // mode:'history',
  routes
});
export default router;
