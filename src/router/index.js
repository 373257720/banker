import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import register from '@/components/register'
import login from '@/components/login'
import usercheck from '@/components/usercheck'

Vue.use(Router);
const routes = [
  {
    path: '/register',
    name: 'register',
    component:register,
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
  meta: {
    // keepAlive: true, // 需要被缓
    requireAuth: true
  }
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

