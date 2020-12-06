var indexOfSlide = 1;
showSlides(indexOfSlide);

function toSlide(n) {
  showSlides(indexOfSlide += n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {indexOfSlide= 1}    
  if (n < 1) {indexOfSlide = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[indexOfSlide-1].style.display = "block";  
}
// var indexOfSlide = 0;
// showTheSlide();
// function showTheSlide() {
//  var slides = document.getElementsByClassName("slide");
//  for(let i = 0; i < slides.length; i++) {
//   slides[i].style.display = "none";
//  }
//  indexOfSlide++;
//  if(indexOfSlide > slides.length) { indexOfSlide = 1 }
//  slides[indexOfSlide - 1].style.display = "block";
//  setTimeout(showTheSlide, 5000);
// }
