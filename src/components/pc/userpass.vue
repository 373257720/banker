<template>
  <div id="userpass">
    <div class="userpass" >
      <header>个人审核通过</header>
      <nav>
        <ul>
          <li>
            <span>用户类型:</span>
            <span>{{user_type==1?'项目方':user_type==4?'中介':''}}</span>
          </li>
          <li>
            <span>国籍:</span>
            <span>{{nationlity}}</span>
          </li>
          <li>
            <span>身份证号:</span>
            <span>{{idnum}}</span>
          </li>
          <li>
            <span>公司名称:</span>
            <span>{{comname}}</span>
          </li>
        </ul>
      </nav>
      <main>
        <div class="idcard">
          <div class="idcard_left">
            <p>身份证正面</p>
            <div class="pic">
              <img :src='idfront' alt="">
            </div>
          </div>
          <div class="idcard_right">
            <p>身份证反面</p>
            <div class="pic">
               <img :src='idback' alt="">
            </div>
          </div>
        </div>
        <!-- <div class="idcard idcard2" v-if="success">
          <p>passport</p>
          <div class="pic"></div>
        </div>-->
      </main>
      <section>
        <p>公司证书</p>
        <div class="com_pic">
          <img :src='idback' alt="">
        </div>
      </section>
    </div>
     <!-- <div class="userpass" v-else-if="result==0">
      <header>个人审核中</header>
    </div>
     <div class="userpass" v-else-if="result==2">
      <header>个人审核不通过</header>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "userpass",
  data(){
    return{
        result:null,
        user_type:'',
        nationlity:'',
        idnum:'',
        comname:'',
        idfront:'',
        idback:'',
    }
  },
  created() {
      this.$axios({
        method: "get",
        url: `${this.$baseurl}/bsl_web/user/getAuthDetails`
        // transformRequest: [
        //   function(data) {
        //     let ret = "";
        //     for (let it in data) {
        //       ret +=
        //         encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        //     }
        //     return ret;
        //   }
        // ],
        // headers: {
        //   "Content-Type": "application/x-www-form-urlencoded"
        // }
      })
      .then(res => {
        console.log(res.data.data.optStatus);
        this.result=res.data.data.optStatus
        this.user_type=res.data.data.userType;
        this.nationlity=res.data.data.userCountryCh;
        this.idnum=res.data.data.userIdentity;
        this.comname=res.data.data.userCompanyCh;
        // console.log('http://192.168.1.37:8080'+res.data.data.identityPicOne);
        this.idfront='http://192.168.1.37:8080'+res.data.data.identityPicOne
        this.idback='http://192.168.1.37:8080'+res.data.data.identityPicOne
      });
  }
};
</script>
<style lang='scss' scoped>
#userpass {
  height: 872px;
  width: 100%;
  .userpass {
    height: 872px;
    width: 680px;
    margin: 0 auto;
    header {
      font-size: 24px;
      font-weight: 600;
      line-height: 70px;
      text-align: center;
    }
    nav {
      li {
        margin-bottom: 28px;
      }
    }
    main {
      height: 210px;
      margin-bottom: 20px;
      .idcard {
        display: flex;
        justify-content: space-between;
      }
      p {
        margin-bottom: 5px;
      }
      .pic {
        height: 200px;
        width: 320px;
        box-sizing: border-box;
        border: 1px solid #ababab;
        border-radius: 5px;
        background: #f6f6f6;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    section {
      p {
        margin-bottom: 5px;
      }
      .com_pic {
        height: 280px;
        border-radius: 5px;
        background: #f6f6f6;
        border: 1px solid #ababab;
        img{
          height: 100%;
          width: 100%;
        }
      }
    }
  }
}
</style>

