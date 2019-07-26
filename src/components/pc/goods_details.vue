<template>
  <div id="goods_details">
    <div class="goods_details">
      <header>項目詳情</header>
      <nav>
        <p>
          項目名稱:
          <span>{{proname}}</span>
        </p>
        <p>
          計劃時間:
          <span>{{protime}}</span>
        </p>
      </nav>
      <main>
        <article>
          <ul>
            <li v-for="(item) in details_lists" :key="item.name">
              <p>{{item.name}}</p>
              <p>{{item.content}}</p>
            </li>
          </ul>
        </article>
        <aside>
          <img src alt />
        </aside>
      </main>
      <footer>返回</footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "goods_details",
  data() {
    return {
      routeidx: "",
      proname:'',
      protime:'',
      //  details_lists:[],
      details_lists: [
        {
          name: "公司名称:",
          content: "电饭锅快点肥家个价格考虑将改口费价格肯定发更健康"
        },
        {
          name: "是否上市公司:",
          content: "电饭锅快点肥家个价格考虑将改口费价格肯定发更健康"
        },
        {
          name: "项目介绍:",
          content: "电饭锅快点肥家个价格考虑将改口费价格肯定发更健康"
        },
        {
          name: "集资金额:",
          content: "电饭锅快点肥家个价格考虑将改口费价格肯定发更健康"
        },
        {
          name: "联系电话:",
          content: "电饭锅快点肥家个价格考虑将改口费价格肯定发更健康"
        },
        {
          name: "电邮:",
          content: "电饭锅快点肥家个价格考虑将改口费价格肯定发更健康"
        },
        {
          name: "签约方：",
          content: "电饭锅快点肥家个价格考虑将改口费价格肯定发更健康"
        }
      ]
    };
  },
  created() {
    this.routeidx = this.$route.params.idx;
    this.$axios({
      method: "get",
      url: `${this.$baseurl}/bsl_web/projectSign/getSignDetails?projectId=${this.routeidx}`
    }).then(res => {
      console.log(res.data);
      this.proname=res.data.data.projectName;
      this.protime=this.$global.timestampToTime(res.data.data.projectStartTime)
      this.details_lists[0].content = res.data.data.projectCompany;
      this.details_lists[1].content = res.data.data.publicCompany;
       this.details_lists[2].content=res.data.data.projectDescribe;
       this.details_lists[3].content=res.data.data.collectMoney;
       this.details_lists[4].content=res.data.data.projectMobile;
       this.details_lists[5].content=res.data.data.projectEmail;  
       if(res.data.data.bslNameList.length>0){
         this.details_lists[6].content=res.data.data.bslNameList
       }else{
         this.details_lists.pop()
       }

    });
  }
};
</script>
<style lang="scss" scoped>
#goods_details {
  width: 100%;
  margin: 30px 0;
  // height: 870px;
  .goods_details {
    // height: 870px;
    width: 664px;
    margin: 0 auto;
    header {
      font-size: 36px;
      font-weight: 500;
      margin-bottom: 30px;
      border-bottom: 1px solid black;
    }
    nav {
      height: 86px;
      background: #f6f6f6;
      border-radius: 5px;
      border: 1px solid #ababab;
      text-align: center;
      line-height: 36px;
      box-sizing: border-box;
      padding: 10px 0;
    }
    main {
      margin: 16px 0 0 0;
      width: 664px;
      display: flex;
      justify-content: space-between;
      article {
        width: 320px;
        li {
          margin-bottom: 40px;

          p:nth-of-type(1) {
            font-weight: 600;
            font-size: 16px;
            // line-height: 16px;
          }
          p:nth-of-type(2) {
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
      aside {
        width: 320px;
        height: 400px;
        border-radius: 5px;
        // background: red;
        border: 1px solid #ababab;
      }
    }
    footer {
      background: #00adef;
      width: 306px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      color: white;
      border-radius: 2px;
      margin: 0 auto;
    }
  }
}
</style>

