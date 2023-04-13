<template>
  <div class="tabbar">
    <router-view />
    <van-tabbar
      v-model="active"
      fixed
      route
      safe-area-inset-bottom
      active-color="#333"
      inactive-color="#999"
    >
      <van-tabbar-item to="/home">首页</van-tabbar-item>
      <van-tabbar-item to="/market">市场</van-tabbar-item>
      <van-tabbar-item to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="less">
@s: 0.0133rem;
.tabbar {
  padding-bottom: 160 * @s;
}
</style>
