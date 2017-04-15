var Vue = require('vue');
var vueRouter = require('vue-router');

Vue.use(vueRouter);

var Register = require('./register.vue');
var router = new vueRouter();

router.map({
    '/register': { component: Register }
});

router.start(Vue.extend({}), '#app');