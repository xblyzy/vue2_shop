import { reqCatagoryList } from "@/api";
const state = {
    categoryList: [],
}

const actions = {
    async getCategoryList({ commit }) {
        let res = await reqCatagoryList();
        if (res.code === 200) {
            commit("CATEGORYLIST", res.data);
        }
    }
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList.slice(0,15);
    }
};
const getters = {};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}