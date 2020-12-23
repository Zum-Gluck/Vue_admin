import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'
import './assets/css/animate.min.css'
import './plugins/element.js'
import './assets/css/base.css'
import './assets/fonts/iconfont.css'

Vue.config.productionTip = false

// 配置网络请求
axios.defaults.baseURL = 'http://localhost:3000/api/admin'
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  let token = window.sessionStorage.getItem("token")

  if (!token) return config

  //将token放到请求头发送给服务器,将tokenkey放在请求头中
  config.headers.Authorization = "Bear " + token;
  //也可以这种写法
  // config.headers['accessToken'] = Token;
  return config;

}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

Vue.prototype.$http = axios


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
