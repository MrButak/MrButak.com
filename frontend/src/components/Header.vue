<template>

<header class="menu">
      <div class="menu-wrap">
          <div class="icon-wrapper">
            <a><img src="../assets/icons/github-icon.svg" class="mobile-header-icon" alt="github-icon"></a>
            <a><img src="../assets/icons/email-icon.svg" class="mobile-header-icon" alt="github-icon"></a>
            <a><img src="../assets/icons/linkedin-icon.svg" class="mobile-header-icon" alt="github-icon"></a>
          </div>
          <input type="checkbox" id="checkbox">
          <nav>
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer">Resume</a></li>
              </ul>
          </nav>
          <label id="hamburg-icon" class="menu-icon" for="checkbox">
              <HamburgMenu />
          </label>
      </div>
  </header>

</template>


<script setup>

import { ref, onMounted, computed } from 'vue';
import HamburgMenu from '../components/svg/HamburgMenu.vue'
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

<style>

/*mobile first*/

/*footer start*/
.footerWrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* grid-template-rows: auto 1fr auto; */
}
.footerTop {
    background-color: #2d2d2d;
    color: white;
}
.footerBottom {
    background-color: #171717;
    color: white;
}
/*footer end*/s

/*Header start*/
header {
    /* background-color: #FF9A76; */
    padding: 10px 0;
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    /* is there a better way to push to footer to the bottom of view port? */
    /* margin-bottom: 100vh; */
}
.menu-wrap {
    display: flex;
    justify-content: space-between;
    padding: 0px 35px 0px 0;
    height: 60px;
    background-color: #7B3C3C;
}
.icon-wrapper {
    display: flex;
    gap: 30px;
    
    padding: 11px 0 0 35px;
}
#hamburg-icon {
    padding: 10px 0 0 20px;
}
.mobile-header-icon {
    width: 38px;
    
}
nav {
    position: absolute;
    background-color: #68BDE1;
    top: 60px;
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
    color: #7B3C3C;
    font-weight: 700;
    text-decoration: none;
    letter-spacing: 0.05em;
}
nav ul li a:hover, nav ul li a:focus {
    color: #DB5F29;
}
#checkbox {
    display: none;
}
#checkbox:checked ~ nav ul {
    max-height: 190px;
    padding: 15px 0;
    transition: all 0.5s;
    border: 1px solid #DB5F29;
}
/*Header end*/




/*Tablet sizes---------------------------------------------------------*/
@media (min-width: 480px) {

    /*Header start*/
    .menu-wrap {
        height: 60px;
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
        top: -7px;
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
        color: #F0F0E4;
    }
    /*Header end*/
}

</style>