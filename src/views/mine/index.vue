<template>
  <div class="mine">
    <div class="user">
      <img src="../../assets/images/add.png" alt="" />
      <p class="name">Wdjdkkfi</p>
      <p class="phone">159****8513</p>
    </div>
    <div class="order">
      <div class="item" @click="$router.push('/order')">
        我的订单
        <span class="bor-up"></span>
      </div>
      <span>|</span>
      <div class="item" @click="$router.push('/record')">
        藏品记录
        <span class="bor-up"></span>
      </div>
    </div>
    <div class="qkl">
      <div class="item">
        <div class="name">区块链地址</div>
        <div class="val">{{ address }}</div>
        <span
          v-clipboard:copy="address"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
          ><img src="../../assets/images/copy.png" alt=""
        /></span>
      </div>
      <div class="item" @click="handleIdCard">
        <div class="name">实名认证</div>
        <div class="desc">未认证</div>
        <span class="bor-up"></span>
      </div>
      <div class="item" @click="$router.push('/account')">
        <div class="name">账号管理</div>
        <span class="bor-up"></span>
      </div>
    </div>
    <div class="tabs">
      <div class="tab" :class="{ active: active == 0 }" @click="handleTab(0)">
        藏品
      </div>
      <div class="tab" :class="{ active: active == 1 }" @click="handleTab(1)">
        盲盒
      </div>
    </div>
    <div class="product">
      <div class="item" @click="handleDetail">
        <img src="../../assets/images/product.png" alt="" />
        <p>丛林探险</p>
        <div class="btn">拥有 99 份</div>
      </div>
      <div class="item">
        <img src="../../assets/images/product.png" alt="" />
        <p>丛林探险</p>
        <div class="btn">拥有 99 份</div>
      </div>
      <div class="item">
        <img src="../../assets/images/product.png" alt="" />
        <p>丛林探险</p>
        <div class="btn">拥有 99 份</div>
      </div>
      <div class="item">
        <img src="../../assets/images/product.png" alt="" />
        <p>丛林探险</p>
        <div class="btn">拥有 99 份</div>
      </div>
    </div>
    <van-popup v-model="showCard" round closeable class="popup">
      <div class="popup-title">
        <img src="../../assets/images/card.png" alt="" />
        <span>实名认证</span>
      </div>
      <div class="popup-cont">
        <p>真实姓名</p>
        <input
          v-model="name"
          placeholder="请输入真实姓名.."
          class="input-css"
        />
        <p>身份证号</p>
        <input
          v-model="idCard"
          placeholder="请输入身份证号.."
          class="input-css"
        />
        <van-button round type="info" class="popup-btn" @click="handleConfirm"
          >确 认</van-button
        >
      </div>
    </van-popup>
    <van-popup v-model="showSms" round closeable class="popup">
      <div class="popup-title">
        <img src="../../assets/images/card.png" alt="" />
        <span>验证身份</span>
      </div>
      <div class="popup-cont">
        <p class="phone">当前手机号：1992030444</p>
        <p class="code">验证码已发送（{{ num }} s）</p>
        <van-password-input
          :value="smsCode"
          :gutter="8"
          :focused="showKeyboard"
          @focus="showKeyboard = true"
        />
        <van-button round type="info" class="popup-btn" @click="handleNext"
          >下一步</van-button
        >
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      showCard: false,
      showSms: false,
      name: "",
      idCard: "",
      smsCode: "",
      showKeyboard: false,
      num: 60,
      address: "89sa*****d789sakd9d789sakd9d789sakd9d789sakd9d789sakd9d789sakd9"
    };
  },
  methods: {
    handleIdCard() {
      this.showSms = true;
      this.num--;
    },
    handleConfirm() {
      if (!this.name) {
        this.$toast("请输入姓名");
        return;
      }
      var reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;

      if (!reg.test(this.idCard)) {
        this.$toast("身份证有误，请输入身份证");
        return;
      }
    },
    handleNext() {
      if (this.smsCode.length != 6) {
        this.$toast("请输入验证码");
        return;
      }
      this.showSms = false;
      this.showKeyboard = false;
      this.showCard = true;
    },
    handleDetail() {
      this.$router.push({
        path: "/detail",
        query: {
          type: 2
        }
      });
    },
    handleTab(n) {
      this.active = n;
    },
    onCopy(e) {
      console.log(e);
      this.$toast("复制成功");
    },
    onError(e) {
      console.log(e);
      this.$toast("复制失败");
    }
  }
};
</script>

