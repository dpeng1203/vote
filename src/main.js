import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import api from "./api/index";
Vue.prototype.$api = api;

import {
  Icon,
  Toast,
  Field,
  Checkbox,
  Popup,
  Button,
  Empty,
  Slider
} from "vant";

Vue.config.productionTip = false;

Vue.use(Icon);
Vue.use(Toast);
Vue.use(Field);
Vue.use(Checkbox);
Vue.use(Popup);
Vue.use(Button);
Vue.use(Empty);
Vue.use(Slider);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
