import Vue from 'vue';
import JsonViewer from 'vue-json-viewer';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(JsonViewer);

new Vue({
  router,
  render(h) { return h(App); },
}).$mount('#app');
