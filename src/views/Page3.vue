<template>
<div>
    <h1>Page 3</h1>
    <b-button @click="logmessage()">Show message Mixin</b-button>

</div>
</template>

<script>
import HelloMixin from '../mixins/HelloMixin.js'

export default {
    name: 'Page3',

    mixins: [
        HelloMixin
    ],
    created(){
        this.logmessage();
    },

    methods: {
        messagemixins() {
            console.log('page 3')
        },
    },
    
    
}
</script>
