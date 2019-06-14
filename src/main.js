// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
Vue.prototype.$http = axios
import qs from 'qs'
Vue.prototype.$qs = qs;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import commonCom from './components/common'
for (var i in commonCom) {
    Vue.component(i, commonCom[i])
}

Vue.use(ElementUI);

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    render: h => h(App)
})