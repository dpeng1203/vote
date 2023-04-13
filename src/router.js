import Vue from "vue";
import Router from "vue-router";
// import Tabbar from "./views/tabbar/index";

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: "/",
    //   name: "tabbar",
    //   component: Tabbar,
    //   redirect: "/home",
    //   children: [
    //     {
    //       path: "/home",
    //       name: "home",
    //       component: () =>
    //         import(/* webpackChunkName: "home" */ "./views/home/index.vue")
    //     },
    //     {
    //       path: "/market",
    //       name: "market",
    //       component: () =>
    //         import(/* webpackChunkName: "market" */ "./views/market/index")
    //     },
    //     {
    //       path: "/mine",
    //       name: "mine",
    //       component: () =>
    //         import(/* webpackChunkName: "mine" */ "./views/mine/index.vue")
    //     }
    //   ]
    // },
    {
      path: "/",
      name: "teacherList",
      component: () =>
        import(/* webpackChunkName: "mine" */ "./views/teacherList.vue")
    },
    {
      path: "/setting",
      name: "setting",
      component: () =>
        import(/* webpackChunkName: "mine" */ "./views/setting.vue")
    },
    {
      path: "/qrCode",
      name: "qrCode",
      component: () =>
        import(/* webpackChunkName: "mine" */ "./views/qrCode.vue")
    },
    {
      path: "/vote",
      name: "vote",
      component: () => import(/* webpackChunkName: "mine" */ "./views/vote.vue")
    },
    {
      path: "/echart",
      name: "echart",
      component: () =>
        import(/* webpackChunkName: "mine" */ "./views/echart.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "mine" */ "./views/login.vue")
    },
    {
      path: "/success",
      name: "success",
      component: () =>
        import(/* webpackChunkName: "mine" */ "./views/mine/success.vue")
    }
  ]
});
