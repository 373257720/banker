<template>
  <div id="usercheck">
    <div class="usercheck con">
      <h2>审核</h2>
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
            :http-request="uploadFile"
            :on-preview="handlePictureCardPreview"
            :on-remove="appear"
            :on-error="appear"
            :on-change="dispear"
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
            :http-request="uploadFile"
            :on-preview="handlePictureCardPreview"
            :on-remove="appear2"
            :on-error="appear2"
            :on-change="dispear2"
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
          :http-request="uploadFile"
          :on-preview="handlePictureCardPreview"
          :on-remove="appear3"
          :on-error="appear3"
          :on-change="dispear3"
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
          :http-request="uploadFile"
          :on-preview="handlePictureCardPreview"
          :on-remove="appear4"
          :on-error="appear4"
          :on-change="dispear4"
          :limit="1"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </div>
      <div class="commit">
        <button @click="commit">提交</button>
        <!-- <button @click="$goto('login')">提交</button> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "usercheck",
  data() {
    return {
      // success: true,
      value: "", //国家名字
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
      userCompanyPic: ""
    };
  },
  computed: {
    success: function() {
      if (this.value != 0 && this.value != 1) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    this.$axios
      .get(`${this.$baseurl}/bsl_web/base/countryList`, {
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
      // console.log(neww,oldd);
      if (neww == 0 || neww == 1 || neww == 2) {
        this.idType = 1;
      } else {
        this.idType = 2;
      }
    }
  },
  methods: {
    commit() {
      // console.log(this.countrydata[this.value]);
      var num = this.countrydata[this.value].countrySort;
      // var userCountryEn=this.countrydata[this.value].countryEnname
      // var  userCountryCh=this.countrydata[this.value].countryZhname
      // if (this.countrydata[this.value]) {
      //   if (num == 0 || num == 1 || num == 2) {
      //     this.idType = 1;
      //   } else {
      //     this.idType = 2;
      //   }
      // }

      this.$axios({
        method: "post",
        url: `${this.$baseurl}/bsl_web/user/submitAuth`,
        data: {
          userCountry: this.value,
          userCountryEn: userCountryEn,
          userCountryCh: userCountryCh,
          userIdentity: this.idnum,
          identityType: this.idType
          // identityPicOne:
          // identityPicTwo:
          // userCompanyCh:
          // userCompanyEn:
          // userCompanyPic:
        },
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    choose(a) {
      var b = document.querySelector(a);
      b.style = "display:none;";
    },
    handleRemove(a, b) {
      document.querySelector(a).style =
        "position:absolute;bottom:0;display:block;";
      document.querySelector(b).style = "display:none";
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
    dispear(file, fileList) {
      this.choose(".idcard_left .el-upload--picture-card");
    },
    dispear2(file, fileList) {
      this.choose(".idcard_right .el-upload--picture-card");
    },
    dispear3(file, fileList) {
      this.choose(".idcard2 .el-upload--picture-card");
    },
    dispear4(file, fileList) {
      this.choose(".companycheck .el-upload--picture-card");
    },
    //文件列表移除文件时的钩子
    appear() {
      this.handleRemove(
        ".idcard_left .el-upload--picture-card",
        ".idcard_left .el-upload-list__item"
      );
    },
    appear2() {
      this.handleRemove(
        ".idcard_right .el-upload--picture-card",
        ".idcard_right .el-upload-list__item"
      );
    },
    appear3() {
      this.handleRemove(
        ".idcard2 .el-upload--picture-card",
        ".idcard2 .el-upload-list__item"
      );
    },
    appear4() {
      this.handleRemove(
        ".companycheck .el-upload--picture-card",
        ".companycheck .el-upload-list__item"
      );
    },
    //点击文件列表中已上传的文件时的钩子,图片放大镜
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 自定义上传
    // 文件上传
    uploadFile(params) {
      console.log(params);
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
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      // if (!isLt2M) {
      //   this.$message.error("请上传2M以下的.xlsx文件");
      //   return false;
      // }
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
  height: 1050px;
  width: 100%;
  .usercheck {
    height: 1050px;
    // overflow: hidden;
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
}
</style>