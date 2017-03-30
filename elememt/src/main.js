import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App.vue';
import user from 'components/user/user.vue';
import adduser from 'components/adduser/adduser.vue';
import system from 'components/system/system.vue';
import test from 'components/test/test.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);

const routes = [
    { path: '/user', component: user },
    { path: '/adduser', component: adduser },
    { path: '/system', component: system },
    { path: '/test', component: test }
];

const router = new VueRouter({
    linkActiveClass: 'active',
    routes
});

console.log(App);
// Vue.set(App, 'routes', routes);

new Vue({
    el: '#app',
    router,
    render: h => h(App),
    propsData: {
        routes: routes
    }
});
