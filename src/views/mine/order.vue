<template>
  <div class="order">
    <div class="tabs">
      <div
        class="tab"
        :class="{ active: active == item.value }"
        v-for="item in tabs"
        :key="item.value"
        @click="handleChange(item)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="product">
      <div class="list">
        <img src="../../assets/images/product.png" alt="" />
        <div class="info">
          <div class="name">丛林探险</div>
          <div class="num">No.094</div>
          <div class="status">状态：待支付</div>
        </div>
        <van-button round type="info" class="btn">立即支付</van-button>
      </div>
      <div class="list">
        <img src="../../assets/images/product.png" alt="" />
        <div class="info">
          <div class="name">丛林探险</div>
          <div class="num">No.094</div>
          <div class="status">状态：待支付</div>
        </div>
        <van-button round type="info" class="btn">立即支付</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { name: "已完成", value: 1 },
        { name: "待支付", value: 2 },
        { name: "进行中", value: 3 },
        { name: "已取消", value: 4 },
        { name: "全部", value: 5 }
      ],
      active: 1
    };
  },
  mounted() {
    document.title = "我的订单";
  },
  methods: {
    handleChange(item) {
      this.active = item.value;
    }
  }
};
</script>

<style lang="less" scoped>
@s: 0.0133rem;
.order {
  background: #fff;
  .tabs {
    height: 160 * @s;
    display: flex;
    align-items: center;
    padding-left: 60 * @s;
    .tab {
      font-size: 30 * @s;
      margin-right: 30 * @s;
    }
    .active {
      font-size: 40 * @s;
      font-weight: 900;
    }
  }
}
.product {
  padding: 40 * @s 30 * @s;
  background: #f2f2f2;
  border-radius: 40 * @s 40 * @s 0 0;
  .list {
    display: flex;
    align-items: center;
    position: relative;
    background: #fff;
    border-radius: 40 * @s;
    padding: 30 * @s;
    margin-bottom: 30 * @s;
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
      }
      .num {
        margin-top: 20 * @s;
      }
      .status {
        margin-top: 40 * @s;
      }
    }
    .btn {
      position: absolute;
      right: 30 * @s;
      bottom: 50 * @s;
      background: #333;
      height: 60 * @s;
      border-radius: 40 * @s;
    }
  }
}
</style>
