<template>
  <div id="top">
    <div class="top con">
      <header>
        <div class="top_left fl">BANK投资银行</div>
        <div class="top_right fr">
          <el-dropdown @command="handleCommand" trigger="click">
            <span class="el-dropdown-link">
              请登录
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="userpass" icon="el-icon-s-custom">个人审核</el-dropdown-item>
              <el-dropdown-item command="mysign" icon="el-icon-edit-outline">签约项目</el-dropdown-item>
              <el-dropdown-item command="login" icon="el-icon-back">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </header>
    </div>
  </div>
</template>
<script>
export default {
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
<style lang="scss">
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
    font-weight: 7 00;
  }
}
</style>


