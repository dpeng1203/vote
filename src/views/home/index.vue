<template>
  <div class="home">
    <div class="logo">
      <img src="../../assets/images/logo.png" alt />
    </div>
    <div class="swiper">
      <van-swipe :autoplay="3000" indicator-color="#fff">
        <van-swipe-item v-for="image in images" :key="image.id">
          <img
            :src="image.indexPicture"
            class="img-swipe"
            @click="handleImg(image)"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="top-tab-view">
      <div class="tab">
        公告资讯
        <div class="line"></div>
      </div>
      <div class="more" @click="handleMore">
        更多
        <span class="bor-up"></span>
      </div>
    </div>
    <div class="info" @click="handleNoticeDetail">
      ·
      <span class="van-ellipsis">{{ notice.noticeTitle }}</span>
    </div>
    <div class="top-tab-view">
      <div class="item" @click="active = 0">
        数字藏品
        <span :class="{ active: active == 0 }"></span>
      </div>
      <div class="item" @click="active = 1">
        盲盒
        <span :class="{ active: active == 1 }"></span>
      </div>
    </div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="getArtifact"
    >
      <div
        class="card"
        @click="handleDetail(item.id)"
        v-for="item in list"
        :key="item.id"
      >
        <div class="img-wrap">
          <img :src="item.indexPicture" alt="" class="product" />
          <div class="status">已售罄</div>
          <div class="border"></div>
        </div>
        <div class="cont">
          <div class="cont-wrap">
            <div class="cont-title">{{ item.name }}</div>
            <div class="detail">
              限量：{{ item.total }}份 ｜ 作者：{{ item.authorName }}
            </div>
          </div>
          <div class="price">
            ¥<span>{{ item.price }}</span>
          </div>
        </div>
      </div>
    </van-list>
    <div class="qkl">
      <img src="../../assets/images/qkl.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg"
      ],
      active: 0,
      list: [],
      loading: false,
      finished: false,
      pageNum: 0,
      notice: {}
    };
  },
  mounted() {
    this.getSwipe();
    this.getNotice();
  },
  methods: {
    getSwipe() {
      let data = {
        noticeType: 1,
        pageNum: 1,
        pageSize: 10
      };
      this.$api.home.banner(data).then(res => {
        if (res.code === 200) {
          this.images = res.data;
        }
      });
    },
    getArtifact() {
      this.pageNum++;
      let data = {
        pageNum: this.pageNum,
        pageSize: 10
      };
      this.$api.home.artifact(data).then(res => {
        if (res.code === 200) {
          this.list = [...this.list, ...res.rows];
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= Number(res.total)) {
            this.finished = true;
          }
        }
      });
    },
    getNotice() {
      let data = {
        pageNum: 1,
        pageSize: 10,
        noticeType: 2
      };
      this.$api.home.notice(data).then(res => {
        if (res.code === 200) {
          if (res.rows && res.rows.length > 0) {
            this.notice = res.rows[0];
          }
        }
      });
    },
    handleMore() {
      this.$router.push("/notice");
    },
    handleDetail(id) {
      this.$router.push({ path: "/detail", query: { id } });
    },
    handleImg(item) {
      if (item.linkUrl) {
        window.location.href = item.linkUrl;
      } else {
        this.$router.push({ path: "/swipeDetail", query: { id: item.id } });
      }
    },
    handleNoticeDetail() {
      this.$router.push({
        path: "/noticeDetail",
        query: { noticeId: this.notice.noticeId }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@s: 0.0133rem;
.home {
  .logo {
    padding: 30 * @s 0;
    background: #fff;
    text-align: center;
    img {
      width: 246 * @s;
    }
  }
  .qkl {
    text-align: center;
    padding: 40 * @s 0 0 0;
    img {
      width: 260 * @s;
    }
  }
  .img-swipe {
    width: 100%;
    // height: 360 * @s;
  }
  .top-tab-view {
    display: flex;
    align-items: center;
    height: 96 * @s;
    margin-top: 30 * @s;
    padding: 0 40 * @s;

    .tab {
      font-weight: 900;
      color: #333333;
      font-size: 36 * @s;
      flex: 1;
      position: relative;
      .line {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        width: 144 * @s;
        height: 14 * @s;
        background: #ffbb01;
        opacity: 0.6;
      }
    }
    .more {
      color: #555555;
      display: flex;
      align-items: center;
      .bor-up {
        width: 0;
        height: 0;
        border-left: 10 * @s solid #555;
        border-top: 8 * @s solid transparent;
        border-bottom: 8 * @s solid transparent;
        margin-left: 13 * @s;
      }
    }
    .item {
      font-weight: 900;
      color: #333333;
      font-size: 36 * @s;
      margin-right: 40 * @s;
      position: relative;
      .active {
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 14 * @s;
        background: #6dd400;
        opacity: 0.6;
      }
    }
  }
  .info {
    padding: 0 30 * @s;
    margin: 0 30 * @s;
    background: #fff;
    height: 90 * @s;
    line-height: 90 * @s;
    color: #333;
    font-size: 30 * @s;
    border-radius: 45 * @s;
    span {
      margin-left: 2px;
      display: inline-block;
    }
  }
  .card {
    padding: 0 30 * @s;
    overflow: hidden;
    .img-wrap {
      position: relative;
      border-radius: 40 * @s 40 * @s 0 0;
      overflow: hidden;
      .product {
        width: 100%;
        height: 690 * @s;
        display: block;
      }
      .status {
        position: absolute;
        top: 45 * @s;
        left: 50 * @s;
        font-size: 30 * @s;
        font-weight: bold;
        color: #fff;
      }
      .border {
        position: absolute;
        left: 0 * @s;
        right: 0;
        margin: 0 auto;
        top: 135 * @s;
        border: 10 * @s solid #fff;
        width: 570 * @s;
        height: 420 * @s;
        border-radius: 40 * @s;
        box-sizing: border-box;
      }
    }
    .cont {
      height: 162 * @s;
      display: flex;
      align-items: center;
      background: #fff;
      padding: 0 40 * @s;
      border-radius: 0 0 40 * @s 40 * @s;
      .cont-wrap {
        flex: 1;
        .cont-title {
          font-weight: 900;
          color: #333333;
          font-size: 30 * @s;
        }
        .detail {
          color: #666666;
          font-size: 22 * @s;
          margin-top: 15 * @s;
        }
      }
      .price {
        font-size: 30 * @s;
        font-weight: bold;
        span {
          font-size: 54 * @s;
          margin-left: 10 * @s;
        }
      }
    }
  }
}
</style>
