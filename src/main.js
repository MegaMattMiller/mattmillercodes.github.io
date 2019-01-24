import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithubSquare, faDev } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'https://82ce8ac54fa541329f916833502e2a4c@sentry.io/1379147' });

library.add(faGithubSquare, faDev);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
