<template>
  <div class="notice-detail">
    <div v-html="content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: ""
    };
  },
  mounted() {
    this.getNotice();
  },
  methods: {
    getNotice() {
      this.$api.home.noticeDetail(this.$route.query.noticeId).then(res => {
        if (res.code === 200) {
          this.content = res.data.noticeContent;
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
@s: 0.0133rem;
.notice-detail {
  text-align: center;
}
</style>
