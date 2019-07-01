<template>
  <div id="home">
    <div class="home con">
      <div class="pro_pic">
        <img src="../assets/edb2f3f9de4e39fc5b6977151ff3d05.png" alt />
      </div>
      <div class="project">
        <h2>所有項目</h2>
        <el-input v-model="search" placeholder="请输入内容"></el-input>
      </div>
      <div class="project_content">
        <ul>
          <li>
            <div class="project_content_top">
              <img src="../assets/26566ffb301dac8c24d21969b538612.png" alt />
            </div>
            <div class="project_content_bottom">
              <p>項目名稱:324234234234</p>
              <p>計劃時間:423423423423</p>
              <button>簽約</button>
            </div>
          </li>
          <li>
            <div class="project_content_top">
              <img src="../assets/26566ffb301dac8c24d21969b538612.png" alt />
            </div>
            <div class="project_content_bottom">
              <p>項目名稱:324234234234</p>
              <p>計劃時間:423423423423</p>
              <button>簽約</button>
            </div>
          </li>
          <li>
            <div class="project_content_top">
              <img src="../assets/26566ffb301dac8c24d21969b538612.png" alt />
            </div>
            <div class="project_content_bottom">
              <p>項目名稱:324234234234</p>
              <p>計劃時間:423423423423</p>
              <button>簽約</button>
            </div>
          </li>
          <li>
            <div class="project_content_top">
              <img src="../assets/26566ffb301dac8c24d21969b538612.png" alt />
            </div>
            <div class="project_content_bottom">
              <p>項目名稱:324234234234</p>
              <p>計劃時間:423423423423</p>
              <button>簽約</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      search: ""
    };
  }
};
</script>
<style lang="scss">
.project {
  .el-input__inner {
    width: 350px;
    // float: right;
  }
  .el-input {
    width: 350px;
  }
}
</style>

<style lang="scss" scoped>
#home {
  height: 873px;
  width: 100%;
  .home {
    height: 873px;
    .pro_pic {
      height: 120px;
    }
  }
  .project {
    width: 780px;
    display: flex;
    margin: 14px auto;
    justify-content: space-between;
    h2 {
      line-height: 40px;
    }
  }
  .project_content {
    width: 780px;
    margin: 0 auto;
    ul {
      width: 780px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        // width: 30%;
        margin-bottom: 50px;
      }
    }
    .project_content_top img {
      width: 250px;
      height: 200px;
      border-radius: 3%;
      // border: 1px solid #ABABAB;
    }
    .project_content_bottom {
      border-radius: 3%;
      border: 1px solid #ababab;
    }
  }
}
</style>
