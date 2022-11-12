import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'
// 使用插件
Vue.use(VueRouter);
// 使用原来方法
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;


// 重写原型链的push和replace方法
VueRouter.prototype.push = function (location, resolve = () => { }, reject = (err) => err) {
    originPush.call(this, location, resolve, reject);
}

VueRouter.prototype.replace = function (location, resolve = () => { }, reject = (err) => err) {
    originReplace.call(this, location, resolve, reject);
}

const router = new VueRouter({ routes });

export default router;