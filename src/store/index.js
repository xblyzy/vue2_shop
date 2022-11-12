import Vue from "vue";
import Vuex from 'vuex';
import home from './home/index'
import search from './search/index'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        home,
        search
    }
})