<style lang="less" scoped>
@s: 0.0133rem;
.mine {
  background: #fff;
  padding-top: 30 * @s;
  .user {
    margin: 0 30 * @s 40 * @s 0;
    text-align: center;
    img {
      width: 200 * @s;
      height: 200 * @s;
      border-radius: 50%;
    }
    .name {
      margin-top: 20 * @s;
      font-size: 36 * @s;
      font-weight: 900;
    }
    .phone {
      color: #999;
    }
  }
}
.order {
  margin: 0 auto;
  height: 110 * @s;
  width: 670 * @s;
  background: url(../../assets/images/order.png) no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  .item {
    flex: 1;
    color: #fff;
    font-weight: 900;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    .bor-up {
      width: 0;
      height: 0;
      border-left: 10 * @s solid #fff;
      border-top: 8 * @s solid transparent;
      border-bottom: 8 * @s solid transparent;
      margin-left: 13 * @s;
    }
  }
  span {
    color: #fff;
  }
}
.qkl {
  background: #f2f2f2;
  border-radius: 40 * @s;
  padding: 0 40 * @s;
  margin: 60 * @s 30 * @s 0;
  .item {
    height: 110 * @s;
    display: flex;
    align-items: center;
    border-top: 1px solid #e8e8e8;
    .name {
      flex: 1;
    }
    .val {
      color: #fa6400;
      font-size: 30 * @s;
      width: 300 * @s;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .desc {
      font-size: 30 * @s;
      font-weight: 900;
    }
    .bor-up {
      width: 0;
      height: 0;
      border-left: 10 * @s solid #333;
      border-top: 8 * @s solid transparent;
      border-bottom: 8 * @s solid transparent;
      margin-left: 13 * @s;
    }
  }
}
.tabs {
  padding-left: 60 * @s;
  margin-top: 60 * @s;
  .tab {
    display: inline-block;
    color: #999;
    font-weight: 900;
    font-size: 32 * @s;
    margin-right: 40 * @s;
  }
  .active {
    color: #333;
  }
}
.product {
  background: #f2f2f2;
  border-radius: 40 * @s 40 * @s 0 0;
  overflow: hidden;
  margin-top: 40 * @s;
  .item {
    float: left;
    width: 330 * @s;
    text-align: center;
    background: #fff;
    padding-bottom: 40 * @s;
    border-radius: 40 * @s;
    overflow: hidden;
    margin-left: 30 * @s;
    margin-top: 40 * @s;
    img {
      width: 100%;
    }
    p {
      font-weight: 900;
      margin: 30 * @s;
    }
    .btn {
      width: 210 * @s;
      height: 56 * @s;
      line-height: 56 * @s;
      background: #fa6400;
      margin: 0 auto;
      color: #fff;
      border-radius: 30 * @s;
      font-size: 24 * @s;
      font-weight: 900;
    }
  }
}
.popup {
  width: 680 * @s;
  box-sizing: border-box;
  padding: 60 * @s 80 * @s 80 * @s;
  text-align: center;
  .popup-title {
    display: flex;
    align-items: center;
    img {
      width: 80 * @s;
    }
    span {
      font-weight: 900;
      color: #333333;
      font-size: 40 * @s;
      margin-left: 20 * @s;
    }
  }
  .popup-cont {
    margin-top: 20 * @s;
    p {
      font-size: 30 * @s;
      margin-bottom: 30 * @s;
      margin-top: 40 * @s;
      text-align: left;
    }
    .input-css {
      height: 120 * @s;
      text-align: center;
      background: #f2f2f2;
      border: none;
      border-radius: 40 * @s;
      width: 100%;
    }
    .code {
      margin: 30 * @s 0 60 * @s;
      color: #999;
      font-size: 24 * @s;
    }
  }
  .popup-btn {
    width: 300 * @s;
    height: 100 * @s;
    background: #333;
    border-radius: 40 * @s;
    margin-top: 80 * @s;
    font-size: 30 * @s;
    font-weight: 900;
  }
}
/deep/.van-popup__close-icon {
  color: #333;
}
/deep/.van-password-input__security li {
  background: #f2f2f2;
  border-radius: 20 * @s;
}
/deep/.van-password-input {
  margin: 0;
}
</style>
