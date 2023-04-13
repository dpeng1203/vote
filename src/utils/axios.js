import axios from "axios";
import { stringify } from "qs";
// import router from "../router";
import { Toast } from "vant";
import hostName from "./hostName";

// 配置axios请求头与baseUrl
axios.defaults.timeout = 8000;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
//跨域携带凭证
axios.defaults.withCredentials = true;

// http request 拦截器
axios.interceptors.request.use(
  config => {
    config.baseURL = hostName;
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
// http响应拦截器
axios.interceptors.response.use(
  response => {
    // console.log(response)
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

const ajax_main = (
  method,
  url = "",
  params,
  config = { showLoading: true, Authorization: "" }
) => {
  return new Promise((resolve, reject) => {
    const notBodyMethod = ["GET", "POST", "DELETE"];

    let configObj = {
      method,
      url
    };

    if (notBodyMethod.indexOf(method) > -1) {
      if (method == "GET" || method == "POST") {
        if (params) {
          configObj.url = configObj.url + "?" + stringify(params);
        }
      } else {
        configObj.data = params;
      }
    } else {
      configObj.data = params;
    }

    if (config.showLoading) {
      Toast.loading({
        mask: true,
        duration: 10000,
        forbidClick: true, // 禁用背景点击
        message: "加载中..."
      });
    }

    // 一些接口需要传Authorization
    if (config.Authorization) {
      configObj.headers = { Authorization: config.Authorization };
    }
    axios(configObj)
      .then(function(response) {
        Toast.clear();
        resolve(response.data);
        if (response.data.code != 200) {
          Toast(response.data.msg);
        }
      })
      .catch(function(error) {
        reject(error);
        Toast.clear();
      });
  });
};

export const $ = {
  get: (url, params, config) => ajax_main("GET", url, params, config),
  delete: (url, params, config) => ajax_main("DELETE", url, params, config),
  post: (url, params, config) => ajax_main("POST", url, params, config),
  put: (url, params, config) => ajax_main("PUT", url, params, config)
};
