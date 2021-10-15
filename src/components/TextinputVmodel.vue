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
    name: 'TextInputVmodel',
    props:{
        text:{
            type: String
        },
    },
    data(){
        return {
            
        }
    },
    methods:{
    
    },
   
}

</script>
