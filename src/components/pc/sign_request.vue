<template>
  <div id="sign_request">
    <div class="sign_request">
      <h3>签约请求</h3>
      <header>
        <aside></aside>
        <ul>
          <li>
            <span>项目名称:</span>
            <span>4564564564564564564564</span>
          </li>
          <li>
            <span>项目时间:</span>
            <span>4564564564564564564564</span>
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
        <pre>
    一.最近的中国新说唱亲爱的,热爱的还有向往的生活534534534534534534534都可以用会员免广告啦 sdfsdfsd sdf sdf 
    二.最近的中国新说唱亲爱的,热爱的还有向往的生活都可以用会员免广告啦
    三.最近的中国新说唱亲爱的,热爱的还有向往的生活都可以用会员免广告啦dsfdsffffffffffffffffffffffffffffffffffffff
        </pre>
        <p>条款:</p>
        <pre>
    一.最近的中国新说唱亲爱的,热爱的还有向往的生活534534534534534534534都可以用会员免广告啦 sdfsdfsd sdf sdf 
    二.最近的中国新说唱亲爱的,热爱的还有向往的生活都可以用会员免广告啦
    三.最近的中国新说唱亲爱的,热爱的还有向往的生活都可以用会员免广告啦
      </pre>
      </main>
      <section></section>
      <footer>
        <button>拒绝签约</button>
        <button>同意签约</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {};
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
        border: 1px solid #ababab;
        border-radius: 3px;
        box-sizing: border-box;
        height: 250px;
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
      pre {
        margin: 0;
        font-size: 14px;
        //  text-indent: 0px;
      }
    }
    // article {
    //   height: 200px;
    //   background: green;
    // }
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
