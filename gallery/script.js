const MANGA_PAGES = [
 'manga/strtpage.jpg', 'manga/1.jpg', 'manga/2.jpg', 'manga/3.jpg', 'manga/4.jpg', 'manga/5.jpg', 'manga/6.jpg', 'manga/7.jpg', 'manga/8.jpg', 'manga/9.jpg', 'manga/10.jpg', 'manga/11.jpg', 'manga/12.jpg', 'manga/13.jpg', 'manga/14.jpg', 'manga/15.jpg'
];
var initialX;
var lastX;
const manga_album = document.querySelector('#manga-album');
const front_img = document.querySelector('#front-img');
front_img.addEventListener("click", doubleClicker);
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
 front_img.appendChild(img);
 front_img.classList.remove('hide');
 document.addEventListener('keyup', onUpKey);
}
function click(string) {
 const img = createIMG(string);
 front_img.style.top = window.pageYOffset + 'px';
 document.body.classList.add('scroll-not');
 front_img.appendChild(img);
 front_img.classList.remove('hide');
 document.addEventListener('keyup', onUpKey);
 front_img.style.transform = '';
}
function doubleClicker() {
 document.body.classList.remove('scroll-not');
 front_img.classList.add('hide');
 front_img.innerHTML = '';
 document.removeEventListener('keyup', onUpKey);
 front_img.style.transform = '';
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
  event.target.setPointerCapture(event.pointerId);
  initialX = event.clientX;
}
function endingX(event) {
  event.preventDefault();
  event.target.setPointerCapture(event.pointerId);
  lastX = event.clientX;
}
function dragger(event) {
  event.preventDefault();
  var value = lastX - initialX;
  if(value > 100) {
    toRight();
  } 
  else if(value < -100) {
    toLeft();
  }
}