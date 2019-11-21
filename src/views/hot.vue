<template>
  <div class="hot">
    <div class="hot-container">
      <div class="hot-logo"></div>
      <p class="hot-time">更新日期：{{now}}</p>
    </div>

    <section class="hot-list">
      <ol class="hot-ol">
        <li class="hot-li" v-for="(item,i) in list" :key="i" @click="play(item.id)">
          <p class="hot-song">{{item.name}}</p>
          <div class="hot-info">
            <span class="singer">{{item.ar.name}}</span>
            -
            <span class="album">{{item.al.name}}</span>
          </div>
          <van-icon class="hot-icon" name="play-circle-o"></van-icon>
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      now:new Date().getMonth()+1+"月"+new Date().getDay()+"日",
      list:[]
    };
  },
  props: {},
  created(){
    this.getHot();
  },
  methods: {
    getHot(){
      const url = "/top/list?idx=1";
      this.$axios.get(url).then(result=>{
        if(result.status === 200){
          this.list = result.data.tracks;
          console.log(this.list);
        }
      })
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.hot{
  &-container{
    background: url("https://s3.music.126.net/mobile-new/img/hot_music_bg_2x.jpg?f01a252389c26bcf016816242eaa6aee=") no-repeat ;
    background-size: contain;
    width:100%;
    height: 146px;
    position: relative;
  }
  &-logo{
    width:142px;
    height: 67px;
    background: url("https://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=") no-repeat ;
    background-size: 166px 97px;
    background-position: right bottom;
    position: absolute;
    left:30px;
    top:20px;
  }
  &-time{
    color:hsla(0,0%,100%,.8);
    position: absolute;
    left: 30px;
    font-size: 12px;
    bottom:35px;
  }
   &-li {
      padding:6px 0;
      border-bottom:1px solid #eee;
      height: 55px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      position: relative;
    }
    &-song{
      font-size: 17px;
      color:#333;
    }
    &-info{
      font-size: 12px;
      color:#888;
    }
    &-icon{
      width:22px;
      position: absolute;
      right:20px;
      top:50%;
      transform:translateY(-11px);
      color:#AAAAAA;
      font-size:22px;
    }
}
</style>