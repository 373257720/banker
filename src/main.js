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

Vue.use(ElementUI);

Vue.prototype.$goto = function goto(name, id) {
  // 路由传参
  let obj = {
    name
  };
  // console.log(obj)
  if (id) {
    obj.params = {
      id
    };
  }
  this.$router.push(obj);
}


//让ajax携带cookie
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios
//设置baseurl
var baseurl = {
  api: "http://192.168.1.37:8080",
  //  api: "http://192.168.1.37:8080",
}
Vue.prototype.$baseurl = baseurl.api

// console.log(window.location.href);
//   if (isMobile() && window.location.href=="http://localhost:8080/#/") {
//     window.location.href="http://www.baidu.com"
//   }
function isMobile() {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  return flag;
}


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
