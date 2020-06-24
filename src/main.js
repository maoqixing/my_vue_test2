import Vue from 'vue'
import App from './App.vue'
import router from './router'

	//3.0写法
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

Vue.config.productionTip = false;

//阿斯蒂芬

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
