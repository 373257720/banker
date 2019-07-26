<template>
  <div class="historytable">
    <el-table
      :data="fillter.slice((currpage - 1) * pagesize, currpage * pagesize)"
      style="width: 100%"
      @sort-change="sort_change"
      :default-sort="{prop: 'CreatedStr', order: 'descending'}"
    >
      <el-table-column prop="CreatedStr" :label="tablehead[0]" width="230">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.signTime}}</span>
        </template>
      </el-table-column>
      <el-table-column :label="tablehead[1]">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">{{scope.row.bslName}}</div>
        </template>
      </el-table-column>
      <el-table-column :label="tablehead[2]">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <span>{{scope.row.projectName}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column :label="tablehead[3]">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <span>{{scope.row.projectStartTime}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column :label="tablehead[4]">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="fillter.length>0"
      :page-size="pagesize"
      :pager-count="5"
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :current-page.sync="currpage"
      @size-change="handleSizeChange"
      :total="fillter.length"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: "historytable",
  data() {
    return {
      pagesize: 6, // 每页条数
      newdata: "",
      currpage: 1,
      fillter: [],
      tablehead: ["申请时间", "申请中间人", "项目名称", "计划时间", "操作"]
      //当前页数
      //sort-change绑定方法具有参数：column，这是一个对象
      // column: {
      //   prop: "CreatedStr", // el-table-column中的prop
      //   order: "descending" // 'ascending' or 'descending'
      // },
    };
  },
  computed: {
    type: function() {
      // return [
      //   this.$t("history.send"),
      //   this.$t("history.withdrawl"),
      //   this.$t("history.deposit"),
      //   this.$t("history.ftof"),
      //   this.$t("history.fton"),
      //   this.$t("history.ntof"),
      //   this.$t("history.nton"),
      //   this.$t("history.fee")
      // ];
    }
    // resultimg: function() {
    //   return [
    //     {
    //       inf: this.$t("history.done")
    //       // text: require("../assets/rusult_complete.png")
    //     },
    //     {
    //       inf: this.$t("history.pending")
    //       // text: require("../assets/2517c241736f218dd6561f2dab31812.png")
    //     },
    //     {
    //       inf: this.$t("history.declined")
    //       // text: require("../assets/result_failed.png")
    //     }
    //   ];
    // }
  },
 async created() {
       function abc() {
            let a = await this.$global.getdata(this.$baseurl,1,this.currpage.this.pagesize);
            console.log(a);
        }
    abc();

    // console.log(this.$global.a);

    // this.$axios({
    //   method: "get",
    //   url: `${this.$baseurl}/bsl_web/projectSign/project`,
    //   params: {
    //     projectStatus: 1,
    //     pageIndex: this.currpage,
    //     pageSize: this.pagesize
    //   }
    // }).then(res => {
    //   this.fillter = [...res.data.data.lists];
    //   this.fillter.forEach((item)=>{
    //      item.projectStartTime= this.$global.timestampToTime(item.projectStartTime)
    //      item.signTime=this.$global.timestampToTime(item.signTime)
    //   })
    // });
  },
  methods: {
    handleCurrentChange(cpage) {
      console.log(this.fillter);

      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
    },
    sort_change(column) {
      // this.currpage = 1; // return to the first page after sorting
      if (column.prop === "CreatedStr") {
        if (column.order === "descending") {
          this.fillter.sort(function(a, b) {
            return (
              Date.parse(b.CreatedStr.replace(/-/g, "/")) -
              Date.parse(a.CreatedStr.replace(/-/g, "/"))
            );
          });
          // console.log(this.fillter);
        } else if (column.order === "ascending") {
          this.fillter.sort(function(a, b) {
            return (
              Date.parse(a.CreatedStr.replace(/-/g, "/")) -
              Date.parse(b.CreatedStr.replace(/-/g, "/"))
            );
          });
        }
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.historytable {
  .el-table td,
  .el-table th {
    padding: 7px 0;
  }
  .box_tap .el-tabs__content {
    height: 650px;
  }
  .el-pagination {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0px;
    /* background: #302e39; */
  }
  .el-pagination button:disabled {
    background: 0;
  }
  .el-pagination .el-pager li {
    background: 0;
    font-size: 14px;
  }
  .btn-prev .el-icon,
  .el-pagination .btn-next .el-icon {
    font-size: 16px;
  }
  .btn-next,
  .el-pagination .btn-prev {
    color: #aaa;
    background: 0;
  }
  .el-table td,
  .el-table th.is-leaf {
    border-bottom: 1px dashed #afb9c7;
  }
  .el-table td,
  .el-table th {
    text-align: center;
    color: #afb9c7;
  }
  .el-tabs__item {
    color: #aaaaaa;
    line-height: 55px;
  }
  .el-tabs__item.is-active {
    color: #409eff;
  }
  .el-tabs__item:hover {
    color: #409eff;
  }
  .el-tabs__nav-wrap::after {
    background-color: #373542;
  }
}
</style>
<style lang="scss" scoped>
.history {
  position: relative;
  // height: 1000px;
}
.historytable {
  height: 500px;
}
</style>