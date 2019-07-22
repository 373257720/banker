<template>
  <div id="mysign">
    <div class="mysign con">
      <nav>我的簽約項目</nav>
      <ul>
        <li @click="$goto('goods_details')">
          <p>項目名稱：的馮紹峰地方水電費</p>
          <section>計劃時間</section>
        </li>
        <li></li>
        <li class="blue">
          <p>項目名稱：的馮紹峰地方水電費</p>
          <section>計劃時間</section>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "mysign"
};
</script>
<style lang="scss" scoped>
#mysign {
  width: 100%;
  height: 875;
  .mysign {
    height: 875px;
    nav {
      margin-top: 50px;
      font-size: 36px;
      font-weight: 500;
      text-align: center;
    }
    ul {
      margin: 10px auto;
      width: 665px;
      li {
        width: 665px;
        height: 86px;
        box-sizing: border-box;
        border: 1px solid #ababab;
        border-radius: 5px;
        margin: 10px 0;
        text-align: center;
        line-height: 32px;
        padding: 10px 0;
      }
      .blue {
        background: #00adef;
        color: white;
      }
    }
  }
}
</style>

