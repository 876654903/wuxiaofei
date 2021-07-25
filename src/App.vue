<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import router from "./router.js";
export default {
  name: "App",
  components: {},
  created() {
    // 登陆验证
    router.beforeEach((to, from, next) => {
      console.log("to:", to);
      // router.js中需要有登陆验证的路由添加了meta
      if (to.meta.requireAuth) {
        // 去localStorage中看是否有登陆token
        if (JSON.parse(localStorage.getItem("token")) == null) {
          console.log("没有登录就去登陆页面");
          this.$router.push("/login");
          next();
        } else {
          console.log("获取到了token 说明登陆next就正常跳转");
          next();
        }
      } else {
        // 不需要做登陆验证的路由正常跳转
        next();
      }
    });
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
