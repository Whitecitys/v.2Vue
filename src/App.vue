<template>
<div id="app" class="container">
    <h1>White App</h1>
    <div id="nav-template" class="text-center p-3 d-flex justify-content-between">
        <router-link :to="{name: 'home'}">Home</router-link>
        <router-link :to="{name: 'page1'}">Count Number</router-link>
        <router-link :to="{name: 'page2'}">Vuex State</router-link>
        <router-link :to="{name: 'page3'}">Mixins</router-link>
        <router-link :to="{name: 'page4'}">Input Components</router-link>
        <router-link :to="{name: 'page5'}">Page 5</router-link>
    </div>
    <br>
    <router-view></router-view>
</div>
</template>

<script>

</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

#nav-template {
    background-color: rgba(61, 56, 56, 0.37);
}
</style>
