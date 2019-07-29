<template>
  <div class="top_right">
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
</template>

<script>
export default {
  created() {},
  methods: {
    handleCommand(command) {
      // var usertype = sessionStorage.getItem("usertype");
      var usertype =1;
      if (command == "userpass") {
        this.$goto("userpass");
      } else if (command == "mysign") {
        if (usertype == 1) {
          this.$goto("mysign_pro");
        } else if (usertype == 4) {
          this.$goto("mysign");
        }
      } else if (command == "login") { 
        sessionStorage.clear();
        this.$store.commit("userStatus",null);
        this.$goto("login");

      }
    }
  }
};
</script>

<style lang="scss" scoped>
.top_right {
  color: #788ca5;
  font-size: 18px;
  font-weight: 700;
  height: 60px;
}
</style>
