var Vue = require('vue');
var vueRouter = require('vue-router');
var VueResourse = require('vue-resource');
var VueJwtMongo = require('vue-jwt-mongo');

Vue.use(VueResourse);
Vue.use(VueJwtMongo.Client);

Vue.use(vueRouter);

var Register = require('./register.vue');
var router = new vueRouter();

router.map({
    '/register': { component: Register }
});

router.start(Vue.extend({}), '#app');
