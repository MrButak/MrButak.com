<template>

<header class="menu">
      <div class="menu-wrap">
          <!-- <img src="prison-ptsd-logo-400x124.png" class="logo-img" alt="Logo">
          <img src="prison-ptsd-logo-400x124-mobile.png" class="mobile-logo-img" alt="Logo"> -->
          <input type="checkbox" id="checkbox">
          <nav>
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Faqs</a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer">Join Us</a></li>
              </ul>
          </nav>
          <label id="hamburg-icon" class="menu-icon" for="checkbox">
              <HamburgMenu />
          </label>
      </div>
  </header>

</template>


<script async setup>

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
    height: 50px;
    background-color: #DB5F29;
}
#hamburg-icon {
    padding: 10px 0 0 20px;
}


nav {
    position: absolute;
    background-color: #F0F0E4;
    top: 33px;
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
    color: black;
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
@media (min-width: 768px) {

    /*Header start*/
    
    .menu-icon {
        display: none;
    }
    nav {
        top: -10px;
        background-color: transparent; 
    }
    nav ul {
    max-height: 178px;
    padding: 12px 25px 0 0;
    
    align-items: center;
    text-align: right;
    
    }
    nav ul li {
        display: inline-flex;
        padding: 0px;  
    }
    #checkbox:checked ~ nav ul {
        padding-top: 55px;
        border: none;
    }
    nav ul li a {
        color: #F0F0E4;
    }
    /*Header end*/
}
/*Desktop sizes*-----------------------------------------------------*/

@media (min-width: 1200px) { 

    /*Header start*/
    
    .menu-icon {
        display: none;
    }
    nav {
        top: -10px;
        background-color: transparent;
    }
    nav ul {
        max-height: 178px;
        padding: 12px 150px 0 0;;
        
        align-items: center;
        text-align: right;
    }
    nav ul li {
        display: inline-flex;
        padding-left: 20px;
    }
    
    .logo-img {
        max-width: 100%;
        height: auto;
        padding-left: 150px;
    }
    #checkbox:checked ~ nav ul {
        padding-top: 55px;
        padding-right: 150px;
        border: none;
    }
    /*Header end*/
}

</style>