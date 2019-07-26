import axios from 'axios'
const global = {
  timestampToTime: function (timestamp) {
    var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为1
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y + M + D + h + m + s;
  },

  // changepage: async function (url, num, currpage, pagesize) {
  //   var arr = [];
  //   return new Promise((resolve, reject) =>{

  //   }
  //    axios({
  //     method: "get",
  //     url: `${url}/bsl_web/projectSign/project`,
  //     params: {
  //       projectStatus: num,
  //       pageIndex: currpage,
  //       pageSize: pagesize
  //     }
  //   }).then(res => {
  //     arr = [...res.data.data.lists];
  //     arr.forEach((item) => {
  //       item.projectStartTime = this.timestampToTime(item.projectStartTime)
  //       item.signTime = this.timestampToTime(item.signTime)
  //     })    
  //   })
  // },

  getdata: function (url, num, currpage, pagesize) {
    axios.interceptors.response.use(function (res) {
      let arr = [];
      arr = [...res.data.data.lists];
      arr.forEach((item) => {
        item.projectStartTime = global.timestampToTime(item.projectStartTime)
        item.signTime = global.timestampToTime(item.signTime)
      })
      res.data = arr;
      return res;
    })
    return axios({
      method: "get",
      url: `${url}/bsl_web/projectSign/project`,
      params: {
        projectStatus: num,
        pageIndex: currpage,
        pageSize: pagesize
      }
    });
  },
  // abc:async function(url, num, currpage, pagesize){
  //   let a = await this.getdata(url, num, currpage, pagesize);
  //   console.log(a);
  // }


}

export default global
