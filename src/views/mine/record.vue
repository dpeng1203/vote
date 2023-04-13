<template>
  <div class="order">
    <div class="product">
      <div class="list-wrap">
        <div class="list">
          <img src="../../assets/images/product.png" alt="" />
          <div class="info">
            <div class="name">丛林探险</div>
            <div class="num">No.094</div>
          </div>
          <div class="out">出</div>
        </div>
        <div class="footer">
          <van-icon name="clock-o" />
          <span>2022-08-29 转赠给用户 159****8145</span>
        </div>
      </div>
      <div class="list-wrap">
        <div class="list">
          <img src="../../assets/images/product.png" alt="" />
          <div class="info">
            <div class="name">丛林探险</div>
            <div class="num">No.094</div>
          </div>
          <div class="out enter">入</div>
        </div>
        <div class="footer">
          <van-icon name="clock-o" />
          <span>2022-08-29 转赠给用户 159****8145</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    document.title = "藏品记录";
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@s: 0.0133rem;
.order {
  background: #fff;
}
.product {
  padding: 40 * @s 30 * @s;
  background: #f2f2f2;
  border-radius: 40 * @s 40 * @s 0 0;
  .list-wrap {
    background: #fff;
    border-radius: 40 * @s;
    padding: 30 * @s;
    margin-bottom: 30 * @s;
  }
  .list {
    display: flex;
    align-items: flex-start;
    position: relative;

    img {
      widows: 200 * @s;
      height: 200 * @s;
      border-radius: 50 * @s;
    }
    .info {
      margin-left: 40 * @s;
      .name {
        font-size: 30 * @s;
        font-weight: 900;
        margin-top: 20 * @s;
      }
      .num {
        margin-top: 20 * @s;
      }
    }
    .out {
      position: absolute;
      right: 30 * @s;
      top: 30 * @s;
      background: #ff4b55;
      height: 70 * @s;
      line-height: 70 * @s;
      width: 70 * @s;
      border-radius: 35 * @s;
      text-align: center;
      font-weight: bold;
      font-size: 30 * @s;
      color: #fff;
    }
    .enter {
      background: #333;
    }
  }
  .footer {
    font-size: 24 * @s;
    border-top: 1px solid #f2f2f2;
    padding-top: 30 * @s;
    margin-top: 30 * @s;
    span {
      margin-left: 10 * @s;
    }
  }
}
</style>
