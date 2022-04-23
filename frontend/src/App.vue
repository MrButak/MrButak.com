<script setup>
import Header from './components/Header.vue';
import AboutMe from './components/home/AboutMe.vue';
import Projects from './components/home/Projects.vue'
</script>

<template>
<Header />
<div class="spacer"></div>
<AboutMe />
<Projects />
</template>

<style>
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
   url(./assets/fonts/Roboto-Regular.ttf) format("truetype");
}
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

.home-header {
    font-family: Roboto;
    padding: 0 8px;
    text-align: center;
    font-size: 1.625rem;
    font-size: clamp(1.625rem, 1.3rem + 1.625vw, 3.25rem);
}

.spacer {
    width: 100%;
    height: 50px;
}
/*Tablet sizes---------------------------------------------------------*/
@media (min-width: 480px) {

    
}
/*Desktop sizes*-----------------------------------------------------*/

@media (min-width: 900px) { 

    
}
</style>
