<template>
  <div class="song">
    <van-nav-bar
    title="网易云音乐"
    left-arrow
    @click-left="goBack"
    >
    </van-nav-bar>

    <audio :src="url" controls autoplay></audio>
    <div v-if="!this.detail.name">
      loading
    </div>
    <ul v-else>
      <li>歌名:{{this.detail.name}}</li>
      <li>歌手:{{this.detail.ar[0].name}}</li>
      <li>专辑名:{{this.detail.al.name}}</li>
      <li>专辑图片:{{this.detail.al.picUrl}}</li>
      <li>歌词:{{}}</li>
      <li>包含这首歌的歌单 :{{}}</li>
      <li>喜欢这首歌的也听:{{}}</li>
      <li>精彩评论:{{}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
      detail: {}
    };
  },
  props: {},
  created() {
    console.log("创建页面");
    this.getSongUrl();
    this.getSongDetails();
  },
  methods: {
    goBack(){
      this.$router.back();
    },
    getSongUrl() {
      //获取歌曲地址
      const url = "/song/url?id=" + this.$store.state.id;
      this.$axios.get(url).then(result => {
        if (result.status === 200) {
          // console.log(result.data);
          this.url = result.data.data[0].url;
        }
      });
    },
    getSongDetails() {
      //获取歌曲详情
      const url = "/song/detail?ids=" + this.$store.state.id;
      this.$axios.get(url).then(result => {
        if (result.status === 200) {
          this.detail = result.data.songs[0];
        }
      });
    },
    getSongLyric() {
      //获取歌词
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.song{
  .header{
    background-color: #D33A31;
    padding:10px;
  }
}
</style>