
<template>
<div class="project-wrapper-main">

    <div class="project-image-wrapper-left">
        <img class="project-image" src="../../assets/images/salem-smoothies-1200x800.png">
    </div>
    <div class="project-text-wrapper-left">
        <h3>Salem Smoothies</h3>
        <p>Lorem, ipsum dolor sit amet consectetur ipsam doloremque dolorum? Eum, expedita! Odio expedita quis rerum! Maiores.</p>
        <div class="project-icon-wrapper">
            <span class="project-icon"><GithubTextIcon /></span>
            <span class="project-icon"><WebsiteTextIcon /></span>
            <span class="project-icon"><ViewMoreTextIcon /></span>
                <!-- <a href="" target="_blank" rel="noreferrer noopener"><img class="project-icon" src="../../assets/icons/github-icon-text.svg" alt="github-icon"></a>
                <a href="" target="_blank" rel="noreferrer noopener"><img class="project-icon" src="../../assets/icons/website-icon-text.svg" alt="github-icon"></a>
                <a><img class="project-icon" src="../../assets/icons/view-icon.svg" alt="github-icon"></a> -->
        </div>
        
    </div>

</div>

</template>

<script setup>

import { ref, onMounted, computed } from 'vue';
import GithubTextIcon from '../../components/svg/GithubTextIcon.vue';
import WebsiteTextIcon from '../../components/svg/WebsiteTextIcon.vue';
import ViewMoreTextIcon from '../../components/svg/ViewMoreTextIcon.vue';



</script>


<style lang="scss" scoped>
// light #E9C891  lighter #f0f0e4

.site-colors {

    
    color: #CEE5D0; // light green
    color: #F3F0D7; 
    color: #D8B384; // orange
    color: #5E454B;
// rgb(206, 229, 208)
// rgb(243, 240, 215)
// rgb(216, 179, 132)
// rgb(94, 69, 75)
}
.project-icon {
    
    fill: #f0f0e4;
}
.project-wrapper-main {
    display: flex;
    width: 100%;
    
    padding: 20vw 0 0 0;


    .project-image-wrapper-left {

        display: flex;
        
    }

    .project-image {
        display: flex;
        max-width: 60%;
        height: auto;
        border-top: 2rem solid #CEE5D0;
        border-right: 2rem solid #CEE5D0;
        border-bottom: 2rem solid #CEE5D0;
        outline: .1rem solid #5E454B;
        padding: .1rem .1rem .1rem 0;
        background-color: #5E454B;
        
    }
    .project-text-wrapper-left {
        display: flex;
        flex-direction: column;
        width: 56%;
        margin: -5% 0 0 44%;
        // height: 50%;
        background-color: #C36839cc;
        border: .1rem solid #C36839cc;
        position: absolute;
        padding: .8rem;
        border: .07rem solid #5E454B;
       

        h3 {
            color: #f0f0e4;
            font-size: 1.4rem;
            padding: 0 0 0.45rem 0;
        }
        p {
            color: #f0f0e4;
            font-size: 1.2rem;
            
        }
    }
    .project-icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}


/*Tablet sizes---------------------------------------------------------*/
@media (min-width: 480px) {

    .project-wrapper-main {
    
    

    .project-image {
        
        
        
    }

}

}
/*Desktop sizes*-----------------------------------------------------*/

@media (min-width: 900px) { 


}

</style>