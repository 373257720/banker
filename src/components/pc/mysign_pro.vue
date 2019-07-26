<template>
  <div id="mysign_pro">
    <div class="mysign_pro con">
      <div class="title">
        <p>我的项目</p>
      </div>
          <!-- //:transfer="transferdata"
              //:tablehead="transferhead" -->
      <div class="box_tap">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="签约请求" name="1">
            <historytable v-show="activeName==1"></historytable>
          </el-tab-pane>
          <el-tab-pane label="签约项目" name="2">
            <historyexchange v-show="activeName==2"
            ></historyexchange>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import historytable from "@/components/pc/historytable";
import historyexchange from "@/components/pc/historyexchange";
export default {
  name: "history",
  components: {
    historytable,
    historyexchange
  },
  data() {
    return {
      msg: 8888,
      activeName:'1',
    };
  },

  created() {},
  methods: {
    //tap切换
    handleClick(tab, event) {
      // this.transferhead.push(this.$t('history.DATE'), this.$t('history.Opeartion'), this.$t('history.Token'), this.$t('history.AMOUNT'),this.$t('history.Result'))
    },
    goto(name, id) {
      // 路由传参
      let obj = { name };
      // console.log(obj)
      if (id) {
        obj.params = { id };
      }
      this.$router.push(obj);
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
