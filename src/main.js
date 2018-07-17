import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'

Vue.config.productionTip = false
// this.userObj = Object.assign({}, this.someObject, { name: 'Amit, lName: 'Mundra' });

var vm = new Vue({
  router,
  store,
  created () {
    console.log("This value is", this);
  },
  render: h => h(App),
}).$mount('#app');
