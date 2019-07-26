<template>
  <div id="home">
    <div class="home con">
      <div class="pro_pic">
        <img src="../../assets/edb2f3f9de4e39fc5b6977151ff3d05.png" alt />
      </div>
      <div class="project">
        <h2>所有项目</h2>
        <el-input v-model="search" placeholder="请输入内容">
          <i
            slot="suffix"
            class="el-icon-search"
            @click="prolists(currentPage, pagesize, search)"
            style="cursor: pointer;"
          ></i>
        </el-input>
      </div>
      <article>
        <div class="project_content">
          <ul>
            <li
              v-for="item in fillter.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
              :key="item.id"
            >
              <div class="project_content_top">
                <img
                  :src="`http://192.168.1.37:8080${item.picList[0].projectPic}`"
                  :class="{'active':item.projectStatus==2}"
                  alt
                />
                <span v-if="item">{{item.projectStatus==2?'已签约':''}}</span>
              </div>
              <div class="project_content_bottom">
                <p>项目名称:{{item.projectName}}</p>
                <p>计划时间:{{item.projectStartTime}}</p>
                <button @click="$goto('project_intro',item.projectId)">签约</button>
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
            :total="this.fillter.length"
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
      fillter: []
    };
  },
  created() {
    console.log(111);
    
    this.$axios({
      method: "get",
      url: `${this.$baseurl}/bsl_web/project/getAllProject`,
      params: {
        searchKey: this.search,
        pageIndex: this.currentPage,
        pageSize: this.pagesize
      },
      transformRequest: [
        function(data) {
          let ret = "";
          for (let it in data) {
            ret +=
              encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
          }
          return ret;
        }
      ],
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(res => {
      console.log(res.data.data.lists);
      this.fillter = [...res.data.data.lists];
      // console.log(fillter);
    });
  },
  methods: {
    prolists(currentPage, pagesize, searchkey) {
      console.log(currentPage, pagesize, searchkey);
      this.$axios({
        method: "get",
        url: `${this.$baseurl}/bsl_web/project/getAllProject`,
        params: {
          searchKey: searchkey,
          pageIndex: currentPage,
          pageSize: pagesize
        }
      }).then(res => {
        // console.log(res.data.data.lists);
        this.fillter = [...res.data.data.lists];

        // console.log(fillter);
      });
    },
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
      overflow: hidden;

      img {
        // vertical-align:bottom;
        width: 1200px;
      }
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
      position: relative;
      span {
        position: absolute;
        top: 10px;
        display: inline-block;
        width: 20px;
        height: 20px;
        background: white;
      }
      img {
        width: 250px;
        height: 200px;
        border-radius: 3%;
      }
      .active {
        opacity: 0.5;
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
