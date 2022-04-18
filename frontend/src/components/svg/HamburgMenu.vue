<template>
    <svg class="hamburgMenuIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 24 24">
        <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
    </svg>
</template>

<script>
// export default {
//     name: 'HamburgMenu',
// }
</script>

<style scoped>
.hamburgMenuIcon {
    
    width: 42px;
    height: 42px;
    color: #F0F0E4;
    
}
/*Tablet sizes*-----------------------------------------------------*/
@media (min-width: 480px) {
    .hamburgMenuIcon {
    
        width: 48px;
        height: 48px;
        color: #F0F0E4;   
    }
}
/*Desktop sizes*-----------------------------------------------------*/
/*
@media (min-width: 1023px) {
    
}*/
</style>