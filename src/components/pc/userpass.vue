<template>
  <div id="userpass">
    <div class="userpass" v-if="status==1">
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
              <img :src="idfront" alt />
            </div>
          </div>
          <div class="idcard_right">
            <p>身份证反面</p>
            <div class="pic">
              <img :src="idback" alt />
            </div>
          </div>
        </div>
      </main>
      <section>
        <p>公司证书</p>
        <div class="com_pic">
          <img :src="idback" alt />
        </div>
      </section>
    </div>
    <div class="userpass common" v-else-if="status===0">
      <header>您的资料已提交成功,请等待审核</header>
      <section @click="$goto('home')">回到主页</section>
    </div>
    <div class="userpass common" v-else-if="status==2">
      <header>很抱歉，您的资料审核不通过</header>
      <section @click="$goto('usercheck')">再次申请</section>
    </div>
  </div>
</template>
<script>
export default {
  name: "userpass",
  data() {
    return {
      result: null,
      user_type: "",
      nationlity: "",
      idnum: "",
      comname: "",
      idfront: "",
      idback: "",
      status: ""
    };
  },
  created() {
    //审核状态0审核中，1，审核通过，2审核不通过
    this.$axios({
      method: "get",
      url: `${this.$baseurl}/bsl_web/user/getAuthDetails`
    }).then(res => {
      this.status = res.data.data.optStatus;
      if (res.data.data.optStatus == 2) {
        this.user_type = res.data.data.userType;
        this.nationlity = res.data.data.userCountryCh;
        this.idnum = res.data.data.userIdentity;
        this.comname = res.data.data.userCompanyCh;
        this.idfront =
          "http://192.168.1.37:8080" + res.data.data.identityPicOne;
        this.idback = "http://192.168.1.37:8080" + res.data.data.identityPicOne;
      }
    });
  }
};
</script>
<style lang='scss' scoped>
#userpass {
  // height: 872px;
  width: 100%;
  .userpass {
    height: 872px;
    width: 680px;
    margin: 0 auto;
    box-sizing: border-box;
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
        img {
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
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
  .common {
    padding-top:100px;
    box-sizing: border-box;
    height: 750px;
    section {
      background: #00adef;
      width: 150px;
      margin: 0 auto;
      height: 40px;
      line-height: 40px;
      color: white;
      text-align: center;
      border-radius: 5px;
    }
  }
}
</style>

