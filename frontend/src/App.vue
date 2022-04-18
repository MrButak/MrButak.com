<script setup>
import Header from './components/Header.vue';
import AboutMe from './components/home/AboutMe.vue'
</script>

<template>
<Header />
<AboutMe />
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
    background-color: #F0F0E4;
    
}
</style>
