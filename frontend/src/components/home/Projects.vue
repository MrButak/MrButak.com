<template>
<h2 class="heading">Projects</h2>
<div class="project-wrapper-main">
<div class="project-wrapper-main-left">
    <div class="project-image-wrapper-left">
        <img class="project-image-left" src="../../assets/images/salem-smoothies-1200x800.png">
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
            <a href="https://github.com/MrButak/e-shop" target="_blank" rel="noreferrer noopener"><GithubTextIcon /></a>
            <a href="https://salem-smoothies.herokuapp.com/" target="_blank" rel="noreferrer noopener"><WebsiteTextIcon /></a>
            <a href="" target="_blank" rel="noreferrer noopener"><ViewMoreTextIcon /></a>
        </div>
    </div>
</div>


<div class="project-wrapper-main-right">
    <div class="project-image-wrapper-right">
        <img class="project-image-right" src="../../assets/images/vueopoly-1200x800.png">
    </div>
    <div class="project-text-wrapper-right">
        <h3>Vueopoly</h3>
        
        <p>Fully functional Monopoly game made entirely in Vue. In this project I learned a lot about project structure and scalability. Supports 2 - 6 players.
        </p>
        <br />
        <p class="sub-header">Technologies:</p>
        
        <p>
            Frontend: Vue, Javascript , SCSS, Local Storage
        </p>
        
        <div class="project-icon-wrapper">
            <a href="https://github.com/MrButak/vueopoly-v2" target="_blank" rel="noreferrer noopener"><GithubTextIcon /></a>
            <a href="https://vueopoly.web.app/" target="_blank" rel="noreferrer noopener"><WebsiteTextIcon /></a>
            <a href="" target="_blank" rel="noreferrer noopener"><ViewMoreTextIcon /></a>
        </div>
    </div>
</div>


<div class="project-wrapper-main-left">
    <div class="project-image-wrapper-left">
        <img class="project-image-left" src="../../assets/images/stories-app-1200x800.png">
    </div>
    <div class="project-text-wrapper-left">
        <h3>Stories App</h3>
        
        <p>A server side rendered, message-board style app with login, user sessions, and an integrated postgres
            database.
        </p>
        <br />
        <p class="sub-header">Technologies:</p>
       
        <p>
            Backend: Node.js, Express, Postgres, EJS template engine
        </p>
        <div class="project-icon-wrapper">
            <a href="https://github.com/MrButak/stories" target="_blank" rel="noreferrer noopener"><GithubTextIcon /></a>
            <a href="https://mrbutak-story-app.herokuapp.com/" target="_blank" rel="noreferrer noopener"><WebsiteTextIcon /></a>
            <a href="" target="_blank" rel="noreferrer noopener"><ViewMoreTextIcon /></a>
        </div>
    </div>
</div>
</div>
</template>

<script setup>

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

.heading {
    color: #5E454B;
    text-align: center;
    margin: 1.2rem 0;
    font-size: 3rem;
}

.project-wrapper-main {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin: 3rem 0 0 0;
    
}

.project-icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .45rem 0 0 0;    
}

.project-wrapper-main-left {
    display: flex;
    width: 100%;
    .project-image-wrapper-left {
        display: flex;
        position: absolute;
    }

    .project-image-left {
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
        background-color: #C36839cc;
        border: .1rem solid #C36839cc;
        padding: .8rem;
        border: .07rem solid #5E454B;
        z-index: 1;
        
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
}


.project-wrapper-main-right {
    display: flex;
    width: 100%;
    .project-image-wrapper-right {
        display: flex;
        flex-direction: row-reverse;
        position: absolute;
    }
    .project-image-right {
        display: flex;
        max-width: 65%;
        height: auto;
        border-top: 2rem solid #CEE5D0;
        border-left: 2rem solid #CEE5D0;
        border-bottom: 2rem solid #CEE5D0;
        outline: .1rem solid #5E454B;
        padding: .1rem 0 .1rem .1rem;
        background-color: #5E454B;
    }
    .project-text-wrapper-right {
        display: flex;
        flex-direction: column;
        width: 65%;
        margin: -5% 0 0 0;
        background-color: #C36839cc;
        border: .1rem solid #C36839cc;
        padding: .8rem;
        border: .07rem solid #5E454B;
        z-index: 1;
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
}



/*medium sizes---------------------------------------------------------*/
@media (min-width: 480px) {

    .project-wrapper-main-left {
        .project-image-left { 
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
    }

    // right

    .project-wrapper-main-right {

        .project-image-right { 
            max-width: 65%; 
        }
        .project-text-wrapper-right {
            max-width: 53%;
            margin: -.05% 0 0 0;

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
    }
}

/*large*-----------------------------------------------------*/

@media (min-width: 700px) { 

    .project-wrapper-main {
        display: flex;
        flex-direction: column;
        gap: 32rem;
        margin: 20rem 0 0 0;
    }
    .project-wrapper-main-left {
        align-items: center;
        .project-image-left {
            max-width: 70%;
        }
        .project-text-wrapper-left {
            width: 40%;
            margin: -0.05% 0 0 60%;
            position: absolute;
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
    }


// right
    .project-wrapper-main-right {
        align-items: center;
        .project-image-right {
            max-width: 70%;
        }
        .project-text-wrapper-right {
            width: 40%;
            margin: -0.05% 0 0 0;
            position: absolute;
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
    }

}
/*Desktop sizes*-----------------------------------------------------*/

@media (min-width: 900px) { 

    .project-wrapper-main {
        display: flex;
        flex-direction: column;
        gap: 36rem;
        margin: 20rem 0 0 0;
    }
    .project-wrapper-main-left {
        align-items: center;
        justify-content: space-between;
        .project-image-left {
            max-width: 60%;
        }
        .project-text-wrapper-left {
            max-width: 40%;
            margin: 0 0 0 42%;
            position: absolute;
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
    }

    // right
    .project-wrapper-main-right {
    
        justify-content: flex-end;
        display: flex;
        .project-image-right {
            max-width: 60%;
        }
        .project-text-wrapper-right {
            max-width: 40%;
            margin: 0 42% 0 0;
            position: absolute;
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
    }
}

</style>