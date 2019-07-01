<template>
  <div id="login">
    <div id="main">
      <div class="main con">
        <div class="main_left fl">
          <h2>已有平臺帳號</h2>
          <div class="username">
            <el-input placeholder="请输入内容" v-model="username" clearable></el-input>
          </div>
          <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
          <p>帳號或密碼錯誤，請重新輸入</p>
          <button>登陸</button>
        </div>
        <div class="main_right fr">
          <h2>您是新用戶嗎？</h2>
          <button>註冊新帳號</button>
          <p>每天都有多款新項目上線，在線更新，隨你選擇簽約</p>
          <p>當你選擇簽約后，系統會自動發送郵件給你確認</p>
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
      password: ""
    };
  }
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
    overflow: hidden;
  h2 {
    margin: 34px 0 48px 0;
    font: {
      size: 34px;
      weight: bold;
    }
  }
  height: 600px;
  .main_left {
    width: 553px;
    height: 400px;
    // background: red;
    box-shadow: 0px 0px 8px #e8e8e8;
    button {
      background: #00adef;
      width: 470px;
      height: 40px;
      margin-top: 67px;
      // color:
    }
  }
  .main_right {
    height: 400px;
    width: 467px;
    // background: red;
    button {
      width: 468px;
      height: 40px;
      background: #ff7c2c;
      margin-bottom:20px;
    }
  }
}

</style>