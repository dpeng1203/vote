<template>
  <div class="swipe">
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
    // this.getSwipe();
  },
  methods: {
    // getSwipe() {
    //   let data = {
    //     noticeType: 1,
    //     pageNum: 1,
    //     pageSize: 10
    //   };
    //   this.$api.home.banner(data).then(res => {
    //     if (res.code === 200) {
    //       res.data.forEach(ele => {
    //         if (ele.id == this.$route.query.id) {
    //           this.content = ele.content;
    //         }
    //       });
    //     }
    //   });
    // }
  }
};
</script>

<style></style>
