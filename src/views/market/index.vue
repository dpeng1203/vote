<template>
  <div class="market">
    <div class="title">
      NFR.com
      <p>中国区·艺术品区块链交易平台</p>
    </div>
    <div class="tab">
      <div class="item">
        <span>数字藏品</span>
        <div class="bor-up"></div>
      </div>
      <div class="item">
        <span>最新上架</span>
        <div class="bor-up"></div>
      </div>
    </div>
    <div class="tip">
      <img src="../../assets/images/market.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@s: 0.0133rem;
.market {
  .title {
    text-align: center;
    font-size: 42 * @s;
    font-weight: 900;
    color: #333;
    // height: 156 * @s;
    background: #fff;
    padding: 40 * @s 0;
    p {
      font-weight: 400;
      color: #333333;
      font-size: 14 * @s;
    }
  }
  .tab {
    display: flex;
    align-items: center;
    height: 108 * @s;
    border-top: 1px solid #f2f2f2;
    background: #fff;
    .item {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333;
    }
    .bor-up {
      width: 0;
      height: 0;
      border-top: 10 * @s solid #555;
      border-left: 8 * @s solid transparent;
      border-right: 8 * @s solid transparent;
      margin-left: 16 * @s;
    }
  }
  .tip {
    img {
      width: 100%;
    }
  }
}
</style>
