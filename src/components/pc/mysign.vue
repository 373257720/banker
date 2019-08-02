<template>
  <div id="mysign">
    <div class="mysign con">
      <nav>我的签约项目</nav>
      <ul v-if="fillter.length>0">
        <li
          v-for="item in fillter.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
          :key="item.projectName"
          @click="$goto('goods_details')"
        >
          <p>项目名称:{{item.projectName}}</p>
          <section>计划時間:{{item.projectStartTime}}</section>
        </li>
      </ul>
      <section v-if="fillter.length<=0">
        暂无记录
      </section>
      <div class="page" v-if="fillter.length>0">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pagesize"
          layout="total,prev, pager, next, jumper"
          :total="fillter.length"
        ></el-pagination>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "mysign",
  data() {
    return {
      currentPage: 1,
      pagesize: 6,
      fillter: []
    };
  },
  created() {
    this.$axios({
      method: "get",
      url: `${this.$baseurl}/bsl_web/projectSign/project`,
      params: {
        projectStatus: 2,
        pageIndex: this.currentPage,
        pageSize: this.pagesize
      }
    }).then(res => {
      this.fillter = [...res.data.data.lists];  
      this.fillter.forEach((item)=>{
         item.projectStartTime= this.$global.timestampToTime(item.projectStartTime) 
      })   
    });
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
<style lang="scss" scoped>
#mysign {
  width: 100%;
  height: 800;
  overflow: hidden;
  .mysign {
    height: 800px;
      overflow: hidden;
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
    section{
      margin: 0 auto;
      width: 665px;
      font-size: 20px;
      text-align: center;
      padding-top:100px;
      height: 400px;
      box-sizing: border-box;
    }
    .page {
      text-align: center;
    }
  }
}
</style>

