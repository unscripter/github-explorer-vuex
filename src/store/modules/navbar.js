import * as types from '../mutation-types';

const state = {
    showNavigation: false
}

const mutations = {
    [types.SHOW_HIDE_NAVIGATION] (state) {
        state.showNavigation = !state.showNavigation;
    }
}

const getters = {
    getNavbarVisibleStatus: state => state.showNavigation
}

const actions = {
    changeNavbarVisibleStatus({commit}) {
        debugger;
        commit(types.SHOW_HIDE_NAVIGATION);
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}
