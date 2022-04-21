
<template>

<div class="home-page-wrapper-main">
    <h2 class="home-header">Here are some of my notable projects.</h2>
    <div class="full-flex-div">
        <div class="home-content-wrapper">
            
            
        </div>
    </div>
</div> 
<video>
    
</video>
</template>

<script setup>

import { ref, onMounted, computed } from 'vue';
import headShot300x300 from '../../assets/images/matthew-head-shot-1-300x300.png'
</script>


<style scoped>
/* light #E9C891  lighter #f0f0e4 orange #D06224 dark-rusty #AE431E olive #8A8635 */

.home-page-wrapper-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 14px 0;
}
.full-flex-div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 18px 0;
} 
.home-content-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 84%;
    padding: 13px 10px 13px 10px;
    border: 3px solid #D06224;
    background-color: #f0f0e4;
    border-radius: 3%;
    height: 500px;
}

/*Tablet sizes---------------------------------------------------------*/
@media (min-width: 480px) {
.full-flex-div {
    padding: 24px 0;
} 

.home-content-wrapper {
    flex-direction: row;
    justify-content: center;
    width: 70%;
    padding: 20px; 
      
}

}
/*Desktop sizes*-----------------------------------------------------*/

@media (min-width: 900px) { 
.full-flex-div {
    padding: 28px 0;
} 

.home-content-wrapper {
    max-width: 600px;
}
    
}

</style>