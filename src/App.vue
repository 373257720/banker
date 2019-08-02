<template>
  <div id="app">
    <div id="top">
      <div class="top con">
        <div class="top_left" @click="goto('home')">BANK投资银行</div>
        <div class="boxx">
          <el-dropdown @command="handleCommand" trigger="click" class="language">
            <span class="el-dropdown-link">
              {{language}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="en_US">ENGLISH</el-dropdown-item>
              <el-dropdown-item command="zh_CN">中文</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <topright v-if="this.$store.state.topright"></topright>
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
      language: "中文"
      // change: true,
      // active: 0
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
    this.handleCommand('zh_CN');
  },
  methods: {
    goto(name,id) {
      let obj = {
        name
      };
      if (id) {
        obj.params = {
          idx: id
        };
      }
      if(this.$store.state.currentUser){
          this.$router.push(obj);
      }else{
        this.$router.push('login');
      }

    },
    handleCommand(command) {
      this.$axios({
        method: "get",
        url: `${this.$baseurl}/bsl_web/base/language.do?lan=${command}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
        .then(res => {
          if (command == "en_US") {
            this.language = "ENGLISH";
          } else if (command == "zh_CN") this.language = "中文";
        })
        .catch(err => {
          console.log(err);
        });
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
  .top {
    height: 60px;
    display: flex;
    line-height: 60px;
    justify-content: space-between;
    .boxx {
      display: flex;
      // width: 200px;
    }
    .top_left {
      color: #788ca5;
      font-size: 18px;
      cursor: pointer;
      width: 200px;
      font-weight: 700;
    }
    .language {
      height: 60px;
      margin-right: 50px;
    }
  }
}
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
