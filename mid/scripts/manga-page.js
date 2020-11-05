AOS.init();
const MANGA_PAGES = [
 'images/manga/strtpage.jpg', 'images/manga/1.jpg', 'images/manga/2.jpg', 'images/manga/3.jpg', 'images/manga/4.jpg', 'images/manga/5.jpg', 'images/manga/6.jpg', 'images/manga/7.jpg', 'images/manga/8.jpg', 'images/manga/9.jpg', 'images/manga/10.jpg', 'images/manga/11.jpg', 'images/manga/12.jpg', 'images/manga/13.jpg', 'images/manga/14.jpg', 'images/manga/15.jpg'
];
var initialX;
var lastX;
const barsButton = document.getElementById("barMen");
var nav_list = document.getElementById("navigation-l");
barsButton.addEventListener("click", showNav);
const mybutton = document.getElementById("topBtn");
const Xbutton = document.getElementById("x");
const ArrowRight = document.getElementById("ArrowRight");
const ArrowLeft = document.getElementById("ArrowLeft");
ArrowRight.addEventListener("click", RightClick);
ArrowLeft.addEventListener("click", LeftClick);
window.onscroll = function() {scrollFunction()};
const manga_album = document.querySelector('#manga-album');
const front_img = document.querySelector('#front-img');
front_img.addEventListener("touchmove", dragger);
front_img.addEventListener("pointerdown", startingX);
front_img.addEventListener("pointerup", endingX);
for(let i = 0; i < MANGA_PAGES.length; i++) {
 const page = MANGA_PAGES[i];
 const img = createIMG(page);
 img.addEventListener("click", Clicker);
 manga_album.appendChild(img);
}
function createIMG(source) {
 const img = document.createElement('img');
 img.src = source;
 return img;
}

function Clicker(event) {
 const img = createIMG(event.currentTarget.src);
 front_img.style.top = window.pageYOffset + 'px';
 document.body.classList.add('scroll-not');
 front_img.appendChild(ArrowLeft);
 front_img.appendChild(img);
 front_img.appendChild(ArrowRight);
 front_img.appendChild(Xbutton);
 img.addEventListener("click", doubleClicker);
 ArrowRight.classList.remove('hide');
 ArrowLeft.classList.remove('hide');
 front_img.classList.remove('hide');
 Xbutton.classList.remove('hide');
 document.addEventListener('keyup', onUpKey);
 mybutton.classList.add('hide');
}
function click(string) {
 const img = createIMG(string);
 front_img.style.top = window.pageYOffset + 'px';
 document.body.classList.add('scroll-not');
 front_img.appendChild(ArrowLeft);
 front_img.appendChild(img);
 front_img.appendChild(ArrowRight);
 front_img.appendChild(Xbutton);
 ArrowRight.classList.remove('hide');
 ArrowLeft.classList.remove('hide');
 front_img.classList.remove('hide');
 Xbutton.classList.remove('hide');
 document.addEventListener('keyup', onUpKey);
 front_img.style.transform = '';
 mybutton.classList.add('hide');
}
function doubleClicker() {
 document.body.classList.remove('scroll-not');
 ArrowRight.classList.add('hide');
 ArrowLeft.classList.add('hide');
 front_img.classList.add('hide');
 Xbutton.classList.add('hide');
 front_img.innerHTML = '';
 document.removeEventListener('keyup', onUpKey);
 front_img.style.transform = '';
 mybutton.classList.remove('hide');
}
function onUpKey(event) {
 if(event.key === "ArrowRight" || event.key === "ArrowUp") {
  toRight();
 }
 else if(event.key === "ArrowLeft" || event.key === "ArrowDown") {
  toLeft();
 }
 else if(event.key === "Escape") {
  doubleClicker();
 }
}
function toRight() {
  var index;
 for(let i = 0; i < MANGA_PAGES.length; i++) {
  if(front_img.innerHTML.includes(MANGA_PAGES[i])) {
   index = i;
   front_img.style.transform = '';
   break;
  }
 }
 doubleClicker(index);
 if(index !== MANGA_PAGES.length -1) {
   click(MANGA_PAGES[index+1]);
   index++;
  }
}
function toLeft() {
  var index;
 for(let i = 0; i < MANGA_PAGES.length; i++) {
  if(front_img.innerHTML.includes(MANGA_PAGES[i])) {
   index = i;
   front_img.style.transform = '';
   break;
  }
 }
  doubleClicker(index);
 if(index !== 0) {
    click(MANGA_PAGES[index-1]);
    index--;
  }
}
function startingX(event) {
  event.preventDefault();
  initialX = event.clientX;
}
function endingX(event) {
  event.preventDefault();
  lastX = event.clientX;
}
function dragger(event) {
  event.preventDefault();
  var value = lastX - initialX;
  if(value > 200) {
    toLeft();
    
  } 
  else if(value < -200) {
    toRight();
  }
}
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
    window.scrollTo(0, c - c / 7);
  }
}
function toTop() {
  scrollToTop();
}
function LeftClick() {
  toLeft();
}
function RightClick() {
  toRight();
}
function showNav() {
  if(barsButton.style.display === "block") {
    nav_list.nav_list.classList.add('hide');
  }
  if(nav_list.classList.contains('hide')) {
    nav_list.classList.remove('hide');
  }
  else{
    nav_list.classList.add('hide');
  }
}