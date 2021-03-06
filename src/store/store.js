import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    currentUser: null,
    topright:true,
  },
  getters: {
  },
  mutations: {
    userStatus(state, user) {
        if (user) {
          state.currentUser = user
          //    state.isLogin = true
        } else if (user == null) {
          //退出的时候清空sessionStorage里的东西
          // sessionStorage.clear();
          // sessionStorage.setItem('userName', null);
          //  sessionStorage.setItem('userToke','');
          state.currentUser = null;
          //  state.isLogin = false;
        }
      },
      toprightt(state,user){
        if(user=='login' ||user=='register'||user=='usercheck'){
          state.topright=false;
        }else{
          state.topright=true;
        }
         
      },
  },
  actions: {
    setUser(context, user) {
        // commit('userStatus',user)
        context.commit('userStatus', user)
        //context.commit('userStatus',user) 
        // 通过接口获取的后台数据保存到store中，等待组件取用
      }
  }
});