<template>
  <div id="app">
      <div id="top">
      <div class="top con">
        <header>
          <div class="top-left fl">BANK投資銀行</div>
          <div class="top-right fr">請登陸</div>
        </header>
      </div>
    </div>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <div id="bottom">
      <div class="bottom con">
        <p>BANK投資銀行</p>
        <ul>
          <li>About us</li>
          <li>Contact us</li>
          <li>User agreement</li>
          <li>Privacy treaty</li>
          <li>Legal statement</li>
          <li>Rate standard</li>
          <li>Problem feedback</li>
          <li>Novice tutorial</li>
        </ul>
        <footer>copyright@4coin web.2018</footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
#top {
  background: #eeeeee;
  width: 100%;
  height: 60px;
}
.top {
  height: 60px;
}
#bottom {
  width: 100%;
  height: 150px;
  background: #222222;
  overflow: hidden;
  text-align: center;
  p {
    color: #788ea6;
    font-size: 18px;
    margin: 32px 0;
  }
  ul {
    margin-bottom: 20px;
    color: #788ca5;
    display: flex;
    flex-direction: row;
    font-size: 12px;
    li {
      flex-grow: 1;
    }
  }
  footer {
    color: #4c5d71;
    font-size: 12px;
  }
}
</style>
