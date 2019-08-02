<template>
  <div id="project_intro">
    <div class="project_intro con" v-if="success">
      <nav>項目簡介</nav>
      <main id="project_intro_length">
        <aside>
          <!-- <img src="../../assets/26566ffb301dac8c24d21969b538612.png" alt /> -->
        </aside>
        <article v-html="article1"></article>
      </main>
      <footer>
        <button @click="$goto('home')">再考慮一下</button>
        <button @click="goto">簽約</button>
      </footer>
    </div>
    <div class="project_intro2 con" v-if="!success">
      <nav>
        <img src="../../assets/19b9f427bcaefd8a3e879024299a204.png" alt />
        <span>您已签约成功{{time}}s</span>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "project_intro",
  data() {
    return {
      success: true,
      time: 3,
      routeidx: null,
      article1:
      '<div>sdfsdf</br>fsdfdfsdfdfsdfdsdfsdfsdfsdfsdfsdfsdfsdreterdfffffffffffffffffffffffffffffffffffffffffffff</br>ddddddddddddddddddddd</div>'
    };
  },
  methods: {
    goto() {
      this.$axios({
        method: "get",
        url: `${this.$baseurl}/bsl_web/projectSign/sign?projectId=${this.routeidx}`
      }).then(res => {
        if (res.data.resultCode == 10000) {
          this.success = !this.success;
          var aa = setInterval(() => {
            --this.time;
          }, 1000);
          setTimeout(() => {
            clearInterval(aa);
            this.$goto("home");
          }, 4000);
        }
      });
    }
  },
  created() { 
    this.routeidx = this.$route.query.idx;
    this.$axios({
      method: "get",
      url: `${this.$baseurl}/bsl_web/project/getProjectDetails?projectId=${this.routeidx}`
    }).then(res => {
      console.log(res);
    });
  },
  mounted() {
  }
};
</script>
<style lang="scss" scoped>
#project_intro {
  width: 100%;
  height: 760px;
  overflow-y: auto;
  .project_intro2 {
    width: 553px;
    height: 760px;
    padding-top:100px;
    box-sizing: border-box;
    text-align: center;
    nav {
      img {
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
      }
    }
  }
  .project_intro {
    margin: 0 auto;
    nav {
      font-size: 36px;
      font-weight: 600;
      text-align: center;
      padding: 25px 0;
    }
    main {
      margin: 0 auto;
      width: 680px;
      //   position: relative;
      aside {
        float: left;
        margin-top: 6px;
        margin-right: 16px;
      }
      article {
        font-size: 16px;
        color: #818181;
        line-height: 28px;
        text-indent: 32px;
      }
    }
    footer {
      width: 680px;
      display: flex;
      margin: 20px  auto;
      justify-content: space-between;
      //   text-align: center
      button {
        width: 300px;
        height: 40px;
        line-height: 40px;
        color: white;
        font-size: 20px;
      }
      button:first-child {
        background: #ff7c2c;
      }
      button:nth-child(2) {
        background: #00aeef;
      }
    }
  }
}
</style>


