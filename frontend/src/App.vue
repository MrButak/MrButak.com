<script setup>
import Header from './components/Header.vue';
import AboutMe from './components/home/AboutMe.vue';
import Projects from './components/home/Projects.vue';
import Resume from './components/home/Resume.vue';
import Footer from './components/Footer.vue';
</script>

<template>
<Header />
<div class="spacer"></div>
<AboutMe />
<Projects />
<Resume />
<Footer />
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
    font-size: 1.0625rem;
    font-size: clamp(1.0625rem, 0.953125rem + 0.546875vw, 1.5rem);
    
    
}
p, text {
    font-family: Railway;
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
    font-weight: 400;  
}
.lines-under-header-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}
.line-one {

    width: 85%;
    height: 10px;
    background-color: #D06224;
    border: 1px solid #f0f0e4;
}
.line-two {
    position: absolute;
    margin: 0 0 -10px 0;
    width: 70%;
    height: 10px;
    background-color: #AE431E;
    border: 1px solid #f0f0e4;
}
.line-three {
    position: absolute;
    margin: 0 0 -20px 0;
    width: 55%;
    height: 10px;
    background-color: #8A8635;
    border: 1px solid #f0f0e4;
}

.spacer {
    width: 30%;
    height: 50px;
}
/*Tablet sizes---------------------------------------------------------*/
@media (min-width: 480px) {

    
}
/*Desktop sizes*-----------------------------------------------------*/

@media (min-width: 900px) { 

    
}
</style>
