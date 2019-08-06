// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./css/base.css";
import axios from 'axios'
import store from './store/store'
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import top_right from "@/components/pc/top_right"
Vue.component("topright", top_right);
Vue.use(ElementUI);
import global from '@/components/pc/global.js'
Vue.prototype.$goto = function goto(name, id) {
  let obj = {
    name
  };
  if (id) {
    obj.params = {
        idx:id
    };
  } 
  this.$router.push(obj);
}

//让ajax携带cookie
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios
//设置baseurl
var baseurl = {
  api: "http://192.168.1.37:80",
  //  api: "http://192.168.1.37:8080",
}
Vue.prototype.$baseurl = baseurl.api
Vue.prototype.$global = global

// console.log(window.location.href);
//   if (isMobile() && window.location.href=="http://localhost:8080/#/") {
//     window.location.href="http://www.baidu.com"
//   }
// function isMobile() {
//   let flag = navigator.userAgent.match(
//     /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
//   );
//   return flag;
// }

router.beforeEach((to, from, next) => {
  store.commit('toprightt', to.name)
  next();
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
