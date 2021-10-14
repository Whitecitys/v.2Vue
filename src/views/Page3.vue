<template>
    <div>
        <h1>Page 3</h1>
        <!-- {{ users }} -->
    </div>
</template>

<script>
export default {
    mounted(){
        console.log('API');
        this.$store.dispatch('user/getUser')
        .then(data => {
            this.users = data
        })
    }
}
</script>