<template>
<div>
    <input @input="onInput" type="text">
    <br>
    <br>
    {{text}}

</div>
</template>

<script>
export default {
    name: 'TextInput',
    props:{
        text:{
            type: String
        }
    },
    data(){
        return {
        
        }
    },
    methods:{
        onInput(e){
            this.$emit("input",e.target.value)
        }
    },
   
}

</script>
