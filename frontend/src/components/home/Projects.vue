
<template>

<div class="home-page-wrapper-main">
    <h2 class="home-header">Here are some of my notable projects.</h2>
    <div class="full-flex-div">
        <div class="home-content-wrapper">
            <h3 class="project-title">E-Shop</h3>
            
            <div class="project-body-text">
                <p><text style="font-weight: 600">About: </text>
                    <br />
                    For a local smoothie bussiness, this webapp accepts payment via stripe, sends order confermation e-mails, and integrates a postgresql database to add / remove menu items.
                </p>
                
                <p>
                    <br />
                    <text style="font-weight: 600">Frontend: </text>
                    <br />Vue, Vanilla JavaScript, HTML, Vanilla CSS
                </p>
                <br />
                <p>
                    <text style="font-weight: 600">Backend: </text>
                    <br />Node.js, Express.js, Postgresql, Stripe API, STMP configuration
                </p>
                <br />
                <p>
                    <text style="font-weight: 600">Other: </text>
                    <br />Git, GIMP, Heroku for deployment
                </p>
            </div>
            <ProjectLinks />
            <!-- <video class="video-wrapper" ref="smVideoRef" controls muted autoplay>
                <source v-bind:src="sdDemoVideo" type="video/webm">
            </video>               -->
        </div>
    </div>
</div> 

</template>

<script setup>

import { ref, onMounted, computed } from 'vue';
import ProjectLinks from '../home/ProjectLinks.vue';
import sdDemoVideo from '../../assets/videos/screen-capture.webm';

onMounted(() => {
    smVideoRef.play()
});

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
    /* padding: 13px 10px 13px 10px; */
    border: 3px solid #D06224;
    background-color: #D06224;
    border-radius: 3%;
    /* height: 500px; */
}
.project-title {
    color: #f0f0e4;
    padding: 10px 0;
}
.project-body-text {
    width: 100%;
    background-color: #f0f0e4;
    padding: 13px 10px 13px 10px;
    border-radius: 0 0 0 0;
}
.video-wrapper {
    
    border-radius: 3%;
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