<template>
  <div id="usercheck">
    <div class="usercheck con">
      <h2>審核</h2>
      <div class="nationality">
        <p>國籍</p>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="idcard">
        <div class="idcard_left fl">
          <p>身份證正面</p>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div class="idcard_right fr">
          <p>身份證反面</p>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </div>
      <div class="companycheck">
        <p>公司證書</p>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div class="commit">
        <button>提交</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "usercheck"
};
</script>
<style lang="scss">
.idcard {
  .el-upload--text {
    width: 350px;
  }
}
.companycheck {
  .el-upload--text {
    width: 736px;
    height: 215px;
  }
}
.usercheck {
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>

<style lang="scss" scoped>
#usercheck {
  height: 800px;
  width: 100%;
  .usercheck {
    height: 800px;
    overflow: hidden;
    h2 {
      text-align: center;
      margin: 38px 0 38px 0;
      font: {
        size: 34px;
        weight: 600;
      }
    }
    .nationality,
    .idcard,
    .companycheck {
      width: 736px;
      margin: 0 auto;
    }
    .nationality {
      margin-bottom: 27px;
      p {
        margin-bottom: 5px;
      }
    }
    .idcard {
      height: 200px;
      margin-bottom: 27px;
      p {
        margin-bottom: 5px;
      }
    }
    .idcard_left,
    .idcard_right {
      width: 350px;
      height: 200px;
    }
    .companycheck {
      height: 245px;
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
        // color:
      }
    }
  }
}
</style>