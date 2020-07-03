import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import NProgress from 'nprogress';
import 'nprogress/nprogress.css'

import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'cUr7a6SPt1Gm3vv6RBy6NuqZhOOXfkKp'
});

import VCharts from 'v-charts'
Vue.use(VCharts)

import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  NProgress.start();
  if(to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach(() => {
  NProgress.done();
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
