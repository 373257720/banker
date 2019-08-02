<template>
  <div id="sign_request">
    <div class="sign_request">
      <h3>签约请求</h3>
      <header>
        <aside>
          <img :src="pic" alt />
        </aside>
        <ul>
          <li>
            <span>项目名称:</span>
            <span>{{array.projectName}}</span>
          </li>
          <li>
            <span>项目时间:</span>
            <span>{{starttime}}</span>
          </li>
          <li>
            <span>申请中间人:</span>
            <span>4564564564564564564564</span>
          </li>
          <li>
            <span>签约方公司:</span>
            <span>4564564564564564564564</span>
          </li>
        </ul>
      </header>
      <main>
        <article v-html="array.projectDescribe">{{array.projectDescribe}}</article>
        <p>条款:</p>
        <aside>{{array.projectDetail}}</aside>
      </main>
      <section>
        <p>请输入您需要增加的条款或细节：</p>
        <el-input
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 8}"
          placeholder="请输入内容"
          v-model="textarea"
        ></el-input>
      </section>
      <footer>
        <button @click="pro_sign(userid,routeidx,3)">拒绝签约</button>
        <button @click="pro_sign(userid,routeidx,2)">同意签约</button>
      </footer>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      pic: "",
      array: {},
      routeidx: "",
      textarea: "",
      starttime: "",
      userid:''
    };
  },
  methods: {
    
    pro_sign(userid,projectid,num) {
       var textarea=this.textarea.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp;');
    // console.log(this.$route.query.projectId);
      this.$axios({
        method: "post",
        url: `${this.$baseurl}/bsl_web/projectSign/projectProponenSign`,
        data: {
          signUserId: userid,
          projectId: projectid,
          signStatus: num,
          projectArticle: textarea
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
        // console.log(res.data.resultCode);
        if(res.data.resultCode==10000){
          
        }
      });
    }
  },
  created() {
    this.routeidx = this.$route.query.projectid;
    this.userid = this.$route.query.userid;
    // sessionStorage.setItem("projectid", this.routeidx);
    this.$axios({
      method: "get",
      url: `${this.$baseurl}/bsl_web/projectSign/getSignDetails?projectId=${this.routeidx}`
    }).then(res => {
      console.log(res.data.data);
      this.pic ="http://192.168.1.37:8080" + res.data.data.picList[0].projectPic;
      this.array = { ...res.data.data };
      for (var key in this.array) {
        if ((key = "projectStartTime")) {
          this.starttime = this.$global.timestampToTime(this.array[key]);
        }
      }
    });
  }
};
</script>

<style lang='scss' scoped>
#sign_request {
  //   height: 800px;
  text-align: center;
  //   overflow-y: scroll;
  .sign_request {
    // height: 800px;
    width: 900px;
    margin: 0 auto;
    h3 {
      padding: 40px;
      font-size: 30px;
      box-sizing: border-box;
      border-bottom: 1px solid black;
      margin-bottom: 40px;
    }
    header {
      height: 250px;
      display: flex;
      justify-content: space-between;
      aside {
        width: 250px;
        overflow: hidden;
        border: 1px solid #ababab;
        border-radius: 3px;
        box-sizing: border-box;
        height: 250px;
        img {
          width: 250px;
          height: 250px;
        }
      }
      ul {
        width: 600px;
        border: 1px solid #ababab;
        border-radius: 3px;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 50px;
        justify-content: center;
        box-sizing: border-box;
        li {
          margin-bottom: 30px;
          color: #575757;
          span:nth-child(1) {
            font-weight: 400;
            font-weight: 600;
            // padding-left: 30px;
            display: inline-block;
            width: 100px;
            box-sizing: border-box;
          }
          span:nth-last-child(1) {
            font-weight: 400;
            // padding-left: 30px;
          }
        }
        li:nth-last-child(1) {
          margin-bottom: 0;
        }
      }
    }
    main {
      text-align: left;
      color: #575757;
      line-height: 30px;
      padding: 20px;
      box-sizing: border-box;
      article {
        text-indent: 40px;
        font-size: 16px;
      }
      p {
        margin: 30px 0 0 0;
      }
    }
    section {
      p {
        margin: 0 0 10px 0;
      }
      padding: 20px;
      box-sizing: border-box;
      text-align: left;
      font-size: 16px;
      color: #575757;
      line-height: 30px;
    }
    footer {
      height: 100px;
      margin-top: 50px;
      display: flex;
      justify-content: space-around;
      button {
        background: #00adef;
        color: white;
        width: 150px;
        height: 50px;
      }
    }
  }
}
</style>
