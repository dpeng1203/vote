<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/images/logo.png" alt />
    </div>
    <div class="form">
      <input
        type="number"
        pattern="[0-9]*"
        placeholder="请输入手机号码"
        v-model="phone"
        class="phone"
      />
      <div class="sms">
        <input
          type="number"
          pattern="[0-9]*"
          placeholder="请输入验证码"
          v-model="code"
          class="phone code"
        />
        <div class="code-btn">
          <span v-show="!timeObj.canGet">{{ timeObj.waitTime + " s" }}</span>
          <span @click="getCode" v-show="timeObj.canGet">获取验证码</span>
        </div>
      </div>
    </div>
    <div class="btn" :class="{ active: active }" @click="handleLogin">
      登 录
    </div>
    <div class="deal">
      <van-checkbox v-model="checked" checked-color="#333"
        >已阅读并同意<span class="deal-text">《用户服务协议》《隐私协议》</span>
      </van-checkbox>
    </div>
  </div>
</template>

<script>
import { timeCountdown, checkPhone } from "../utils/index";
export default {
  data() {
    return {
      phone: "",
      code: "",
      timeCountObj: {
        //倒计时临时对象
        canGet: true,
        timer: null,
        waitTime: 60
      },
      checked: false
      // active: false
    };
  },
  computed: {
    timeObj() {
      //最终对象
      if (!this.timeCountObj.canGet) {
        return timeCountdown(this.timeCountObj);
      } else {
        return this.timeCountObj;
      }
    },
    active() {
      if (checkPhone(this.phone) && this.code.trim().length == 6) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    getCode() {
      if (!checkPhone(this.phone)) {
        this.$toast("请输入正确手机号");
        return false;
      }
      this.$api.login.code(this.phone).then(res => {
        if (res.code === 200) {
          this.$toast("发送成功！");
          //倒计时开始
          timeCountdown(this.timeObj); //参数为最终对象
        }
      });
    },
    handleLogin() {
      if (!this.checked) {
        this.$toast("请勾选协议");
        return;
      }
      if (this.active) {
        let data = {
          phone: this.phone,
          smsCode: this.code
        };
        console.log(data);
        this.$api.login.login(data).then(res => {
          if (res.code === 200) {
            localStorage.Authorization = "Bearer " + res.data.token;
            localStorage.phone = this.phone;
            this.$router.push("/home");
          }
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
@s: 0.0133rem;
input::-webkit-input-placeholder {
  color: #000;
}
.login {
  min-height: 100vh;
  box-sizing: border-box;
  padding: 200 * @s 80 * @s;
  background: url(../assets/images/bg.png);
  .logo {
    text-align: center;
    img {
      width: 324 * @s;
    }
  }
  .form {
    margin-top: 60 * @s;
  }
  .phone {
    border-radius: 40 * @s;
    height: 110 * @s;
    background: rgba(0, 0, 0, 0.1);
    border: none;
    width: 100%;
    padding: 0 40 * @s;
    box-sizing: border-box;
  }
  .sms {
    margin-top: 40 * @s;
    position: relative;
    .code-btn {
      position: absolute;
      right: 20 * @s;
      top: 20 * @s;
      background: #333333;
      width: 180 * @s;
      height: 70 * @s;
      line-height: 70 * @s;
      text-align: center;
      color: #fff;
      font-size: 24 * @s;
      font-weight: bold;
      border-radius: 20 * @s;
    }
  }
}
.btn {
  width: 590 * @s;
  height: 110 * @s;
  line-height: 100 * @s;
  background: #999;
  text-align: center;
  font-weight: 900;
  color: #ffffff;
  font-size: 32 * @s;
  margin: 0 auto;
  border-radius: 55px;
  margin-top: 100 * @s;
}
.active {
  background: #333;
}
.deal {
  font-size: 24 * @s;
  margin-top: 60 * @s;
  span {
    color: #fa6400;
  }
}
</style>
