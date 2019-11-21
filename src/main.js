import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)
Vue.config.productionTip = false
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:3000/";
Vue.prototype.$axios = axios;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
