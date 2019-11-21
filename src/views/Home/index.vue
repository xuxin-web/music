<template>
  <div class="home">
    <div class="tab">

    <van-tabs v-model="active" @change="changeTab" class="home-tab">
      <van-tab title="推荐音乐" name="recommend"></van-tab>
      <van-tab title="热歌榜" name="hot"></van-tab>
      <van-tab title="搜索" name="search"></van-tab>
    </van-tabs>
    </div>

    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  props: {},
  methods: {
    changeTab(name, title) {
      console.log(name, title);
      this.$router.push("/" + name);
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.tab{
  position: fixed;
  top:0;
  width:100%;
}
.main{
  margin-top:50px;
}
</style>