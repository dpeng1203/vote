<template>
  <div class="notice">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="getNotice"
    >
      <div
        class="notice-list"
        v-for="item in list"
        :key="item.id"
        @click="handleNotice(item.noticeId)"
      >
        <div class="left">公<br />告</div>
        <div class="right">
          <div class="title">{{ item.noticeTitle }}</div>
          <div class="time">{{ item.updateTime }}</div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      pageNum: 0
    };
  },
  mounted() {
    document.title = "公告资讯";
    // this.getNotice();
  },
  methods: {
    getNotice() {
      this.pageNum++;
      let data = {
        pageNum: this.pageNum,
        pageSize: 10,
        noticeType: 2
      };
      this.$api.home.notice(data).then(res => {
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
    handleNotice(noticeId) {
      this.$router.push({ path: "/noticeDetail", query: { noticeId } });
    }
  }
};
</script>

<style lang="less" scoped>
@s: 0.0133rem;
.notice {
  padding: 40 * @s;
  .notice-list {
    display: flex;
    align-items: center;
    margin-bottom: 30 * @s;
    .left {
      width: 70 * @s;
      height: 100 * @s;
      flex-shrink: 0;
      background: #0091ff;
      border-radius: 28 * @s;
      font-size: 30 * @s;
      font-family: DFLiJinHeiW8;
      text-align: center;
      color: #ffffff;
      padding-top: 10 * @s;
      box-sizing: border-box;
    }
    .right {
      flex: 1;
      height: 134 * @s;
      border-radius: 36 * @s;
      background: #fff;
      padding: 30 * @s 40 * @s;
      margin-left: 30 * @s;
      box-sizing: border-box;
      position: relative;
      .title {
        width: 480 * @s;
        box-sizing: border-box;
        font-size: 30 * @s;
        color: #333;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .time {
        color: #999;
        font-size: 24 * @s;
        margin-top: 15 * @s;
      }
    }
    .right:before {
      position: absolute;
      left: -6px;
      top: 50 * @s;
      content: "";
      border-bottom: 8px solid transparent;
      border-top: 8px solid transparent;
      border-right: 8px solid #fff;
    }
  }
}
</style>
