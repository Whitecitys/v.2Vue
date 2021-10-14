<template>
    <div>
        <h1>Page 2</h1>
        Counter : {{count}}
    </div>
</template>

<script>
export default {
  name: 'Page2',
  computed: {
    count(){
      return this.$store.getters['user/count']
    }
  },
  methods:{
    increaseCount(){
      // console.log('white');
      this.$store.commit('user/increment')
    }
  }
 
}
</script>