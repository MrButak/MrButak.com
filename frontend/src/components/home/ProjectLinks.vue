<template>
<div class="project-link-wrapper-main">
    <div class="project-link-wrapper">
        <a><img class="project-icon" src="../../assets/icons/github-icon-text.svg" alt="github-icon"></a>
        <a><img class="project-icon" src="../../assets/icons/website-icon-text.svg" alt="github-icon"></a>
        <a><img class="project-icon" src="../../assets/icons/play-video-icon-text.svg" alt="github-icon"></a>
        <div class="project-link-text">
        </div>
    </div>
    
</div>
<!-- <video class="video-wrapper" ref="smVideoRef" controls muted autoplay>
    <source v-bind:src="sdDemoVideo" type="video/webm">
</video>               -->

</template>

<script setup>

import { ref, onMounted, computed } from 'vue';




</script>


<style scoped>
/* light #E9C891  lighter #f0f0e4 orange #D06224 dark-rusty #AE431E olive #8A8635 */
.project-icon {
    width: 100px;
}
.project-link-wrapper-main {
    display: flex;
    flex-direction: column;
}
.project-link-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding: 10px 0 0 0;
}
.project-link-text {
    display: flex;
}
/*Tablet sizes---------------------------------------------------------*/
@media (min-width: 480px) {
.project-link-wrapper {
    
}



}
/*Desktop sizes*-----------------------------------------------------*/

@media (min-width: 900px) { 
.project-link-wrapper {
    
}
    
}

</style>