<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <van-tabbar v-model="active" fixed>
      <van-tabbar-item>首页</van-tabbar-item>
      <van-tabbar-item>市场</van-tabbar-item>
      <van-tabbar-item>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      active: 0
    };
  }
};
</script>
