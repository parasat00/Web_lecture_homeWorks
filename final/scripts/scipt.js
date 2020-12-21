function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdown = document.getElementById("myDropdown");
    
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
   
  }
}
const mybutton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
const scrollToTop = () => {
  const c = document.body.scrollTop || document.documentElement.scrollTop;
  if(c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 20);
  }
}
function toTop() {
  scrollToTop();
}
var ind = 0;
showTheSlide();
function showTheSlide() {
 var s = document.getElementsByClassName("slide-");
 for(let i = 0; i < s.length; i++) {
  s[i].style.display = "none";
 }
 ind++;
 if(ind > s.length) { ind = 1 }

 s[ind - 1].style.display = "block";
 setTimeout(showTheSlide, 5000);
}
