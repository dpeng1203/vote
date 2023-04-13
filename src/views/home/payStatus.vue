<template>
  <div>
    <div class="pay">
      <img src="../../assets/images/success.png" alt="" />
      <p class="desc">高小华·《笑说西游记#0093》等 25个订单批量 支付成功！</p>
      <div class="info">
        <div class="item">
          <p class="name">订单总价</p>
          ¥520.00
        </div>
        <div class="item">
          <p class="name">购买时间</p>
          2022.09.09 11:22:33
        </div>
        <div class="item">
          <p class="name">实际支付</p>
          ¥520.00
        </div>
      </div>
      <div class="tip">由于网络延时，您的藏品将在30分钟内到账</div>
    </div>
    <div class="btn">好的</div>
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
  methods: {}
};
</script>

<style lang="less" scoped>
@s: 0.0133rem;
.pay {
  margin: 30 * @s;
  padding: 80 * @s 60 * @s;
  text-align: center;
  background: #fff;
  border-radius: 40 * @s;
  img {
    width: 160 * @s;
  }
  .desc {
    font-weight: 900;
    color: #333333;
    font-size: 36 * @s;
    margin-top: 60 * @s;
    color: #000;
  }
  .info {
    margin-top: 80 * @s;
    .item {
      display: flex;
      align-items: center;
      margin-bottom: 30 * @s;
      .name {
        flex: 1;
        text-align: left;
      }
    }
  }
  .tip {
    border-top: 1px solid #f2f2f2;
    padding-top: 30 * @s;
  }
}
.btn {
  width: 530 * @s;
  height: 100 * @s;
  line-height: 100 * @s;
  background: #333;
  text-align: center;
  font-weight: 900;
  color: #ffffff;
  font-size: 32 * @s;
  margin: 0 auto;
  border-radius: 55px;
  margin-top: 100 * @s;
}
</style>
