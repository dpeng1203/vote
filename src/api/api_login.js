import { $ } from "../utils/axios";
// import { stringify } from "qs";

export default {
  //获取手机验证码code
  code: p => $.get("/api/v1/sms/" + p),

  //登陆
  login: p => $.post("/api/v1/sms/login", p)
};
