<template>
  <div id="app">
    <div id="top" v-if="change">
      <div class="top con">
        <header>
          <div class="top-left fl">BANK投資銀行</div>
          <div class="top-right fr">請登陸</div>
        </header>
      </div>
    </div>
    <router-view />
    <div id="bottom" v-if="change">
      <div class="bottom con">
        <p>BANK投資銀行</p>
        <ul>
          <li>About us</li>
          <li>Contact us</li>
          <li>User agreement</li>
          <li>Privacy treaty</li>
          <li>Legal statement</li>
          <li>Rate standard</li>
          <li>Problem feedback</li>
          <li>Novice tutorial</li>
        </ul>
        <footer>copyright@4coin web.2018</footer>
      </div>
    </div>
    <div id="mbottom" v-if="!change">
      <van-tabbar v-model="active">
        <van-tabbar-item replace to="/mhome" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/mpro_sign" icon="search">签约</van-tabbar-item>
        <van-tabbar-item replace to="/mine" icon="friends-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      change: true,
      active: 0
    };
  },
  mounted() {
    if (this._isMobile()) {
      this.change = false;
      this.$router.replace("/mhome");
    } else {
      this.change = true;
      this.$router.replace("/home");
    }
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  }
};
</script>

<style lang='scss'>
// #top {
//   background: #eeeeee;
//   width: 100%;
//   height: 60px;
// }
// #mbottom {
//   width: 100%;
//   height: 50px;
//   position: fixed;
//   bottom: 0;
// }
#bottom {
  width: 100%;
  height: 50px;
  background: #222222;
  overflow: hidden;
  text-align: center;
  p {
    color: #788ea6;
    font-size: 18px;
    margin: 32px 0;
  }
  ul {
    margin-bottom: 20px;
    color: #788ca5;
    display: flex;
    flex-direction: row;
    font-size: 12px;
    li {
      flex-grow: 1;
    }
  }
  footer {
    color: #4c5d71;
    font-size: 12px;
  }
}
</style>
