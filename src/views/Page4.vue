<template>
<div>
    <h1>Page4</h1>
    <text-input  @input="onInput" :text="text" />
    <!-- <text-input  @input="onInput" v-model="text" /> -->

</div>
</template>

<script>
import TextInput from '../components/TextInput.vue'
export default {
    name: 'Page4',
    components: {
        TextInput,
    },
    data() {
        return {
            text: 'texttest1',
        }
    },
    methods: {
        onInput(e) {
            this.text = e;
        },
    }
}
</script>
