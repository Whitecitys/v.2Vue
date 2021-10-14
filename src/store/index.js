import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'

Vue.use(Vuex)

var initState = {
    num: 12
}

export default new Vuex.Store({
    state: initState,
    
    mutations: {
    },

    getters:{
        num:(state)=>state.num
    },

    actions: {
    },

    modules: {
        user,
    }
})