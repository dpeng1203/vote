<template>
  <div class="success">
    <img src="../../assets/images/success.png" alt="" />
    <p class="status">转赠成功</p>
    <div class="info">
      <p>藏品：《仁德刘备（之二）》</p>
      <p>作者：陈安迪</p>
      <p>编号：No.23455</p>
      <p>状态：已转赠给用户 18348596</p>
    </div>
    <van-button round type="info" class="btn" @click="handleOk"
      >好 的</van-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    document.title = "NFR.com";
  },
  methods: {
    handleOk() {
      this.$router.push("/record");
    }
  }
};
</script>

<style lang="less" scoped>
@s: 0.0133rem;
.success {
  min-height: 100vh;
  padding: 110 * @s 40 * @s;
  text-align: center;
  box-sizing: border-box;
  background: url(../../assets/images/print.png);
  background-size: 100% 100%;
  img {
    width: 160 * @s;
  }
  .status {
    margin-top: 40 * @s;
    margin-bottom: 80 * @s;
    font-size: 36 * @s;
    font-weight: 900;
  }
  .info {
    padding: 50 * @s 50 * @s 20 * @s;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 40 * @s;
    margin: 0 auto;
    text-align: left;
    p {
      margin-bottom: 30 * @s;
      font-size: 30 * @s;
    }
  }
  .btn {
    width: 510 * @s;
    height: 100 * @s;
    margin-top: 120 * @s;
    background: #333;
    border-radius: 40 * @s;
    margin-top: 80 * @s;
    font-size: 30 * @s;
    font-weight: 900;
  }
}
</style>
