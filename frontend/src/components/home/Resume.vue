<template>


<div class="home-page-wrapper-main">
    <h2 class="home-header">And here is my resume, thank you for considering me.</h2>
    <div class="full-flex-div">
        <div class="resume-wrapper">
            <img class="resume" v-bind:src="Resume" />
            <span class="resume-overlay">
                <img class="resume-icon" v-bind:src="dlIcon" />
                <img class="resume-icon" v-bind:src="viewIcon" />
            </span>
        </div>
    </div>
</div> 

</template>


<script setup>
import Resume from '../../assets/images/matthew-spence-resume.png';
import dlIcon from '../../assets/icons/download-icon.svg';
import viewIcon from '../../assets/icons/view-icon.svg';
</script>

<style>
/* light #E9C891  lighter #f0f0e4 orange #D06224 dark-rusty #AE431E olive #8A8635 */
/* darker rust #7B3C3C */
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
    padding: 18px 0;
    width: 100%;
}
.resume-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    width: 100%;
}
.resume {
    width: 90%;
}
.resume-overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
    position: absolute;
    z-index: 3;
    top: 0px;
    background-color: #7B3C3C7d;
    width: 90%;
    height: 100%;
}
.resume-icon {
    width: 60px;
}



/*Tablet sizes---------------------------------------------------------*/
@media (min-width: 480px) {
.full-flex-div {
    padding: 24px 0;
} 



}
/*Desktop sizes*-----------------------------------------------------*/

@media (min-width: 900px) { 
.full-flex-div {
    padding: 28px 0;
} 

}
</style>