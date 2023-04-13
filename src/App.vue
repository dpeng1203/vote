<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@s: 0.0133rem;
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: #f2f2f2;
}
p {
  margin: 0;
  padding: 0;
}
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-family: NotoSansHans-Regular, NotoSansHans, NotoSansHans-Black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-size: 28 * @s;
}
.van-tabbar--fixed {
  height: 120 * @s;
}
.van-tabbar-item {
  font-size: 36 * @s;
}
.van-tabbar-item--active {
  font-weight: bold;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
