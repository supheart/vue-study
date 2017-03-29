import Vue from 'vue';
// import router from './router'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings.vue';
import seller from 'components/seller/seller.vue';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

// let app = Vue.extend(App);

const routes = [
    { path: '/goods', component: goods },
    { path: '/ratings', component: ratings },
    { path: '/seller', component: seller }
];

const router = new VueRouter({
    linkActiveClass: 'active',
    routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

// router.go('/goods');
