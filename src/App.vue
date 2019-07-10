<template>
  <div id="app">
    <div id="top">
      <div class="top con">
        <div class="top_left fl">BANK投资银行</div>
        <div class="top_right fr">
          <el-dropdown @command="handleCommand" trigger="click">
            <span class="el-dropdown-link">
              {{this.$store.state.currentUser}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="userpass" icon="el-icon-s-custom">个人审核</el-dropdown-item>
              <el-dropdown-item command="mysign" icon="el-icon-edit-outline">签约项目</el-dropdown-item>
              <el-dropdown-item command="login" icon="el-icon-back">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <router-view />
    <div id="bottom">
      <div class="bottom con">
        <p>BANK投资银行</p>
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
  created() {
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("userName", this.$store.state.currentUser);
    });
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("userName")) {
      this.$store.commit("userStatus", sessionStorage.getItem("userName"));
    }
  },
  mounted() {
   
  },
  methods: { 
    handleCommand(command) {
      // console.log(command)
      if (command == "userpass") {
        this.$goto("userpass");
      } else if (command == "mysign") {
        this.$goto("mysign");
      } else if (command == "login") {
        this.$goto("login");
      }
    }
  }
};
</script>
<style lang='scss'>
button {
  cursor: pointer;
}
#top {
  background: #eeeeee;
  width: 100%;
  height: 60px;
}
.top {
  height: 60px;
  line-height: 60px;
  .top_left {
    color: #788ca5;
    font-size: 18px;
    font-weight: 700;
  }
  .top_right {
    color: #788ca5;
    font-size: 18px;
    font-weight: 700;
  }
}
// #app {
//   height: 100%;
//   display: flex;
//   flex-direction: column;
// }
// #top {
//   background: #eeeeee;
//   width: 100%;
//   height: 60px;
// }
#bottom {
  width: 100%;
  height: 150px;
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
