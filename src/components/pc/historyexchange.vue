<template>
  <div class="historytable">
    <el-table
      :data="fillter.slice((currpage - 1) * pagesize, currpage * pagesize)"
      style="width: 100%"
      @sort-change="sort_change"
      :default-sort="{prop: 'CreatedStr', order: 'descending'}"
    >
      <el-table-column :label="tablehead[0]" width="230" sortable prop="CreatedStr">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.CreatedStr}}</span>
        </template>
      </el-table-column>
      <el-table-column :label="tablehead[1]">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">{{type[scope.row.Type]}}</div>
        </template>
      </el-table-column>
      <el-table-column :label="tablehead[2]">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <span>{{scope.row.CurrencyFrom}}</span>
            to
            <span>{{scope.row.CurrencyTo}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column :label="tablehead[3]">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <span>{{scope.row.AmountFrom}}</span>
            <span>{{scope.row.CurrencyFrom}}</span>
            to
            <span>{{scope.row.AmountTo}}</span>
            <span>{{scope.row.CurrencyTo}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column :label="tablehead[4]">
        <template slot-scope="scope">
          <el-tooltip placement="top">
            <div slot="content">{{resultimg[scope.row.State].inf}}</div>
            <!-- <img :src="resultimg[scope.row.State].text" alt> -->
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :page-size="pagesize"
      :pager-count="5"
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :current-page.sync="currpage"
      @size-change="handleSizeChange"
      :total="transfer.length"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: "historyexchange",
  props: ["transfer", "tablehead"],

  data() {
    return {
      // currencyfrom:
      pagesize: 10, // 每页条数
      fillter: [],
      // transfer_currpage:1,
      currpage: 1, //当前页数
    };
  },
  computed: {
    type: function() {
      return [
      ];
    },
    resultimg: function() {
      return [
        {
          inf: this.$t("history.done"),
          // text: require("../assets/rusult_complete.png")
        },
        {
          inf: this.$t("history.pending"),
          // text: require("../assets/2517c241736f218dd6561f2dab31812.png")
        },
        {
          inf: this.$t("history.declined"),
          // text: require("../assets/result_failed.png") 
        }
      ];
    }
  },
  created() {
    // console.log(this.tablehead);
    this.fillter = [...this.transfer];
    for (let i = 0; i < this.fillter.length; i++) {
      var str = this.fillter[i].CreatedStr;
      var date = str.slice(0, 2);
      var month = str.slice(3, 5);
      var year = str.slice(6, 10);
      var time = str.slice(11);
      str = `${year}-${month}-${date} ${time}`;
      this.fillter[i].CreatedStr = str;
    }
  },
  methods: {
    handleCurrentChange(cpage) {
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
<style>
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #302e39 !important;
}
.box_tap .el-tabs__content {
  height: 650px;
}
.historytable .el-pagination {
  position: absolute;

  left: 50%;
  transform: translateX(-50%);
  bottom: 40px;
  /* background: #302e39; */
}

.historytable .el-pagination button:disabled {
  background: 0;
}
.el-pagination .el-pager li {
  background: 0;
  font-size: 14px;
}
.historytable .el-pagination {
  color: #aaa;
}
.historytable .el-pagination .btn-prev .el-icon,
.el-pagination .btn-next .el-icon {
  font-size: 14px;
}
.historytable .el-pagination .btn-next,
.el-pagination .btn-prev {
  color: #aaa;
  background: 0;
}
.historytable .el-table td,
.el-table th.is-leaf {
  border-bottom: 1px dashed #afb9c7;
}
.historytable .el-table td,
.el-table th {
  text-align: center;
  color: #afb9c7;
}
.historytable .el-tabs__item {
  color: #aaaaaa;
  line-height: 55px;
}
.historytable .el-table th,
.el-table tr {
  background: #302e39;
}
.historytable .el-tabs__item.is-active {
  color: #409eff;
}
.historytable .el-tabs__item:hover {
  color: #409eff;
}
.historytable .el-tabs__nav-wrap::after {
  background-color: #373542;
}
</style>
<style lang="scss" scoped>
.history {
  position: relative;
  // height: 1000px;
}

</style>