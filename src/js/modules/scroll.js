/////////////////////////////////////////////

export const scrollFunc = () => {
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
