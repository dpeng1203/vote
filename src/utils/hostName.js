// 配置开发环境与生产环境
let hostName;

if (process.env.NODE_ENV === "development") {
  hostName = "";
} else {
  hostName = window.location.origin;
  //   hostName = "http://dd2.dodohz.com";
}

export default hostName;
