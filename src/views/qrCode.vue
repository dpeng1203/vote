<template>
  <div class="qr">
    <div class="title">
      <div class="name">评分二维码</div>
    </div>
    <div class="code">
      <VueQr :margin="8" :size="200" :text="codeUrl" />
    </div>
  </div>
</template>

<script>
import VueQr from "vue-qr";
export default {
  components: { VueQr },
  data() {
    return {
      codeUrl: "www.baidu.com"
    };
  }
};
</script>

<style lang="less" scoped>
@s: 0.0133rem;
.qr {
  height: 100vh;
  background: #fff;
  .title {
    font-size: 32 * @s;
    font-weight: bold;
    height: 120 * @s;
    padding: 0 40 * @s;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
  }
  .code {
    background: #fff;
    padding: 100 * @s 0;
    text-align: center;
    border-radius: 20 * @s;
    overflow: hidden;
  }
}
</style>
