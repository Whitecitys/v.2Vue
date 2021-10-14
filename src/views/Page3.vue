<template>
    <div>
        <h1>Page 3</h1>
       <div v-for="user in users" :key="user.id" style="text-align: left;">
           <p >{{user.id}}   {{user.title}} Completed : {{user.completed}}</p>
       </div>
    </div>
</template>

<script>
export default {
    
    data(){
        return {
            users : []
        }
    },

    mounted(){
        this.$store.dispatch('user/getUsers')
        .then(data => {
            this.users = data
        })
    }

}
</script>