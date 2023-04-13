import { $ } from "../utils/axios";
// import { stringify } from "qs";
let Authorization = localStorage.getItem("Authorization");
console.log("Authorization: " + Authorization);
export default {
  // s首页轮播
  banner: p => $.get("/api/v1/app/banner/record", p),

  // 藏品列表
  artifact: p => $.get("api/v1/app/artifact/record", p),

  // 藏品详情
  artifactInfo: p =>
    $.get("/api/v1/app/artifact/detail/" + p, null, { Authorization }),

  // 公告
  notice: p => $.get("api/v1/system/notice/record", p),

  // 藏品详情
  noticeDetail: p => $.get("/api/v1/system/notice/detail/" + p),

  // 作者详情
  authorDetail: p =>
    $.get("/api/v1/app/author/detail/" + p, null, { Authorization })
};
