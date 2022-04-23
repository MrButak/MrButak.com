
<template>

<div class="home-page-wrapper-main">
    <h2 class="home-header">Here are some of my notable projects.</h2>
    <div class="full-flex-div">
        <div class="home-content-wrapper">
            <h3 class="project-title">{{ projectArry[projectIndex].title }}</h3>
            
            <div class="project-body-text">
                <!-- <img class="project-image" src="../../assets/images/salem-smoothies-preview.png"/> -->
                <p><text class="project-subheader">About: </text>
                    <br />
                    {{ projectArry[projectIndex].about }}
                </p>
                
                <p>
                    <br />
                    <text class="project-subheader">Frontend: </text>
                    <br />{{ projectArry[projectIndex].frontend }}
                </p>
                <br />
                <p>
                    <text class="project-subheader">Backend: </text>
                    <br />{{ projectArry[projectIndex].backend }}
                </p>
                <br />
                <p>
                    <text class="project-subheader">Other: </text>
                    <br />{{ projectArry[projectIndex].other }}
                </p>
            </div>
            <div class="project-link-wrapper">
                <a v-bind:href="projectArry[projectIndex].github" target="_blank" rel="noreferrer noopener"><img class="project-icon" src="../../assets/icons/github-icon-text.svg" alt="github-icon"></a>
                <a v-bind:href="projectArry[projectIndex].website" target="_blank" rel="noreferrer noopener"><img class="project-icon" src="../../assets/icons/website-icon-text.svg" alt="github-icon"></a>
                <a><img class="project-icon" src="../../assets/icons/play-video-icon-text.svg" alt="github-icon"></a>    
            </div>
        </div>
    </div>
<div class="nav-wrapper-main">
    <img @click="prevProject()" class="arrow-icon-left" src="../../assets/icons/horizontal-arrow-icon.svg" />
    <text class="project-nav-text">{{ currentProjectCount }} / {{ projectArry.length }}</text>
    <img @click="nextProject()" class="arrow-icon-right" src="../../assets/icons/horizontal-arrow-icon.svg" />
</div>
    
</div> 

</template>

<script setup>

import { ref, onMounted, computed } from 'vue';

let projectArry = [];  

let project1 = {
    title: 'E-Shop',
    about: 'For a local smoothie bussiness, this webapp accepts payment via stripe, sends order confermation e-mails, and integrates a postgresql database to add / remove menu items.',
    frontend: 'Vue, Vanilla JavaScript, HTML, Vanilla CSS',
    backend: 'Node.js, Express.js, Postgresql, Stripe API, STMP configuration',
    other: 'Git and Github for source control and storage, Heroku for deployment, GIMP for images',
    github: 'https://github.com/MrButak/e-shop',
    website: 'https://salem-smoothies.herokuapp.com'

};
let project2 = {
    title: 'Stories App',
    about: 'A server-side rendered, message-board style app with login, user sessions, and an intergrated postgresql database.',
    frontend: 'Esj, Vanilla CSS',
    backend: 'Node.js, Express.js, Postgresql',
    other: 'Git and Github for source control and storage, Heroku for deployment',
    github: 'https://github.com/MrButak/stories',
    website: 'https://mrbutak-story-app.herokuapp.com/login'
};
projectArry.push(project1, project2);

// show projectArry[projectIndex] on dom
let projectIndex = ref(0);

function prevProject() {

    if(projectIndex.value < 1) {
        return;
    };
    projectIndex.value--;
};

function nextProject() {

    if(projectArry.length <= projectIndex.value + 1) {
        return;
    };
    projectIndex.value++;
};


let currentProjectCount = computed(() => {
    return projectIndex.value + 1;
});

onMounted(() => {
    // initProjectArry();
    // smVideoRef.play()
});


</script>


<style scoped>
/* light #E9C891  lighter #f0f0e4 orange #D06224 dark-rusty #AE431E olive #8A8635 */
/* .project-image {
    width: 100%;
} */
.arrow-icon-left {
    width: 100px;
}
.arrow-icon-right {
    
    transform: rotateY(180deg);
    width: 100px;
}
.project-nav-text {
    font-weight: 900;
    font-size: 1.25rem;
    font-size: clamp(1.25rem, 1.2rem + 0.25vw, 1.5rem);

}
.nav-wrapper-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 0 7%;
}
/* project links start */
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
/* project links end */

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
    width: 90%;
    /* padding: 13px 10px 13px 10px; */
    border: 3px solid #D06224;
    background-color: #D06224;
    border-radius: 0%;
    
}
.project-title {
    color: #f0f0e4;
    padding: 10px 0;
    font-family: Raleway;
    font-size: 1.5rem;
    font-size: clamp(1.5rem, 1.425rem + 0.375vw, 1.875rem);
}
.project-subheader {
    font-family: Roboto;
    font-weight: 600;
}
.project-body-text {
    width: 100%;
    background-color: #f0f0e4;
    padding: 13px 10px 13px 10px;
    border-radius: 0 0 0 0;
    height: 400px;
    overflow-x: scroll;
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
    justify-content: center;
    width: 70%;    
}
.project-body-text {
    
    height: 400px;
    overflow-x: scroll;
}
.nav-wrapper-main {
    width: 70%;
}


}
/*Desktop sizes*-----------------------------------------------------*/

@media (min-width: 900px) { 
.full-flex-div {
    padding: 28px 0;
} 

.home-content-wrapper {
    max-width: 800px;
}
.nav-wrapper-main {
    max-width: 600px;
}
}

</style>