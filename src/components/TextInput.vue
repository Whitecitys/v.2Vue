<template>
<div>
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
}

</script>
