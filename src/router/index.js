import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/pc/home'
import register from '@/components/pc/register'
import login from '@/components/pc/login'
import usercheck from '@/components/pc/usercheck'
import project_intro from '@/components/pc/project_intro'
import sign_request from '@/components/pc/sign_request'
import mysign from '@/components/pc/mysign'
import mysign_pro from '@/components/pc/mysign_pro'
import goods_details from '@/components/pc/goods_details'
import userpass from '@/components/pc/userpass'
import signrequest from '@/components/pc/signrequest'
import signed_pro from '@/components/pc/signed_pro'
import refuse_pro from '@/components/pc/refuselist'
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
    path: '/sign_request',
    name: 'sign_request',
    component: sign_request,
  },
  {
    path: '/project_intro',
    name: 'project_intro',
    component: project_intro,
    // children: [{
    //     path: 'signrequest',
    //     name: 'signrequest',
    //     component: signrequest,
    //   }, {
    //     path: 'signed_pro',
    //     name: 'signed_pro',
    //     component: signed_pro,
    //   },
    //   {
    //     path: 'refuse_pro',
    //     name: 'refuse_pro',
    //     component: refuse_pro,
    //   }
    // ]
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
    path: '/mysign_pro',
    name: 'mysign_pro',
    component: mysign_pro,
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
