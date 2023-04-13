<template>
  <div class="pay-word">
    <input
      type="password"
      v-model="password"
      placeholder="请输入支付密码"
      class="pw"
    />
    <input
      type="password"
      placeholder="请再次输入支付密码"
      v-model="pwAgain"
      class="pw"
    />
    <van-button
      round
      type="info"
      class="btn"
      :class="{ active: active }"
      @click="handleSave"
      >保 存</van-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      pwAgain: ""
      // active: false
    };
  },
  computed: {
    active() {
      if (this.password.trim().length >= 6 && this.password == this.pwAgain) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    document.title = "支付密码";
  },
  methods: {
    handleSave() {}
  }
};
</script>

<style lang="less" scoped>
@s: 0.0133rem;
.pay-word {
  min-height: 100vh;
  background: #fff;
  padding: 80 * @s;
  box-sizing: border-box;
  text-align: center;
  .pw {
    height: 120 * @s;
    text-align: center;
    background: #f2f2f2;
    border: none;
    border-radius: 40 * @s;
    width: 100%;
    margin-top: 40 * @s;
  }
  .btn {
    width: 300 * @s;
    height: 100 * @s;
    background: #999;
    border-radius: 40 * @s;
    font-size: 30 * @s;
    font-weight: 900;
    margin-top: 80 * @s;
  }
  .active {
    background: #333;
  }
}
</style>
