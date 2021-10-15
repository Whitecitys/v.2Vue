<template>
    <div>
        <h1>Page API</h1>
        {{users}}
    </div>
</template>

<script>
export default {
    name: 'PageApi',
    data(){
        return{
            
        }
    },

    mounted(){
        console.log('mounted pageapi');
    },
    computed: { 
        // users: function () {
        //     return this.$store.getters['user/users']
        // },

        // users2: () => {
        //     return this.$store.getters['user/users']
        // },

        users () {
            return this.$store.getters['user/users']
        },

        // user4: () => this.$store.getters['user/users']
    }
}
</script>