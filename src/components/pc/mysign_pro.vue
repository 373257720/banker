<template>
  <div id="mysign_pro">
    <div class="mysign_pro con">
      <div class="title">
        <p>我的项目</p>
      </div>
      <div class="box_tap">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="签约请求" name="0">
            <signrequest v-if="activeName==0"></signrequest>
          </el-tab-pane>
          <el-tab-pane label="签约项目" name="1">
            <signedpro v-if="activeName==1"></signedpro>
          </el-tab-pane>
          <el-tab-pane label="拒绝项目" name="2">
            <refuselist v-if="activeName==2"></refuselist>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import signrequest from "@/components/pc/signrequest";
import signedpro from "@/components/pc/signed_pro";
import refuselist from "@/components/pc/refuselist";
export default {
  name: "history",
  components: {
    signrequest,
    signedpro,
    refuselist
  },
  data() {
    return {
      msg: 8888,
      activeName: '0'
    };
  },

  created() {
    this.activeName=sessionStorage.getItem('tabindex')
  },
  mounted(){
    var div = document.getElementById("app")
    // console.log(div)
    div.scrollTop = 0;
  },
  methods: {
    //tap切换
    handleClick(tab, event) {
        // console.log(tab.index);
        this.activeName=tab.index;
        sessionStorage.setItem('tabindex',tab.index)
        
    }
  }
};
</script>
<style lang="scss" scoped>
#mysign_pro {
  height: 872px;
  .mysign_pro {
    height: 872px;
    position: relative;
    .title {
      height: 50px;
      width: 1200px;
      margin-top: 50px;
      color: #aaaaaa;
      font-size: 20px;
      p {
        float: left;
        line-height: 50px;
        font-size: 18px;
        padding-left: 19px;
        height: 50px;
      }
    }
  }
  .norecord {
    color: #aaaaaa;
    font-size: 16px;
    text-align: center;
    margin-top: 100px;
  }
}
</style>
