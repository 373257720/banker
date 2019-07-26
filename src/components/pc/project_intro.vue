<template>
  <div id="project_intro">
    <div class="project_intro con" v-if="success">
      <nav>項目簡介</nav>
      <main id="project_intro_length">
        <aside>
          <!-- <img src="../../assets/26566ffb301dac8c24d21969b538612.png" alt /> -->
        </aside>
        <article>灰色部分的是图片，因为p标签是块状元素，本来图片应该出现在第二行文字的下面，但是，却出现在了第二行文字的上面，经过分析，因为我给p标签的样式设置了宽度24px和高度，设置的行高也是24px，又因为p标签是块状元素，虽然，在视觉上看起来因为p标签放不下那么多的字而灰色部分的是图片，因为p标签是块状元素，本来图片应该出现在第二行文字的下面，但是，却出现在了第二行文字的上面，经过分析，因为我给p标签的样式设置了宽度24px和高度，设置的行高也是24px，又因为p标签是块状元素，虽然，在视觉上看起来因为p标签放不下那么多的字而 灰色部分的是图片，因为p标签是块状元素，本来图片应该出现在第二行文字的下面，但是，却出现在了第二行文字的上面，经过分析，因为我给p标签的样式设置了宽度24px和高度，设置的行高也是24px，又因为p标签是块状元素，虽然，在视觉上看起来因为p标签放不下那么多的字而 灰色部分的是图片，因为p标签是块状元素，本来图片应该出现在第二行文字的下面，但是，却出现在了第二行文字的上面，经过分析高度，设置的行高也是24px，又因为p标签是块状元素，虽然，在视觉上看起来因为p标签放不下那么多的字而灰色部分的是图片，因为p标签是块状元素，本来图片应该出现在第二行文字的下面，但是，却出现在了第二行文字的上面，经过分析，因为我给p标签的样式设置了宽度24px和高度，设置的行高也是24px，又因为p标签是块状元素，虽然，在视觉上看起来因为p标签放不下那么多的字而 灰色部分的是图片，因为p标签是块状元素，本来图片应该出现在第二行文字的下面，但是，却出现在了第二行文字的上面，经过分析，因为我给p标签的样式设置了宽度24px和高度，设置的行高也是24px，又因为p标签是块状元素，虽然，在视觉上看起来因为p标签放不下那么多的字而 灰色部分的是图片，因为p标签是块状元素，本来图片应该出现在第二行文字的下面，但是，却出现在了第二行文字的上面，经过分析，因为我给p标签的样式设置了宽度24px和高度，设置的行高也是24px，又因为p标签是块状元素，虽然，在视觉上看起来因为p标签放不下那么灰色部分的是图片，因为p标签是块状元素，本来图片应该出现在第二行文字的下面，但是，却出现在了第二行文字的上面，经过，因为我给p标签的样式设置了宽度24px和高度，设置的行高也是24px，又因为p标签是块状元素，虽然，在视觉上看起来因为p标签放不下那么灰色部分的是图片，因为p标签是块状元素，本来图片应该出现在第二行文字的下面，但是，却出现在了第二行文字的上面，经过分析，因为我给p标签的样式设置了宽度24px和高度，设置的行高也是24px，又因为p标签是块状元素，虽然，在视觉上看起来因为p标签放不下那么多的字而 多的字而的字而 灰色部分的是图片，因为p标签是块状元素，本来图片应该出现在第二行文字的下面，但是，却出现在了第二行文字的上面，经过分析，因为我给p标签的样式设置了宽度24px和高度，设置的行高也是24px，又因为p标签是块状元素，虽然，在视觉上看起来因</article>
      </main>
      <footer>
        <button @click="$goto('home')">再考慮一下</button>
        <button @click="goto">簽約</button>
      </footer>
    </div>
    <div class="project_intro2 con" v-if="!success">
      <nav>
        <img src="../../assets/26566ffb301dac8c24d21969b538612.png" alt />
        <span>您已注册成功{{time}}s</span>
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
      routeidx: null
      // project_intro_length: ""
      // A:this.$refs.article.offsetHeight
      // project_intro_length: document.getElementById("article").offsetHeight
    };
  },
  methods: {
    goto() {
      this.$axios({
        method: "get",
        url: `${this.$baseurl}/bsl_web/projectSign/sign?projectId=${this.routeidx}`
      }).then(res => {
        console.log(res);
      });
      // this.success = !this.success;
      // var aa = setInterval(() => {
      //   --this.time;
      // }, 1000);
      // setTimeout(() => {
      //   clearInterval(aa);
      //   this.$goto("home");
      // }, 4000);
    }
  },
  created() {
    this.routeidx = this.$route.params.idx;
    this.$axios({
      method: "get",
      url: `${this.$baseurl}/bsl_web/project/getProjectDetails?projectId=${this.routeidx}`
    }).then(res => {
      console.log(res);
    });
  },
  mounted() {
    // document.getElementById("project_intro").offsetHeight += document.getElementById(
    //   "project_intro_length"
    // ).offsetHeight;
    // console.log(document);
    // // console.log( document.getElementById("project_intro").offsetHeight,document.getElementById("project_intro_length").offsetHeight);
    // var a = document.getElementById("project_intro").offsetHeight;
    // // var b = document.getElementById("project_intro_length").offsetHeight;
    // if (a < 1000) {
    //   // a += b - a;
    //   document.getElementById("project_intro").style.height = 1000 + "px";
    //   document.getElementsByClassName("project_intro")[0].style.height =
    //     1000 + "px";
    // }
    // console.log(a, b);
    // document.getElementById("project_intro").offsetHeight+=document.getElementById("project_intro_length").offsetHeight;
  }
};
</script>
<style lang="scss" scoped>
#project_intro {
  width: 100%;
  .project_intro2 {
    width: 553px;
    height: 850px;
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
    // height: 870px;
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
      margin: 20px auto;
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


