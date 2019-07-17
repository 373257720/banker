<template>
  <div id="userpass">
    <div class="userpass">
      <header>个人审核通过</header>
      <nav>
        <ul>
          <li>
            <span>国籍:</span>
            <span>香港</span>
          </li>
          <li>
            <span>身份证号:</span>
            <span>54564564564564</span>
          </li>
          <li>
            <span>公司名称:</span>
            <span>打算付费第三方第三方</span>
          </li>
        </ul>
      </nav>
      <main>
        <div class="idcard">
          <div class="idcard_left">
            <p>身份证正面</p>
            <div class="pic"></div>
          </div>
          <div class="idcard_right">
            <p>身份证反面</p>
            <div class="pic"></div>
          </div>
        </div>
        <div class="idcard idcard2" v-if="success">
          <p>passport</p>
          <div class="pic"></div>
        </div>
      </main>
      <section>
        <p>公司证书</p>
        <div class="com_pic"></div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "userpass"
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
        width: 300px;
        border: 1px solid #ababab;
        border-radius: 5px;
        background: #f6f6f6;
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
      }
    }
  }
}
</style>

