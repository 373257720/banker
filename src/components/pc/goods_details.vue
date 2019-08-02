<template>
  <div id="goods_details">
    <div class="goods_details">
      <header>项目详情</header>
      <nav>
        <p>
          项目名称:
          <span>{{proname}}</span>
        </p>
        <p>
          计划时间:
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
          <img :src="pic" alt />
        </aside>
      </main>
      <footer @click="$goto('mysign_pro')">返回</footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "goods_details",
  data() {
    return {
      pic: "",
      routeidx: "",
      proname: "",
      protime: "",
      userid: "",
      details_lists: [
        {
          name: "公司名称:",
          content: ""
        },
        {
          name: "是否上市公司:",
          content: ""
        },
        {
          name: "项目介绍:",
          content: ""
        },
        {
          name: "集资金额:",
          content: ""
        },
        {
          name: "联系电话:",
          content: ""
        },
        {
          name: "电邮:",
          content: ""
        },
        {
          name: "签约方：",
          content: ""
        }
      ]
    };
  },
  created() {
    // console.log(this.$route.query);
    this.routeidx = this.$route.query.projectid;
    this.userid = this.$route.query.userid;
    this.$axios({
      method: "get",
      url: `${this.$baseurl}/bsl_web/projectSign/getSignDetails?projectId=${this.routeidx}&signUserId=${this.userid}`
    }).then(res => {
      this.proname = res.data.data.projectName;
      this.pic = "http://192.168.1.37:8080" + res.data.data.picList[0].projectPic;
      this.protime = this.$global.timestampToTime(
        res.data.data.projectStartTime
      );
      this.details_lists[0].content = res.data.data.projectCompany;
      this.details_lists[1].content =
        res.data.data.publicCompany == false ? "否" : "是";
      this.details_lists[2].content = res.data.data.projectDescribe;
      this.details_lists[3].content = res.data.data.collectMoney;
      this.details_lists[4].content = res.data.data.projectMobile;
      this.details_lists[5].content = res.data.data.projectEmail;
      if (res.data.data.userCompanyCh) {
        this.details_lists[6].content = res.data.data.userCompanyCh
      } else {
        this.details_lists.pop();
      }
    });
  }
};
</script>
<style lang="scss" scoped>
#goods_details {
  width: 100%;
  margin: 30px 0;
  .goods_details {
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
          word-wrap: break-word;
          word-break: normal;
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
        overflow:hidden;
        // background: red;
        border: 1px solid #ababab;
        img{
            width: 320px;
        height: 400px;
        }
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

