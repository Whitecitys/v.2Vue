export default {
    increment: function (state) {
        state.count++
    },
    setUser: function (state,data){
        state.users = data
    }
}