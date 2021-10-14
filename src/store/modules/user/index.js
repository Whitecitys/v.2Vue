import mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'

const initialState = {
        count: 0
}

export default{
    namespaced: true,

    state: initialState,

    getters: getters,

    actions: actions,

    mutations: mutations
}