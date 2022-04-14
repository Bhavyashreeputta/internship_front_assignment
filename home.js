let navLinks = document.querySelector('#navLinks')

function showMenu(){
  navLinks.style.left='0';
}

function hideMenu(){
  navLinks.style.left='-220px'
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slide = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slide.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slide.length}
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slide[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function scrollleft() {
    let left = document.querySelector(".grid-view");
    left.scrollBy(-700, 0)
}

function scrollright() {
    let right = document.querySelector(".grid-view");
    right.scrollBy(700, 0)
}

function regionscrollleft() {
  let left = document.querySelector(".region-grid-view");
  left.scrollBy(-400, 0)
}

function regionscrollright() {
  let right = document.querySelector(".region-grid-view");
  right.scrollBy(400, 0)
}

let btn = document.querySelector('#btn')

function leftClick() {
  btn.style.left = '45px'
}

function rightClick() {
  btn.style.left = '80px'
}