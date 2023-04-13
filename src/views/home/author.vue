<template>
  <div class="author">
    <img :src="authorInfo.avatar" alt="" />
    <div class="info">
      <div class="name">{{ authorInfo.name }}</div>
      <p>{{ authorInfo.remark }}</p>
      <p class="detail" v-html="authorInfo.descri"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      authorInfo: {}
    };
  },
  mounted() {
    document.title = "作者简介";
    this.getAuthor();
  },
  methods: {
    getAuthor() {
      this.$api.home
        .authorDetail(this.$route.query.authorId || "1571764140876308481")
        .then(res => {
          if (res.code === 200) {
            this.authorInfo = res.data;
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
@s: 0.0133rem;
.author {
  background: #fff;
  min-height: 100vh;
  img {
    width: 100%;
  }
  .info {
    padding: 60 * @s;
    .name {
      font-weight: 900;
      color: #333333;
      font-size: 60 * @s;
    }
    p {
      margin-top: 60 * @s;
    }
  }
}
</style>
