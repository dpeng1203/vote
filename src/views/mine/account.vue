<template>
  <div class="account">
    <div class="item first">
      <div class="name">头像</div>
      <img src="../../assets/images/add.png" alt="" />
      <van-icon name="arrow" size="0.5rem" />
    </div>
    <div class="item">
      <div class="name">昵称</div>
      <span>Wdjdkkfi</span>
      <van-icon name="arrow" size="0.5rem" />
    </div>
    <div class="item">
      <div class="name">手机号</div>
      <span>159****5813</span>
      <van-icon name="arrow" size="0.5rem" color="#999" />
    </div>
    <div class="item">
      <div class="name">区块链地址</div>
      <span>89sakd****98d7</span>
      <van-icon name="arrow" size="0.5rem" />
    </div>
    <div class="item" @click="handlePw">
      <div class="name">支付密码</div>
      <van-icon name="arrow" size="0.5rem" />
    </div>
    <div class="btn-wrap">
      <van-button round type="info" class="btn">退出账号</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    document.title = "我的账号";
  },
  methods: {
    handlePw() {
      this.$router.push("/payWord");
    }
  }
};
</script>

<style lang="less" scoped>
@s: 0.0133rem;
.account {
  padding: 0 60 * @s;
  height: 100vh;
  background: #fff;
  .item {
    height: 150 * @s;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    .name {
      flex: 1;
      color: #999;
      font-size: 30 * @s;
    }
    img {
      width: 80 * @s;
      height: 80 * @s;
      border-radius: 50%;
      margin-right: 26 * @s;
    }
    span {
      font-size: 30 * @s;
      margin-right: 26 * @s;
    }
  }
  .first {
    height: 200 * @s;
  }
  .btn-wrap {
    text-align: center;
    position: fixed;
    bottom: 30 * @s;
    left: 0;
    right: 0;
    .btn {
      width: 630 * @s;
      height: 100 * @s;
      background: #333;
      border-radius: 55 * @s;
      font-size: 30 * @s;
      font-weight: 900;
    }
  }
}
</style>
