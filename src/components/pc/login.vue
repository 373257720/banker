<template>
  <div id="login">
    <div id="main">
      <div class="main con">
        <div class="main_left fl">
          <h2>已有平台账号</h2>
          <div class="username">
            <el-input placeholder="电子邮箱" v-model="username" clearable></el-input>
          </div>
          <el-input placeholder="请输入密码" v-model="password" show-password clearable></el-input>
          <section>
            <p>{{remind}}</p>
            <!-- <span>忘记密码？</span> -->
          </section>
          <button @click="login">登 录</button>
        </div>
        <div class="main_right fr">
          <h2>您是新用戶吗？</h2>
          <button @click="$goto('register')">注册新账号</button>
          <p>
            <img src="../../assets/50286658b24e90531c4dd7dcbe5602c.png" alt />每天都有多款新项目上线，在线更新，随你选择签约
          </p>
          <p> <img src="../../assets/50286658b24e90531c4dd7dcbe5602c.png" alt="">當你选择签约后，系统會会自动发送邮件給您确认</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      remind: ""
    };
  },
  methods: {
    login() {
      this.remind = "";
      if (this.username && this.password) {
        this.$axios({
          method: "post",
          url: `${this.$baseurl}/bsl_web/user/login.do`,
          data: {
            bslEmail: this.username,
            bslPwd: this.password
          },
          transformRequest: [
            function(data) {
              let ret = "";
              for (let it in data) {
                ret +=
                  encodeURIComponent(it) +
                  "=" +
                  encodeURIComponent(data[it]) +
                  "&";
              }
              return ret;
            }
          ],
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(res => {
          var rescode = res.data.resultCode;
          sessionStorage.setItem("usertype", res.data.data.userType);
          console.log(global);
          if (rescode == 10000) {
            console.log("登陆成功");
            this.$store.dispatch("setUser", this.username);
            if (res.data.data.isAuth == 1) {
              this.$goto("home");
            } else if (res.data.data.isAuth == 0) {
              this.$goto("usercheck");
            }
          } else if (rescode == 10011) {
            console.log("登录账号不能为空");
          } else if (rescode == 10012) {
            console.log("邮箱地址无效请重新输入");
          } else if ((rescode = 10014)) {
            console.log("该邮箱已注册，请登录");
          }
        });
      } else {
        this.remind = "账号和密码不能为空，请输入 ";
      }
    }
  }
  // beforeRouteEnter: (to, from, next) => {
  //   //  alert("hello" + this.name)
  //   console.log(this);
  //   // this.$store.commit('toprightt');
  //   next();
  // }
};
</script>
<style lang='scss'>
#login {
  .main_left {
    text-align: center;
    .el-input--suffix {
      width: 470px;
    }
    .username .el-input--suffix {
      margin-bottom: 20px;
    }
    .el-input__inner {
      background: #f6f6f6;
    }
  }
}
</style>
<style lang='scss' scoped>
#main {
  width: 100%;
  height: 600px;
  margin-top: 133px;
}
.main {
  height: 600px;
  h2 {
    margin: 34px 0 48px 0;
    font: {
      size: 34px;
      weight: bold;
    }
  }
  .main_left {
    width: 553px;
    height: 400px;
    box-shadow: 0px 0px 15px #e8e8e8;
    section {
      height: 40px;
      width: 470px;
      box-sizing: border-box;
      position: relative;
      text-align: center;
      margin: 10px auto 0;
      p {
        color: #f36d6c;
      }
      span {
        position: absolute;
        right: 0;
        top: 0;
        color: #4283d7;
        border-bottom: 1px solid #4283d7;
      }
    }
    button {
      background: #00adef;
      width: 470px;
      height: 40px;
      margin-top: 30px;
      font-size: 18px;
      color: white;
      font-weight: 700;
      // color:
    }
  }
  .main_right {
    height: 400px;
    width: 467px;
    line-height: 30px;
    // background: red;
    p{
      img{
        margin-right:10px;
      }
    }
    button {
      width: 468px;
      height: 40px;
      font-size: 18px;
      color: white;
      font-weight: 700;
      background: #ff7c2c;
      margin-bottom: 20px;
    }
  }
}
</style>