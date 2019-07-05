<template>
  <div id="register">
    <div class="register con" >
      <h2>注册</h2>
      <div class="username">
        <el-input placeholder="请输入内容" v-model="username" clearable></el-input>
      </div>
      <div class="password">
        <el-input placeholder="请输入密码" v-model="password" show-password clearable></el-input>
      </div>
      <el-input placeholder="请输入密码" v-model="password2" show-password clearable></el-input>
      <p>账户或密码错误，请重新输入</p>
      <button @click="$goto('usercheck')">注册新账号</button>
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
    };
  },
  methods:{
 
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
      margin-bottom: 20px;
    }
    .password .el-input--suffix {
      margin-bottom: 20px;
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
.register2{
  width: 553px;
  height: 460px;
  text-align: center;
  nav{
    img{
       vertical-align: middle;
    }
    span{
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
    margin-top: 60px;
    font-size: 18px;
    color: white;
    font-weight: 700;
    // color:
  }
}
</style>

