import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
//引用router.js
import router from './router.js'
import './assets/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")

