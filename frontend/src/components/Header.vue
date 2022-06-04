<template>

<header class="menu">
      <div class="menu-wrap">
          <div class="icon-wrapper">
            <a href="https://github.com/MrButak" target="_blank" rel="noreferrer noopener"><GithubIcon class="mobile-header-icon"/></a>
            <a href="mailto: mspence5555@gmail.com" target="_blank" rel="noreferrer noopener"><EmailIcon class="mobile-header-icon"/></a>
            <a href="https://www.linkedin.com/in/matthew-w-spence" target="_blank" rel="noreferrer noopener"><LinkedinIcon class="mobile-header-icon"/></a>
          </div>
          <input type="checkbox" id="checkbox">
          <nav>
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="../assets/misc/matthew-spence-resume.pdf" target="_blank" rel="noopener noreferrer" download>Resume</a></li>
              </ul>
          </nav>
          <label id="hamburg-icon" class="menu-icon" for="checkbox">
              <HamburgMenu />
          </label>
      </div>
  </header>

</template>


<script setup>

import HamburgMenu from '../components/svg/HamburgMenu.vue';
import GithubIcon from '../components/svg/GithubIcon.vue';
import EmailIcon from '../components/svg/EmailIcon.vue';
import LinkedinIcon from './svg/LinkedinIcon.vue';

</script>

<style lang="scss">
/* light #E9C891  lighter #f0f0e4 orange #D06224 dark-rusty #AE431E olive #8A8635 */
/* darker rust #7B3C3C */

/*mobile first*/


.menu-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 2rem;
    height: 5rem;
    background-color: #5E454B;
    width: 100%;
}
.icon-wrapper {
    display: flex;
    gap: 30px;
}
#hamburg-icon {
    padding: 10px 0 0 20px;
    fill: #CEE5D0;
    width: 4rem;
}
.mobile-header-icon {
    fill: #CEE5D0;
    
}
.mobile-header-icon:hover, .mobile-header-icon:focus {
    fill: #D06224;
}
nav {
    z-index: 2;
    position: absolute;
    background-color: #CEE5D0;
    top: 80px;
    left:0;
    width: 100%; 
}
nav ul {
    list-style-type: none;
    max-height: 0px;
    overflow: hidden;
    transition: all .2s;
}
nav ul li {
    padding: 0 15px;
}
nav ul li a {
    display: inline-block;
    padding: 12px;
    color: #5E454B;
    font-weight: 700;
    text-decoration: none;
    letter-spacing: 0.05em;
}
nav ul li a:hover, nav ul li a:focus {
    color: #C36839;
}
#checkbox {
    display: none;
}
#checkbox:checked ~ nav ul {
    max-height: 190px;
    padding: 15px 0;
    transition: all 0.5s;
    border: 1px solid #5E454B;
}
/*Header end*/




/*Tablet sizes---------------------------------------------------------*/
@media (min-width: 480px) {

    /*Header start*/
    .menu-wrap {
        height: 60px;
        width: 100%
    }
    /* nav {
        top: 60px;
    } */
    #hamburg-icon {
        padding: 6px 0 0 20px;
    }
    
}
/*Desktop sizes*-----------------------------------------------------*/

@media (min-width: 900px) { 

    /*Header start*/
    
    .menu-icon {
        display: none;
    }
    .icon-wrapper {
        display: flex;
        gap: 40px;
        padding: 11px 0 0 0;
        margin: 0 0 0 6vw;
    }
    nav {
        top: 8px;
        background-color: transparent;
    }
    nav ul {
        max-height: 178px;
        padding: 12px 0 0 0;;
        margin: 0 6vw 0 0;
        align-items: center;
        text-align: right;
    }
    nav ul li {
        display: inline-flex;
        padding-left: 20px;
    }
    nav ul li a {
        color: #CEE5D0;
    }
    /*Header end*/
}

</style>