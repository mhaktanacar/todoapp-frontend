import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueGoodTablePlugin from 'vue-good-table';
import VueRouter from 'vue-router';
import routes from './routes';

axios.defaults.baseURL = 'http://whattodo-env.eba-8mztkigm.us-east-2.elasticbeanstalk.com/';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-good-table/dist/vue-good-table.css'


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueGoodTablePlugin);


Vue.use(VueRouter);
const router = new VueRouter({ routes });



Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')