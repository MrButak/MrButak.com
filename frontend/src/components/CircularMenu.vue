<template>

<div class="flex-full">
    <div class="menu-wrapper-main">
        
        <span class="menu-item-row">
            <span class="menu-circle">
                <text>About Me</text>
            </span>
            <span class="menu-circle">
                <text>Top Right</text>
            </span>
        </span>

        <span class="menu-item-row">
            <span class="menu-circle">
                <text>Bottom Left</text>
            </span>
            <span class="menu-circle">
                <text>Bottom Right</text>
            </span>
        </span>

    </div>
</div>

</template>

<script setup>

import { ref, onMounted, computed } from 'vue';

</script>


<style lang="scss" scoped>

.flex-full {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

}
.menu-wrapper-main {
    width: 80vw;
    height: 80vw;
    border: 1px solid black;
    background-color: red;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .menu-circle {
        display: flex;
        width: 15vw;
        height: 15vw;
        border: 1px solid black;
        border-radius: 50%;
    }
    
    .menu-item-row {
        display: flex;
        width: 100%;
        justify-content: space-between;
        
        
    }
    
}

/*Tablet sizes---------------------------------------------------------*/
@media (min-width: 480px) {

}
/*Desktop sizes*-----------------------------------------------------*/

@media (min-width: 900px) { 

    
}

</style>