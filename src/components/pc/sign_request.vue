<template>
  <div id="sign_request">
    <div class="sign_request">
      <h3>签约请求</h3>
      <header>
        <aside></aside>
        <ul>
          <li>
            项目名称:
            <span>4564564564564564564564</span>
          </li>
          <li>
            项目时间:
            <span>4564564564564564564564</span>
          </li>
          <li>
            申请中间人:
            <span>4564564564564564564564</span>
          </li>
          <li>
            签约方公司:
            <span>4564564564564564564564</span>
          </li>
        </ul>
      </header>
      <main></main>
      <article></article>
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
      font-size: 25px;
      box-sizing: border-box;
    }
    header {
      height: 250px;
      display: flex;
      aside {
        width: 250px;
        background: red;
        height: 250px;
      }
      ul {
          flex:1;
        text-align: left;
        display: flex;
       flex-direction:column;
       justify-content:center;
        padding-left:50px;
        justify-content: space-around;
        box-sizing: border-box;
        li {
        //   margin-bottom: 20px;
        }
      }
    }
    main{
        height: 300px;
        background: yellow;
    }
    article{
        height: 200px;
        background: green;
    }
    footer{
        height: 100px;
        margin-top:50px;
        display: flex;
        justify-content: space-around;
        button{
            background: #00adef;
            color:white;
            width: 150px;
            height: 50px;
        }
    }
  }
}
</style>
