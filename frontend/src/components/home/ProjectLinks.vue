<template>
<div class="project-link-wrapper">
    <a><img class="project-icon" src="../../assets/icons/github-icon-text.svg" alt="github-icon"></a>
    <a><img class="project-icon" src="../../assets/icons/website-icon-text.svg" alt="github-icon"></a>
    <a><img class="project-icon" src="../../assets/icons/play-video-icon-text.svg" alt="github-icon"></a>    
</div>

</template>

<script setup>

import { ref, onMounted, computed } from 'vue';
</script>


<style scoped>
/* light #E9C891  lighter #f0f0e4 orange #D06224 dark-rusty #AE431E olive #8A8635 */
.project-icon {
    width: 70px;
}

.project-link-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding: 15.25px 0 5.25px 0;
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