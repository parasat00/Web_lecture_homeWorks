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
    console.log("i am here");
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
