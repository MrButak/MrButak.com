<script setup>
import Header from './components/Header.vue';
import HomePage from './components/home/HomePage.vue'
</script>

<template>
<Header />
<HomePage />
</template>

<style>
* {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    /*univeral fluid text size*/
    font-size: 1.1875rem;
    font-size: clamp(1.1875rem, 1.175rem + 0.0625vw, 1.25rem);
}

#app {
    overflow-x: hidden;
    min-height: 100vh;
    background-color: #E9C891;
    
}
</style>
