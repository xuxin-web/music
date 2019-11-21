<template>
  <div class="recommend">
    <div class="recommend-list">
      <h4 class="title">推荐歌单</h4>
      <ul class="recommend-ul">
        <li
          v-for="(item,i) in recommendList"
          :key="i"
          class="recommend-li"
          @click="goToMusicList(item.id)"
        >
          <figure class="recommend-figure">
            <img class="recommend-img" :src="item.picUrl" alt />
            <figcaption class="recommend-name">{{item.name}}</figcaption>
          </figure>
        </li>
      </ul>
    </div>
    <div class="latest">
      <h4 class="title">最新音乐</h4>
      <ul class="latest-ul">
        <li class="latest-li" @click="play(item.id)" v-for="(item,i) in newSongList" :key="i">
          <p class="latest-song">{{item.song.name}}</p>
          <div class="latest-info">
            <span class="latest-singer">{{item.song.artists[0].name}}</span>
            -
            <span class="latest-album">{{item.song.album.name}}</span>
          </div>
          <van-icon class="latest-icon" name="play-circle-o"></van-icon>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendList: [],
      newSongList: []
    };
  },
  created() {
    this.getRecommend(6);
    this.getNewSong();
  },
  props: {},
  methods: {
    play(id) {
      this.$store.commit("setId",id);
      this.$router.push("/song");
      console.log(id);
    },
    goToMusicList(id) {
      console.log(id);
    },
    getRecommend(limit) {
      const url = "/personalized?limit=" + limit;
      this.$axios
        .get(url)
        .then(result => {
          if (result.status == 200) {
            this.recommendList = result.data.result;
          } else {
            throw new Error();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getNewSong() {
      const url = "/personalized/newsong";
      this.$axios
        .get(url)
        .then(result => {
          if (result.status == 200) {
            this.newSongList = result.data.result;
          } else {
            throw new Error();
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.recommend {
  margin-top: 10px;
  &-list::before {
    content: "";
    display: table;
    height: 0;
  }
  .title {
    font-size: 16px;
    font-weight: 400;
    padding: 0 20px;
    margin: 20px 0px;
    border-left: 3px solid #d43c33;
  }
  &-ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &-li {
    flex-basis: 33%;
    overflow: hidden;
  }
  &-img {
    width: 100%;
  }
  &-name {
    font-size: 13px;
    padding: 6px 2px 0 6px;
    color: #333;
  }
  .latest {
    &-ul {
      display: flex;
      flex-direction: column;
      padding-left: 10px;
    }
    &-li {
      padding: 6px 0;
      border-bottom: 1px solid #eee;
      height: 55px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      position: relative;
    }
    &-song {
      font-size: 17px;
      color: #333;
    }
    &-info,
    &-song {
      width: 80%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: normal;
    }
    &-info {
      font-size: 12px;
      color: #888;
    }
    &-icon {
      width: 22px;
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-11px);
      color: #aaaaaa;
      font-size: 22px;
    }
  }
}
</style>