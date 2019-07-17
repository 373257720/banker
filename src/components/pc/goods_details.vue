<template>
  <div id="goods_details">
    <div class="goods_details">
      <header>項目詳情</header>
      <nav>
        <p>
          項目名稱:
          <span>sdfsdfdsfsdf</span>
        </p>
        <p>
          計劃時間:
          <span>fsdfsdfds</span>
        </p>
      </nav>
      <main>
        <article>
          <ul>
            <li v-for="(item) in details_lists" :key="item">
              <p>{{item}}</p>
              <p></p>
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
      details_lists: [
        "公司名稱:",
        "是否上市公司:",
        "項目介紹:",
        "集資金額:",
        "聯繫電話:",
        "電郵:",
        "签约方："
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
#goods_details {
  width: 100%;
  height: 870px;
  .goods_details {
    height: 870px;
    width: 664px;
    margin: 0 auto;
    header {
      font-size: 36px;
      font-weight: 500;
      margin: 30px 0;
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
          font-weight: 600;
          
        }
      }
      aside {
        width: 320px;
        height: 400px;
        background: red;
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
      margin-top: 72px;
      margin: 72px auto 0;
    }
  }
}
</style>

