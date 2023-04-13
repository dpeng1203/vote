<template>
  <div class="product-detail">
    <div class="detail">
      <div class="img-wrap">
        <img :src="artifactInfo.indexPicture" alt="" class="product" />
        <img
          src="../../assets/images/close.png"
          alt=""
          class="close"
          @click="$router.go(-1)"
        />
        <div class="border"></div>
      </div>
      <div class="pro-title">{{ artifactInfo.name }}</div>
      <div class="sell-price">
        ¥{{ artifactInfo.price }}/份 ｜ 流通：{{ artifactInfo.total }}
      </div>
      <div class="author" @click="handleAuthor">
        <img :src="artifactInfo.authorAvatar" alt="" />
        <div class="info">
          <p>创作者：{{ artifactInfo.authorName }}</p>
          <p class="margin">发行方：{{ artifactInfo.issuer }}</p>
        </div>
        <van-icon name="arrow" size="0.5rem" />
      </div>
      <div class="address-wrap">
        <div class="address">合约地址：{{ address }}</div>
        <span
          v-clipboard:copy="address"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
          ><img src="../../assets/images/copy.png" alt=""
        /></span>
      </div>
    </div>
    <div class="story">
      <img :src="item" alt="" v-for="(item, index) in images" :key="index" />
    </div>

    <div class="qkl">
      <img src="../../assets/images/qkl.png" alt />
    </div>
    <div class="maxNum">
      该时段您可购买上限 <span>{{ maxNum }}</span> 份
    </div>

    <div class="btn-wrap" v-if="btnType == 1">
      <img src="../../assets/images/reduce.png" alt="" @click="handleReduce" />
      <div class="info btn" @click="handleBuy">
        {{ num }}份｜{{ price }} 确认购买
      </div>
      <img src="../../assets/images/add.png" alt="" @click="handleAdd" />
    </div>
    <div class="btn-wrap" v-else-if="btnType == 4">
      <div class="btn blind" @click="handleTransfer">
        转 赠
      </div>
      <div class="btn open">打开</div>
    </div>
    <div class="btn-wrap" v-else>
      <div class="btn" v-if="btnType == 3">该藏品已售罄</div>
      <div class="btn transfer" v-if="btnType == 2" @click="handleTransfer">
        转 赠
      </div>
    </div>
    <van-action-sheet v-model="show">
      <div class="sheet-content">
        <div class="title">支付方式</div>
        <div class="list" @click="handlePay">
          <img src="../../assets/images/reduce.png" alt="" />
          <p>连连支付</p>
          <van-icon name="arrow" size="0.5rem" />
        </div>
      </div>
    </van-action-sheet>
    <van-popup v-model="showCard" round closeable class="popup">
      <div class="popup-title">
        <span>{{ showType == 1 ? "填写转赠帐户" : "确认转赠" }}</span>
      </div>
      <div class="popup-cont">
        <div v-if="showType == 1">
          <p>接收帐户</p>
          <input
            v-model="transferAccount"
            placeholder="请输入接收账号.."
            class="input-css"
          />
        </div>
        <div v-else>
          <p>接收帐户</p>
          <div class="phone">15968155813</div>
          <div class="tip">藏品将转赠给以上用户！请确认无误！</div>
          <input
            v-model="payWord"
            type="password"
            placeholder="请输入支付密码.."
            class="input-css"
          />
        </div>
        <van-button round type="info" class="popup-btn" @click="handleConfirm"
          >确 认</van-button
        >
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.query.id,
      artifactInfo: {},
      num: 1,
      maxNum: 5,
      show: false,
      btnType: 1, // 1: 购买，2：转赠,3: 售空,4: 盲盒
      showCard: false,
      transferAccount: "",
      showType: 1, // 1: 转，2：确认密码
      payWord: "",
      address: "",
      images: []
    };
  },
  computed: {
    price() {
      return (this.artifactInfo.price * this.num).toFixed(2);
    }
  },
  mounted() {
    if (this.$route.query.type) {
      this.btnType = this.$route.query.type;
    }
    this.getDetail();
  },
  methods: {
    getDetail() {
      this.$api.home.artifactInfo(this.id).then(res => {
        if (res.code === 200) {
          this.artifactInfo = res.data;
          this.maxNum = res.data.buySize;
          this.images = res.data.detailPicture.split(",");
          this.address = res.data.token;
        }
      });
    },
    handleReduce() {
      if (this.num > 1) {
        this.num--;
      } else {
        this.$toast("最少购买一份");
      }
    },
    handleAdd() {
      if (this.num < this.maxNum) {
        this.num++;
      } else {
        this.$toast(`最多购买${this.maxNum}份`);
      }
    },
    handleAuthor() {
      this.$router.push({
        path: "/author",
        query: { authorId: this.artifactInfo.authorId }
      });
    },
    handleBuy() {
      this.show = true;
    },
    handlePay() {
      this.$router.push("/payStatus");
    },
    handleTransfer() {
      this.showType = 1;
      this.showCard = true;
    },
    handleConfirm() {
      if (this.showType == 1) {
        if (!this.transferAccount) {
          this.$toast("请填写转赠帐户");
          return;
        }
        this.showType = 2;
      } else {
        if (!this.payWord) {
          this.$toast("请填写支付密码");
          return;
        }
        this.$router.push("/success");
      }
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
.product-detail {
  background: #fff;
  padding-bottom: 160 * @s;
}
.detail {
  padding: 30 * @s;
  .img-wrap {
    position: relative;
    border-radius: 40 * @s;
    overflow: hidden;
    .product {
      width: 100%;
      height: 690 * @s;
      display: block;
    }
    .close {
      position: absolute;
      top: 10 * @s;
      right: 10 * @s;
      width: 92 * @s;
    }
    .border {
      position: absolute;
      left: 0 * @s;
      right: 0;
      margin: 0 auto;
      top: 135 * @s;
      border: 10 * @s solid #fff;
      width: 570 * @s;
      height: 420 * @s;
      border-radius: 40 * @s;
      box-sizing: border-box;
    }
  }
  .pro-title {
    font-weight: 900;
    color: #333333;
    font-size: 36 * @s;
    margin-top: 60 * @s;
    margin-bottom: 40 * @s;
    text-align: center;
  }
  .sell-price {
    width: 510 * @s;
    height: 70 * @s;
    line-height: 70 * @s;
    text-align: center;
    border-radius: 35 * @s;
    margin: 0 auto;
    background: #333;
    color: #fff;
    font-weight: 900;
    font-size: 30 * @s;
  }
  .author {
    height: 160 * @s;
    display: flex;
    align-items: center;
    background: #f2f2f2;
    border-radius: 40 * @s;
    margin-top: 60 * @s;
    padding: 0 40 * @s 0 30 * @s;
    img {
      width: 100 * @s;
      border-radius: 20 * @s;
    }
    .info {
      font-size: 30 * @s;
      color: #333;
      flex: 1;
      margin-left: 30 * @s;
      .margin {
        margin-top: 10 * @s;
      }
    }
  }
  .address-wrap {
    height: 108 * @s;
    display: flex;
    align-items: center;
    background: #f2f2f2;
    border-radius: 40 * @s;
    margin-top: 30 * @s;
    padding: 0 40 * @s 0 30 * @s;
    .address {
      color: #777;
      flex: 1;
    }
    img {
      width: 24 * @s;
    }
  }
}
.story {
  img {
    display: block;
    width: 100%;
  }
}
.qkl {
  text-align: center;
  margin-top: 30 * @s;
  img {
    width: 260 * @s;
  }
}
.maxNum {
  width: 534 * @s;
  height: 68 * @s;
  line-height: 68 * @s;
  color: #fff;
  background: #fa6400;
  border-radius: 100 * @s 100 * @s 1px 1px;
  text-align: center;
  margin: 0 auto;
  span {
    font-weight: bold;
  }
}
.btn-wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 160 * @s;
  background: #fff;
  box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 30 * @s;
  .btn {
    width: 630 * @s;
    height: 100 * @s;
    line-height: 100 * @s;
    background: #999999;
    text-align: center;
    font-weight: 900;
    color: #ffffff;
    font-size: 32 * @s;
    margin: 0 auto;
    border-radius: 55px;
  }
  .transfer {
    background: #333;
  }
  .blind,
  .open {
    width: 310 * @s;
  }
  .blind {
    background: #333;
  }
  .open {
    background: #fa6400;
  }
  .info {
    width: 510 * @s;
    background: #333;
  }
  img {
    width: 60 * @s;
  }
}
.sheet-content {
  padding: 60 * @s 30 * @s;
  background: #f2f2f2;
  .title {
    font-weight: 900;
    font-size: 36 * @s;
    margin-bottom: 60 * @s;
    text-align: center;
  }
  .list {
    height: 140 * @s;
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 40 * @s;
    padding: 0 40 * @s;
    img {
      width: 60 * @s;
    }
    p {
      flex: 1;
      margin-left: 32 * @s;
    }
  }
}
.popup {
  width: 680 * @s;
  box-sizing: border-box;
  padding: 60 * @s 80 * @s 80 * @s;
  text-align: center;
  .popup-title {
    text-align: left;
    span {
      font-weight: 900;
      color: #333333;
      font-size: 40 * @s;
    }
  }
  .popup-cont {
    p {
      font-size: 30 * @s;
      margin-bottom: 30 * @s;
      margin-top: 80 * @s;
      text-align: left;
    }
    .phone {
      font-size: 48 * @s;
      text-align: left;
      margin: 20 * @s 0;
    }
    .tip {
      color: #fa6400;
      text-align: left;
      font-size: 30 * @s;
      margin-bottom: 50 * @s;
    }
    .input-css {
      height: 120 * @s;
      text-align: center;
      background: #f2f2f2;
      border: none;
      border-radius: 40 * @s;
      width: 100%;
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
</style>
