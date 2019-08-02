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
          <ul v-if="fillter.length>0">
            <li
              v-for="item in fillter.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
              :key="item.id"
            >
              <div class="project_content_top">
                <img :src="`http://192.168.1.37:8080${item.picList[0].projectPic}`" :class="{'active':item.projectStatus==2}" alt />
                <p v-if="item.projectStatus==2?true:false">
                  <span>{{item.projectStatus==2?'已签约':''}}</span>
                </p>
              </div>
              <div class="project_content_bottom">
                <p>项目名称：{{item.projectName}}</p>
                <p>计划时间：{{item.projectStartTime}}</p>
                <button @click="goto('project_intro',item.projectId)">签约</button>
              </div>
            </li>
          </ul>
          <section v-if="fillter.length<=0">暂无记录</section>
        </div>  
        <div class="page">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="pagesize"
            layout="total,prev, pager, next, jumper"
            :total="this.pageTotal"
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
      fillter: [],
      pageTotal:null,
    };
  },
  created() {
    this.prolists(this.currentPage, this.pagesize, this.search);
  },
  methods: {
    goto(name1,id){
      this.$router.push({name: name1, query: {idx: id}})    
    },
    prolists(currentPage, pagesize, searchkey) {
      this.$axios({
        method: "get",
        url: `${this.$baseurl}/bsl_web/project/getAllProject`,
        params: {
          searchKey: searchkey,
          pageIndex: currentPage,
          pageSize: pagesize
        }
      }).then(res => {
        if (res.data.resultCode == 10090) {
          this.$goto("login");
        } else if (res.data.resultCode == 10000) {
          this.pageTotal=res.data.data.pageTotal;
          this.fillter = [...res.data.data.lists];
          this.fillter.forEach(item => {
            item.projectStartTime = this.$global.timestampToTime(
              item.projectStartTime
            );
          });
        }
      });
    },
    // handleSizeChange(val) {
    //   // this.prolists(this.currentPage, this.pagesize, this.search);
    //   // console.log(`每页 ${val} 条`);
    // },
    handleCurrentChange(val) {
        this.prolists(val, this.pagesize, this.search);
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
      width: 900px;
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
      font-size: 22px;
      // font-weight: 600;
    }
  }
  .project_content {
    // text-align: center;
    width: 900px;
    margin: 0 auto;
    ul {
      width: 900px;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 250px;
        margin-right: 40px;
        margin-bottom: 50px;
      }
    }
    section {
      width: 780px;
      font-size: 20px;
      text-align: center;
      padding-top: 100px;
    }
    .project_content_top {
      width: 250px;
      height: 200px;
      margin-bottom: 10px;
      border: 1px solid #ababab;
      border-radius: 3%;
      box-sizing: border-box;
      overflow: hidden;
      position: relative;
      p {
        position: absolute;
        top: 0px;
        right: 5%;
        display: flex;
        justify-content: center;
        height: 100px;
        width: 50px;
        background: url(../../assets/525758de00e12ddcfcc1bab0acb57d2.png)
          no-repeat;
        color: white;
        span {
          display: inline-block;
          width: 16px;
          font-size: 16px;
        }
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
      height: 120px;
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
