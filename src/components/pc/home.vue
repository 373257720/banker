<template>
  <div id="home">
    <div class="home con">
      <div class="pro_pic">
        <img src="../../assets/edb2f3f9de4e39fc5b6977151ff3d05.png" alt />
      </div>
      <div class="project">
        <h2>所有项目</h2>
        <el-input v-model="search" placeholder="请输入内容">
          <i slot="suffix" class="el-icon-search"></i>
        </el-input>
      </div>
      <article>
        <div class="project_content">
          <ul>
            <li
              v-for="item in fillter.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
              :key="item"
            >
              <div class="project_content_top">
                <img src="../../assets/26566ffb301dac8c24d21969b538612.png" alt />
              </div>
              <div class="project_content_bottom">
                <p>项目名称:到辅导费水电费的说法水电费水电费等房东房东房东房东分随碟附送的</p>
                <p>计划时间:423423423423</p>
                <button @click="$goto('project_intro',item)">签约</button>
              </div>
            </li>
          </ul>
        </div>
        <div class="page">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="pagesize"
            layout="total,prev, pager, next, jumper"
            :total="8"
          ></el-pagination>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      search: "",
      currentPage: 1,
      pagesize: 6,
      fillter: [1, 2, 3, 4, 5, 6, , 1]
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPag = val;
    }
  }
};
</script>
<style lang="scss">
.project {
  .el-input__inner {
    width: 350px;
    // float: right;
  }
  .el-icon-search {
    line-height: 40px;
    margin-right: 5px;
  }
  .el-input {
    width: 350px;
  }
}
</style>

<style lang="scss" scoped>
#home {
  height: 1100px;
  width: 100%;
  .home {
    height: 1100px;
    .pro_pic {
      height: 120px;
    }
    article {
      position: relative;
      width: 780px;
      height: 830px;
      margin: 0 auto;
      .page {
        position: absolute;
        width: 780px;
        bottom: 0;
        text-align: center;
      }
    }
  }
  .project {
    width: 780px;
    display: flex;
    margin: 40px auto;
    justify-content: space-between;
    h2 {
      line-height: 40px;
      font-size: 18px;
    }
  }
  .project_content {
    // text-align: center;
    width: 780px;
    margin: 0 auto;
    ul {
      width: 780px;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 250px;
        margin-right: 10px;
        margin-bottom: 50px;
      }
    }
    .project_content_top {
      width: 250px;
      height: 200px;
      margin-bottom: 10px;
      img {
        width: 250px;
        height: 200px;
        border-radius: 3%;
      }
    }
    .project_content_bottom {
      border-radius: 3%;
      border: 1px solid #ababab;
      height: 140px;

      position: relative;
      box-sizing: border-box;
      overflow: hidden;
      padding: 5px 0;
      p {
        font-size: 14px;
        box-sizing: border-box;
        word-wrap: break-word;
        overflow: hidden;
        width: 250px;
        line-height: 24px;
        padding: 0 10px;
      }
      button {
        text-align: center;
        display: block;
        width: 100%;
        height: 34px;
        background: #00adef;
        position: absolute;
        bottom: 0;
        color: #ffffff;
      }
    }
  }
}
</style>
