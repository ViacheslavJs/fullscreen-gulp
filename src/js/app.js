'use strict'
//console.log('Привет!');

import * as vjsFunctions from "./modules/functions.js"
vjsFunctions.isWebp();

//import { scrollFunc } from "./modules/scroll.js";
//scrollFunc();


// TODO - or (icon show/animation)
const socialNetworkIcon = document.querySelector('.social-mobile__base-icon');
const link = document.querySelectorAll('.social-mobile__link');
 
link.forEach(w => {
  socialNetworkIcon.addEventListener('click', showIcons);
  function showIcons() {
    w.classList.toggle('icons-show');
    socialNetworkIcon.classList.toggle('base-icon-hidden');
      
    // TODO - optional - hide icons when clicked anywhere
    document.addEventListener('click', (event) => {
      const classIs = event.target.classList.contains('blind-click');
      //console.log(classIs);
      const clickedClass = event.target.className;
      //console.log(clickedClass); 
      if (classIs == false) {
        w.classList.remove('icons-show');
        socialNetworkIcon.classList.remove('base-icon-hidden');      
      }
    });    
  } 
     
});


/*
// TODO - or (self-disappearance icon show/animation)
// connect 'cursor: default' property if using this js block
const socialNetworkIcon = document.querySelector('.social-mobile__base-icon');
const link = document.querySelectorAll('.social-mobile__link');
 
link.forEach(w => {
  socialNetworkIcon.addEventListener('click', showIcons);
  function showIcons() {
    w.classList.add('icons-show');
    socialNetworkIcon.classList.add('cursor-inactive');
    socialNetworkIcon.removeEventListener('click', showIcons);
    setTimeout( function() {
      w.classList.remove('icons-show');
      socialNetworkIcon.classList.remove('cursor-inactive');
      socialNetworkIcon.addEventListener('click', showIcons);
    }, 7000); 
  }    
});
*/

/////////////////////////////////////////////

// TODO - menu show/hidden
const iconMenu = document.querySelector('.menu-icon');

iconMenu.addEventListener('click', showMenu);
function showMenu() {
  iconMenu.classList.toggle('fa-times');
  const menu = document.querySelector('.menu');
  menu.classList.toggle('menu-mobile'); 
    
  // TODO - optional - hide menu when clicked anywhere
  document.addEventListener('click', (event) => {
    const classIs = event.target.classList.contains('blind-click');
    //console.log(classIs);
    const clickedClass = event.target.className;
    //console.log(clickedClass); 
    if (classIs == false) {
      iconMenu.classList.remove('fa-times');
      menu.classList.remove('menu-mobile');      
    }
  });  
    
}    

/////////////////////////////////////////////

try {

  const screenBlock = document.getElementById('screen-block'); 
  //console.log(screenBlock);
  if (screenBlock !== null) {

    // TODO - scroll animation
    function scrollDown() {
      const screens = document.querySelectorAll('.page__screen');
      screens.forEach(e => {
        e.classList.remove('up');
        e.classList.add('down');  
        //console.log(e);
      }); 
    }

    function scrollUp() {
      const screens = document.querySelectorAll('.page__screen');
      screens.forEach(e => {
        e.classList.remove('down');
        e.classList.add('up');  
        //console.log(e);
      }); 
    }

    //scrollDown();
    //scrollUp();
    const btnUp = document.querySelector('.prev');
    const btnDown = document.querySelector('.next');

    btnUp.addEventListener('click', function() {
      scrollDown();
    });

    btnDown.addEventListener('click', function() {
      scrollUp();
    });

    /////////////////////////////////////////////

    // TODO - slider/screen change
    const btn1 = document.querySelector('.prev');
    const btn2 = document.querySelector('.next');

    /* // TODO - syntax variant:
    btn1.addEventListener('click', () => plusSlides(-1) );
    btn2.addEventListener('click', () => plusSlides(1) );
    */

    // TODO - syntax variant:
    btn1.addEventListener('click', function() {
      plusSlides(-1);
    });

    btn2.addEventListener('click', function() {
      plusSlides(1);
    });

    btn1.addEventListener('click', function() {
      currentSlide(imagesIndex)
    });

    btn2.addEventListener('click', function() {
      currentSlide(imagesIndex)
    });


    let imagesIndex = 1;
    viewSlides(imagesIndex); 

    function plusSlides(num) {
      viewSlides(imagesIndex += num); 
    }

    function currentSlide(num) {
      viewSlides(imagesIndex = num); 
    }

    function viewSlides(num) {
      const img = document.getElementsByClassName('page__screen');
      const dots = document.getElementsByClassName("controls-dot-container__dot");
      let i;
 
      if (num > img.length) {
      imagesIndex = 1
      }      
  
      if (num < 1) {
        imagesIndex = img.length
      }
  
      for (i = 0; i < img.length; i++) {
          img[i].style.display = "none";  
      }
  
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
    
      img[imagesIndex-1].style.display = "block";
      dots[imagesIndex-1].className += " active";  
  
    }
    
  }
}

catch(err) {
  //console.log(err.name, err.message);
}




