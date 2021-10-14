<template>
<div>
    <h1>Page4</h1>
    {{text}}
    <input v-model="text" type="text">
</div>
</template>

<script>
export default {
    data(){
        return {
            text : 'text'
        }
    },
    name: 'TextInput',
    // props:{
    //     type: String
    // },

   
}

</script>