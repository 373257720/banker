<template>
  <div id="mysign_pro">
    <div class="mysign_pro con">
      <div class="title">
        <p>我的项目</p>
      </div>
      <div class="box_tap">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="签约请求" name="first">
            <div class="norecord" v-if="transferdata.length<=0">没有记录</div>
            <historytable
              :transfer="transferdata"
              :tablehead="transferhead"
              v-if="transferdata.length>0"
            ></historytable>
          </el-tab-pane>
          <el-tab-pane label="签约项目" name="second">
            <div class="norecord" v-if="exchangedata.length<=0">没有记录</div>
            <historyexchange
              :transfer="exchangedata"
              :tablehead="exchangehead"
              v-if="exchangedata.length>0"
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
      activeName: "first",
      transferdata: [],
      exchangedata: []
    };
  },
  // computed: {
  //   transferhead: function() {
  //     return [
  //       // this.$t("history.DATE"),
  //       // this.$t("history.Opeartion"),
  //       // this.$t("history.Token"),
  //       // this.$t("history.AMOUNT"),
  //       // this.$t("history.Result")
  //     ];
  //   },
  //   exchangehead: function() {
  //     return [
  //       // this.$t("history.DATE"),
  //       // this.$t("history.Opeartion"),
  //       // this.$t("history.Token"),
  //       // this.$t("history.AMOUNT"),
  //       // this.$t("history.Result")
  //     ];
  //   }
  // },

  created() {
    //  console.log(this.transferhead,this.$t('history.DATE'))
    var token = sessionStorage.getItem("token");
    // this.$axios
    //   .get(`${this.$baseurl}/coin4_project/users/transfer_history`, {
    //     params: {
    //       limit: 100,
    //       offset: 0
    //       // access_token: token
    //     }
    //   })
    //   .then(res => {
    //     if (res.data.status == "success") {
    //       this.transferdata = res.data.records;
    //     }
    //     // console.log(this.transferdata.length)
    //   })
    //   .catch(err => {});

    // this.$axios
    //   .get(`${this.$baseurl}/coin4_project/users/exchange_history`, {
    //     params: {
    //       limit: 100,
    //       offset: 0
    //       // access_token: token
    //     }
    //   })
    //   .then(res => {
    //     // console.log(res.data);
    //     if (res.data.status == "success") {
    //       this.exchangedata = res.data.records;
    //       // console.log(res.data.records)
    //     }
    //   })
    //   .catch(err => {
    //     //console.log(err); //错误信息
    //   });
  },
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
