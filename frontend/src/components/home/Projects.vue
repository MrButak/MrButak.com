
<template>
<div class="project-wrapper-main">

    <div class="project-image-wrapper-left">
        <img class="project-image" src="../../assets/images/salem-smoothies-1200x800.png">
    </div>
    <div class="project-text-wrapper-left">
        <h3>Salem Smoothies</h3>
        
        <p>Full-stack e-commerce website which accepts payments via stripe, sends confirmation e-mails, and
            integrates a postgres database to update menu items and store order information.
        </p>
        <br />
        <p class="sub-header">Technologies:</p>
        
        <p>
            Frontend: Vue, Javascript , CSS
        </p>
        <p>
            Backend: Node.js, Express, Postgres, Stripe API, Send In Blue API
        </p>
        <div class="project-icon-wrapper">
            <span class="project-icon"><GithubTextIcon /></span>
            <span class="project-icon"><WebsiteTextIcon /></span>
            <span class="project-icon view-more-icon"><ViewMoreTextIcon /></span>
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


.project-wrapper-main {
    display: flex;
    width: 100%;
    padding: 5% 0 0 0;
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
        width: 65%;
        margin: -5% 0 0 35%;
        // height: 50%;
        background-color: #C36839cc;
        border: .1rem solid #C36839cc;
        position: absolute;
        padding: .8rem;
        border: .07rem solid #5E454B;
        h3 {
            color: #f0f0e4;
            font-size: 1.5rem;
            padding: 0 0 .5rem 0;
        }
        .sub-header {
            color: #f0f0e4;
            font-size: 1.25rem;
            font-weight: bold;
            padding: 0 0 .5rem 0;
        }
        p {
            color: #f0f0e4;
            font-size: 1.1rem;
        }
    }
    .project-icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .45rem 0 0 0;
        .project-icon {
            fill: #f0f0e4;
        }
        .view-more-icon {
            padding: .05rem 0 0 0;
        }
    }
}

/*medium sizes---------------------------------------------------------*/
@media (min-width: 480px) {

    .project-wrapper-main {
        .project-image-wrapper-left {  
        }

        .project-image { 
            max-width: 65%; 
        }
        .project-text-wrapper-left {
            max-width: 53%;
            margin: -.05% 0 0 47%;
            h3 {
                font-size: 1.8rem;   
            }
            .sub-header {
                font-size: 1.19rem;  
            }
            p {
                font-size: 1.4rem;
            }
        }
        .project-icon-wrapper {
            .project-icon {
            }
            .view-more-icon { 
            }
        }
    }

}

/*large*-----------------------------------------------------*/

@media (min-width: 700px) { 
    .project-wrapper-main {
        align-items: center;
        .project-image-wrapper-left {
        }
        .project-image {
            max-width: 70%;
        }
        .project-text-wrapper-left {
            width: 40%;
            margin: -0.05% 0 0 60%;
            h3 {
                font-size: 1.8rem;
            }
            .sub-header {
                font-size: 1.19rem;
            }
            p {
                font-size: 1.4rem;
            }
        }
        .project-icon-wrapper {
            .project-icon {
            }
            .view-more-icon {
            }
        }
    }

}
/*Desktop sizes*-----------------------------------------------------*/

@media (min-width: 900px) { 
    .project-wrapper-main {
        align-items: center;
        justify-content: space-between;
        .project-image-wrapper-left {
        }
        .project-image {
            max-width: 60%;
        }
        .project-text-wrapper-left {
            max-width: 40%;
            margin: 0 0 0 42%;
            h3 {
                font-size: 2rem;
            }
            .sub-header {
                font-size: 1.41rem;
            }
            p {
                font-size: 1.6rem;
            }
        }
        .project-icon-wrapper {
            .project-icon {
            }
            .view-more-icon {
                
            }
        }
    }

}

</style>