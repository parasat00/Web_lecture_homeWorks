front_img = document.getElementById("modal-view");
front_inner = document.getElementById("modal-inner");

    var cart_menu = document.querySelector(".cart_menu");
if(front_img != null) {
   front_img.addEventListener("click", doubleClicker);
}

var cart = [];
var count = 0;
var products = [];
class Products{
		constructor(name, url, price, category, text){
   this.name = name;
   this.url = url;
   this.price = price;
   this.category = category;
   this.text = text;
		}
	}
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
 if (request.readyState == 4 && request.status == 200) {
  
  function load() {
      
      
   let data = JSON.parse(request.responseText);

   // For shop.html
   var menu = document.querySelector(".products_menu");   
   if(menu != null) {

      for(let i = 0; i < data.products.length;i++) {

      products[i] = new Products(data.products[i].name,data.products[i].url, data.products[i].price, data.products[i].category, data.products[i].text);

    butt = document.createElement("button");
    butt.innerText = "Add to Card";
    butt.id = i;
    butt.addEventListener("click", buttonClicker);
    
     var content = document.createElement('div');
    content.classList.add("content");
    content.classList.add("c-"+i);
    var img_container = document.createElement('div');
    img_container.classList.add("img_container");
    var img = document.createElement('img');
    img.src = products[i].url;
    img.addEventListener("click", Clicker);
    img_container.appendChild(img);
    content.appendChild(img_container);
    var text_info = document.createElement('div');
    text_info.classList.add("text_info");
    var header = document.createElement("h3");
    header.innerText = products[i].name;
    var price = document.createElement("div");
    price.classList.add("price");
    price.innerText = products[i].price + "тг";
    text_info.appendChild(header);
    text_info.appendChild(price);
    var overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.appendChild(butt);
    text_info.appendChild(overlay);
    content.appendChild(text_info);
    menu.appendChild(content);
    }
    
   }

   // for index.html
   var slide_wrap = document.querySelector(".slide_wrapper"); 
   var track = document.querySelector("#track"); 
   
   if(slide_wrap != null) {
      for(let i = 0; i < data.products.length / 2;i++) {

         products[i] = new Products(data.products[i].name,data.products[i].url, data.products[i].price, data.products[i].category, data.products[i].text);

         butt = document.createElement("button");
         butt.innerText = "Add to Card";
         butt.id = i;
         butt.addEventListener("click", buttonClicker);
    
         var content = document.createElement('div');
         content.classList.add("slide_item");
         content.classList.add("content");
         
         content.classList.add("c-"+i);
         var img_container = document.createElement('div');
         img_container.classList.add("img_container");
         var img = document.createElement('img');
         img.src = products[i].url;
         img.addEventListener("click", Clicker);
         img_container.appendChild(img);
         content.appendChild(img_container);
         var text_info = document.createElement('div');
         text_info.classList.add("text_info");
         var header = document.createElement("h3");
         header.innerText = products[i].name;
         var price = document.createElement("div");
         price.classList.add("price");
         price.innerText = products[i].price + "тг";
         text_info.appendChild(header);
         text_info.appendChild(price);
         var overlay = document.createElement("div");
         overlay.classList.add("overlay");
         overlay.appendChild(butt);
         text_info.appendChild(overlay);
         content.appendChild(text_info);
         track.appendChild(content);
         
      }

   let position = 0;
   const toShow = 3;
   const toScroll = 1;
   const container = document.querySelector('.garage_4_slide');
   const prevbt = document.querySelector('.prev_slide');
   const nextbt = document.querySelector('.next_slide');
   const items = document.querySelectorAll('.slide_item');
   const itemCount = items.length;
   // const itemWidth = (track.clientWidth) / toShow;
   var itemWidth;

   if(container.clientWidth < 800 && container.clientWidth > 400) {
      itemWidth = (track.clientWidth) * 0.50;
      
   }
   else if(container.clientWidth <= 400) {
      itemWidth = (track.clientWidth) ;
   }
   else {
      itemWidth = (track.clientWidth) * 0.33;
   }
   
   const move = toScroll * itemWidth;

   items.forEach((item) => {
      // item.style.minWidth = `33%`;
      item.style.minWidth = `${itemWidth}px`;
   });
   nextbt.addEventListener('click', () => {
      const leftItems = itemCount - (Math.abs(position) + toShow * itemWidth) / itemWidth;
      position -= leftItems >= toScroll ? move : leftItems * itemWidth;
      setPosition();
      checkBtns();
   });
   prevbt.addEventListener('click', () => {
      const leftItems = Math.abs(position) / itemWidth;
      position += leftItems >= toScroll ? move : leftItems * itemWidth;
      setPosition();
      checkBtns();
   });
   const setPosition = () => {
      track.style.transform = `translateX(${position}px)`;
   };
   const checkBtns = () => {
      // console.log();
      prevbt.disabled = position === 0;
      nextbt.disabled = position <= -(itemCount - toShow) * itemWidth;
   };
   checkBtns();


   }
   
   
  }
  document.addEventListener('onload', load());
  
 }
};
request.open("GET", "db.json", true);
request.send();

function buttonClicker(event) {
   var place = event.currentTarget.id;
   if(cart.length === 0) {
      cart[count] = products[place];
      count++;
   }
   else{
      let b = true;
      for(let i = 0; i < cart.length; i++) {
         if(cart[i] === products[place]) {
            b = false;
            break;
         }
      }
      if(b) {
         cart[count] = products[place];
         count++;
      }
   }
   
   localStorage.setItem("carted", JSON.stringify(cart));
   
   // console.log(cart.length);
}


function Clicker(event) {
   
   for(let i = 0; i < products.length;i++)  {
    if(event.currentTarget.src.includes(products[i].url)) {

         const img = document.createElement("img");
         img.src = products[i].url;
         front_img.style.top = (window.pageYOffset-2) + 'px';
         document.body.classList.add('scroll-not');

         var container = document.createElement("div");
         var name = document.createElement("h1");
         name.innerText = products[i].name;
         var price = document.createElement("p");
         price.innerText = products[i].price;
         price.classList.add("price");
         var txt = document.createElement("textarea");
         txt.innerText = products[i].text;


         front_inner.appendChild(img);
         container.appendChild(name);
         container.appendChild(price);
         container.appendChild(txt);
         front_inner.appendChild(container);
         document.getElementById("topBtn").classList.add("hide");
         front_img.classList.remove('hide');
    }
  }
}
function doubleClicker() {
 document.body.classList.remove('scroll-not');
 front_img.classList.add('hide');
 front_inner.innerHTML = '';
 document.removeEventListener('click', doubleClicker);
 front_img.style.transform = '';
}

function categorise() {
 var boxes = document.querySelectorAll(".category_inputs");
 let b = false;
 for(let i = 0; i < boxes.length; i++) {
  if(boxes[i].checked) {
   b = true;
  }
 }
 if(!b) {
  for(let i = 0; i < products.length;i++)  {
   var c = document.querySelector(".c-"+i);
   if(c.classList.contains("hide")) {
    c.classList.remove("hide");
   }
  }
 }
 if(b) {
  for(let i = 0; i < products.length; i++) {
   document.querySelector(".c-"+i).classList.add("hide");
  }

  for(let i = 0; i < products.length; i++) {
   for(let j = 0; j < boxes.length; j++) {
    if(boxes[j].checked && products[i].category.toString().includes(boxes[j].value)) {
       document.querySelector(".c-"+i).classList.remove("hide");
    }
   }
  }
 }
}
