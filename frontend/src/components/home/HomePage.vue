<template>

<AboutMe />

</template>


<script setup>

import { ref, onMounted, computed } from 'vue';

import AboutMe from './AboutMe.vue';

</script>


<style>
.home-header {
    text-align: center;
    font-size: 1.625rem;
    font-size: clamp(1.625rem, 1.3rem + 1.625vw, 3.25rem);
}

/*Tablet sizes---------------------------------------------------------*/
@media (min-width: 480px) {

    
}
/*Desktop sizes*-----------------------------------------------------*/

@media (min-width: 900px) { 

    
}

</style>