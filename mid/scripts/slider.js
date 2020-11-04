var indexOfSlide = 0;
showTheSlide();
function showTheSlide() {
 var slides = document.getElementsByClassName("slide");
 var dots = document.getElementsByClassName("dot");
 for(let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
 }
 indexOfSlide++;
 if(indexOfSlide > slides.length) { indexOfSlide = 1 }
 for(let i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
 }
 slides[indexOfSlide - 1].style.display = "block";
 dots[indexOfSlide - 1].className += " active";
 setTimeout(showTheSlide, 5000);
}