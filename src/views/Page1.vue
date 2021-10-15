<template>
<div>
    <h1>Page 1</h1>
    {{count}}
    <br>
    <b-button @click="increaseCount" variant="success">add</b-button>
    
</div>
</template>

<script>

export default {
    name: 'Page1',

    data() {
        return {
            users: [],
        }
    },

    created(){
      this.users = this.$store.getters['user/users']
    },

    computed: {
        count() {
            return this.$store.getters['user/count']
        }
    },
    methods: {
        increaseCount() {
            // console.log('white');
            this.$store.commit('user/increment')
        },
    }
}
</script>
