<script setup>
import Header from './components/Header.vue';
import AboutMe from './components/home/AboutMe.vue';
import Projects from './components/home/Projects.vue';
import Resume from './components/home/Resume.vue';
import Footer from './components/Footer.vue';
import CircularMenu from './components/CircularMenu.vue';
</script>

<template>
<Header />
<Projects />
<!-- <Footer /> -->
</template>

<style>
@font-face {
    font-family: "Roboto";
    src: local("Roboto"),
    url(./assets/fonts/Roboto-Regular.ttf) format("truetype");
    font-display: swap;
}
@font-face {
    font-family: "Raleway";
    src: local("Raleway"),
    url(./assets/fonts/Raleway-Regular.ttf) format("truetype");
    font-display: swap;
}
* {
    
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    /*univeral fluid text size*/
    /* font-size: 1.0625rem;
    font-size: clamp(1.0625rem, 0.953125rem + 0.546875vw, 1.5rem); */
    
    
}
html {
    background-color: #F3F0D7;
}
p, text {
    font-family: Raleway;
}
h1, h2, h3, h4, h5, h6 {
    font-family: Roboto;
}
#app {
    
    /* min-height: 100vh; */
    /* background-color: #E9C891; */
    
}

/*Tablet sizes---------------------------------------------------------*/
@media (min-width: 480px) {

    
}
/*Desktop sizes*-----------------------------------------------------*/

@media (min-width: 900px) { 

    
}
</style>
