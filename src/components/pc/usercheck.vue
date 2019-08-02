<template>
  <div id="usercheck">
    <div class="usercheck con" v-if="success1">
      <h2>审核</h2>
      <div class="nationality">
        <p>类型</p>
        <el-select v-model="valuename" filterable placeholder="请选择">
          <el-option
            v-for="(item) in usertype"
            :key="item.label"
            :label="item.label"
            :value="item.label"
          ></el-option>
        </el-select>
      </div>
      <div class="nationality">
        <p>国籍</p>
        <el-select v-model="value" filterable placeholder="请选择">
          <el-option
            v-for="(item,idx) in countrydata"
            :key="item.countryCode"
            :label="item.countryTcname"
            :value="idx"
          ></el-option>
        </el-select>
      </div>
      <div class="idcard_num">
        <p>身份证号码</p>
        <el-input placeholder="请输入内容" v-model="idnum" clearable></el-input>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </div>
      <div class="idcard" v-show="!success">
        <div class="idcard_left fl">
          <p>身份证正面</p>
          <el-upload
            ref="upload"
            action
            list-type="picture-card"
            :http-request="function(params){return uploadFile(params,1)}"
            :on-preview="handlePictureCardPreview"
            :on-remove="(file, fileList)=>appear(file, fileList,'.idcard_left')"
            :on-error="(file, fileList)=>appear(file, fileList,'.idcard_left')"
            :on-change="(file, fileList)=>dispear(file, fileList,'.idcard_left')"
            :limit="1"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </div>
        <div class="idcard_right fr">
          <p>身份证反面</p>
          <el-upload
            action
            list-type="picture-card"
            :http-request="function(params){return uploadFile(params,2)}"
            :on-preview="handlePictureCardPreview"
            :on-remove="(file, fileList)=>appear(file, fileList,'.idcard_right')"
            :on-error="(file, fileList)=>appear(file, fileList,'.idcard_right')"
            :on-change="(file, fileList)=>dispear(file, fileList,'.idcard_right')"
            :limit="1"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </div>
      </div>
      <div class="idcard idcard2" v-show="success">
        <p>passport</p>
        <el-upload
          action
          list-type="picture-card"
          :http-request="function(params){return uploadFile(params,1)}"
          :on-preview="handlePictureCardPreview"
          :on-remove="(file, fileList)=>appear(file, fileList,'.idcard2')"
          :on-error="(file, fileList)=>appear(file, fileList,'.idcard2')"
          :on-change="(file, fileList)=>dispear(file, fileList,'.idcard2')"
          :limit="1"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </div>
      <div class="companyname">
        <p>公司名称</p>
        <el-input placeholder="请输入内容" v-model="companyname" clearable></el-input>
      </div>
      <div class="companyname">
        <p>公司名称</p>
        <el-input placeholder="请输入内容" v-model="CompanynameEn" clearable></el-input>
      </div>
      <div class="companycheck">
        <p>公司证书</p>
        <el-upload
          action
          list-type="picture-card"
          :http-request="function(params){return uploadFile(params,3)}"
          :on-preview="handlePictureCardPreview"
          :on-remove="(file, fileList)=>appear(file, fileList,'.companycheck')"
          :on-error="(file, fileList)=>appear(file, fileList,'.companycheck')"
          :on-change="(file, fileList)=>dispear(file, fileList,'.companycheck')"
          :limit="1"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </div>
      <div class="commit">
        <button @click="commit">提交</button>
      </div>
    </div>
    <div class="usercheck2 con" v-if="!success1">
      <nav>
        <img src="../../assets/19b9f427bcaefd8a3e879024299a204.png" alt />
        <span>您已提交成功{{timeout}}s</span>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "usercheck",
  data() {
    return {
      success1: true,
      timeout: 3,
      value: "", //国家名字
      valuename: "",
      idnum: "",
      idType: "",
      dialogVisible: false,
      dialogImageUrl: "",
      formData: "",
      countrydata: [],
      identityPicOne: "",
      identityPicTwo: "",
      companyname: "",
      CompanynameEn: "",
      CompanyPic: "",
      usertype: [
        {
          value: "0",
          label: "项目方"
        },
        {
          value: "01",
          label: "中介"
        }
      ]
    };
  },
  computed: {
    success: function() {
      if (this.value != 0 && this.value != 1 && this.value != 2) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    this.$axios
      .get(`${this.$baseurl}/bsl_web/base/countryList.do`, {
        transformRequest: [
          function(data) {
            let ret = "";
            for (let it in data) {
              ret +=
                encodeURIComponent(it) +
                "=" +
                encodeURIComponent(data[it]) +
                "&";
            }
            return ret;
          }
        ],
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(res => {
        this.countrydata = [...res.data.data];
        //  console.log(this.countrydata);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {
    value: function(neww, oldd) {
      if (neww == 0 || neww == 1 || neww == 2) {
        this.idType = 1;
      } else {
        this.idType = 2;
      }
    }
  },
  methods: {
    onsuccess(res, fild, index) {
      console.log(index);
    },
    commit() {
      var num = this.countrydata[this.value].countrySort;
      var user_type;
      var userCountryEn = this.countrydata[this.value].countryEnname;
      var userCountryCh = this.countrydata[this.value].countryZhname;
      if (this.countrydata[this.value]) {
        if (num == 0 || num == 1 || num == 2) {
          this.idType = 1;
        } else {
          this.idType = 2;
        }
      }
      if (this.valuename == "项目方") {
        user_type = 1;
      } else if (this.valuename == "中介") {
        user_type = 4;
      }
      var data1 = {
        userType: user_type,
        userCountry: this.countrydata[this.value].countryCode,
        userCountryEn: userCountryEn,
        userCountryCh: userCountryCh,
        userIdentity: this.idnum,
        identityType: this.idType,
        identityPicOne: this.identityPicOne,
        identityPicTwo: this.identityPicTwo,
        userCompanyCh: this.companyname,
        userCompanyEn: this.CompanynameEn,
        userCompanyPic: this.CompanyPic
      };
      this.$axios({
        method: "post",
        url: `${this.$baseurl}/bsl_web/user/submitAuth`,
        data: data1,
        transformRequest: [
          function(data) {
            let ret = "";
            for (let it in data) {
              ret +=
                encodeURIComponent(it) +
                "=" +
                encodeURIComponent(data[it]) +
                "&";
            }
            return ret;
          }
        ],
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
        .then(res => {
          if (res.data.resultCode == 10000) {
            this.success1 = !this.success1;
            var aa = setInterval(() => {
              --this.timeout;
            }, 1000);
             setTimeout(() => {
              clearInterval(aa);
            this.$goto("login");
            }, 4000);
            
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleAvatarSuccess(res, file) {
      console.log(res, file);
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    //文件状态改变时的钩子，参数为上传的文件,把那个十字选择框去掉
    dispear(file, fileList, name) {
      var a = name + " .el-upload--picture-card";
      var b = document.querySelector(a);
      b.style = "display:none;";
    },
    appear(file, fileList, name) {
      var a = name + " .el-upload--picture-card";
      var b = name + " .el-upload-list__item";
      document.querySelector(a).style =
        "position:absolute;bottom:0;display:block;";
      document.querySelector(b).style = "display:none";
    },
    //点击文件列表中已上传的文件时的钩子,图片放大镜
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 自定义上传
    // 文件上传
    uploadFile(params, index) {
      // console.log(params,index);
      const _file = params.file;
      // const isLt2M = _file.size / 1024 / 1024 < 2;
      // 通过 FormData 对象上传文件
      this.formData = new FormData();
      this.formData.append("file", _file);
      this.$axios({
        method: "post",
        url: `${this.$baseurl}/bsl_web/upload/pic.do`,
        data: this.formData,
        headers: {  
          "Content-Type": "multipart/form-data"
        }
      })
        .then(res => {
          var imgurl = res.data.data.url;
          if (index == 1) {
            this.identityPicOne = imgurl;
          } else if (index == 2) {
            this.identityPicTwo = imgurl;
          } else if (index == 3) {
            this.CompanyPic = imgurl;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 确认上传
    submitUpload() {
      this.$refs.upload.submit();
      this.goto();
    }
  }
};
</script>
<style lang="scss">
.idcard {
  .el-upload--picture-card {
    width: 350px;
    height: 184px;
    background: #f6f6f6;
    border: 1px solid #ababab;
  }
  .el-upload-list__item {
    width: 350px;
    height: 184px;
  }
  .el-icon-plus {
    line-height: 184px;
  }
}
.idcard2 {
  position: relative;
  .el-upload--picture-card {
    width: 736px;
  }
  .el-upload-list__item {
    width: 736px;
    height: 184px;
  }
}
.companycheck {
  .el-upload--picture-card {
    width: 736px;
    height: 184px;
    border: 1px solid #ababab;
    background: #f6f6f6;
    line-height: 184px;
  }
  .el-upload-list__item {
    width: 736px;
    height: 184px;
  }
}
.usercheck {
  .el-select {
    width: 100%;
  }
  .el-upload--text,
  .el-input__inner {
    background: #f6f6f6;
    border: 1px solid #ababab;
  }
}
</style>

<style lang="scss" scoped>
#usercheck {
  height: 1180px;
  width: 100%;
  .usercheck {
    height: 1180px;
    h2 {
      text-align: center;
      padding: 38px 0 38px 0;
      box-sizing: border-box;
      font: {
        size: 34px;
        weight: 600;
      }
    }
    .nationality,
    .idcard,
    .companyname,
    .idcard_num,
    .companycheck {
      width: 736px;
      margin: 0 auto;
    }
    .idcard_num {
      margin-bottom: 27px;
      p {
        margin-bottom: 5px;
      }
    }
    .companyname {
      margin-bottom: 27px;
      p {
        margin-bottom: 5px;
      }
    }
    .nationality {
      margin-bottom: 27px;
      p {
        margin-bottom: 5px;
      }
    }
    .idcard {
      height: 210px;
      margin-bottom: 27px;
      p {
        margin-bottom: 5px;
      }
    }
    .idcard_left,
    .idcard_right {
      position: relative;
      width: 350px;
      height: 210px;
    }
    .companycheck {
      height: 210px;
      position: relative;
      p {
        margin-bottom: 5px;
      }
    }
    .commit {
      text-align: center;
      margin: 0 auto;
      width: 736px;
      button {
        background: #00adef;
        width: 736px;
        height: 40px;
        margin-top: 30px;
        line-height: 40px;
        font-size: 18px;
        color: white;
        // color:
      }
    }
  }
  .usercheck2{
  height: 800px;
  text-align: center;
  padding-top:400px;
  box-sizing: border-box;
  nav {
    img {
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
    }
  }
  }
}
</style>