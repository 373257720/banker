<template>
  <div id="register">
    <div class="register con" v-if="success">
      <h2>注册</h2>
      <div class="username">
        <el-input placeholder="请输入内容" v-model="username" clearable></el-input>
      </div>
      <div class="password">
        <el-input placeholder="请输入密码" v-model="password" show-password clearable></el-input>
      </div>
      <el-input placeholder="请输入密码" v-model="password2" show-password clearable></el-input>
      <p>{{remind}}</p>
      <button @click="register">注册新账号</button>
    </div>
    <div class="register2 con" v-if="!success">
      <nav>
        <img src="../../assets/19b9f427bcaefd8a3e879024299a204.png" alt />
        <span>您已注册成功{{timeout}}s</span>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      timeout: 3,
      success: true,
      remind: ""
    };
  },
  created() {},
  methods: {
    register() {
      if (this.username && this.password && this.password == this.password2) {
        this.$axios({
          method: "post",
          url: `${this.$baseurl}/bsl_web/user/register.do`,
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
          if (rescode == 10000) {
            this.success = !this.success;
            var aa = setInterval(() => {
              --this.timeout;
            }, 1000);
            setTimeout(() => {
              clearInterval(aa);
              this.$goto("usercheck");
            }, 4000);
          } else if (rescode == 10011) {
            this.remind="登录账号不能为空"
          } else if (rescode == 10012) {
            this.remind="邮箱地址无效请重新输入"
          } else if ((rescode = 10014)) {
            this.remind="该邮箱已注册，请登录"
            //  this.$goto("login");
          }
        });
      } else {
        this.remind = "账号和密码不能为空，请输入 ";
      }
    }
  }
};
</script>
<style lang='scss'>
#register {
  .register {
    text-align: center;
    .el-input--suffix {
      width: 470px;
    }
    .username .el-input--suffix {
      margin-bottom: 25px;
    }
    .password .el-input--suffix {
      margin-bottom: 25px;
    }
    .el-input__inner {
      background: #f6f6f6;
    }
  }
}
</style>
<style lang='scss' scoped>
#register {
  height: 700px;
  width: 100%;
  margin-top: 133px;
}
.register2 {
  width: 553px;
  height: 460px;
  text-align: center;
  nav {
    img {
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
    }
  }
}
.register {
  width: 553px;
  height: 460px;
  box-shadow: 0px 0px 8px #e8e8e8;
  text-align: center;
  overflow: hidden;
  p {
    color: #f36d6c;
    line-height: 40px;
    height: 40px;
  }
  h2 {
    margin: 34px 0 48px 0;
    font: {
      size: 34px;
      weight: bold;
    }
  }
  button {
    background: #00adef;
    width: 470px;
    height: 40px;
    margin-top: 40px;
    font-size: 18px;
    color: white;
    font-weight: 700;
    // color:
  }
}
</style>

