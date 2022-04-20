<template>
<div class="about-me-full-width">
<div class="about-me-wrapper-main">

    <div class="about-me-inner">
        <h2>Hello, I'm Matthew - Full-stack develover.</h2>
    </div>
    <div class="stripes" style="background-color: ;"></div>
    <div class="stripes" style="background-color: ;"></div>
    <div class="stripes" style="background-color: ;"></div>
</div>
</div>

</template>


<script setup>

import { ref, onMounted, computed } from 'vue';

//import Schedule from './Schedule.vue';
// let conference = ref();
// let school = ref();
// let displaySchools = computed(() => !!conference.value)
// let conferences = computed(() => Object.keys(conAndSchObject));
// let schools = computed(() => conAndSchObject[conference.value]);
// // to call functions in Schedule.vue component
// let scheduleComponent = ref(Schedule); 
// defineExpose({
//      Schedule
//  });
// onMounted(() => {
// });
</script>

<style scoped>
h2 {
    text-align: center;
}
.about-me-wrapper-main {
    /* display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%; */
    
    /* padding: 20px 0; */
    /* background-color: #DB5F29; */
    /* border: 10px 0 solid #DB5F29; */
}
.about-me-full-width {
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 50px 0 0 0;

}
.stripes {
    width: 100%;
    height: 50px;
}
/* .about-me-inner {

    display: flex;
    
    height: 90%;
    width: 90%;
    background-color: #F0F0E4;
} */




/*Tablet sizes---------------------------------------------------------*/
@media (min-width: 480px) {

    
}
/*Desktop sizes*-----------------------------------------------------*/

@media (min-width: 900px) { 

    
}

</style>