<template>
<div>
    <router-link :to="{name: 'pageapi'}">
        <b-button id="myButton" class="foo bar">Show Store API</b-button>
    </router-link>
    <div v-for="user in users" :key="user.id" style="text-align: left;">
        <p>{{user.id}} {{user.title}} Completed : {{user.completed}}</p>
    </div>

</div>
</template>

<script>
export default {

    data() {
        return {
            users: []
        }
    },

    mounted() {
        this.$store.dispatch('user/getUsers')
            .then(data => {
                this.users = data
                console.log('test');
                this.$store.commit('user/setUser', data)
            })
    }
}
</script>
