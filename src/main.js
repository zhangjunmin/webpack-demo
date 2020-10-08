import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './components/index.vue';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';

import axios from 'axios'

Vue.prototype.$axios = axios;

Vue.use(ElementUI);

new Vue({
    el: '#app',
    store,
    render: (h) => h(App)
})