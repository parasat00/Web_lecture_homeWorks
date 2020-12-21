var cart_window = document.querySelector(".cart_message");
var carted = JSON.parse(localStorage.getItem("carted")); 
document.addEventListener('onload', load());


function load() {
 var w_total = document.getElementById("w_total");
 if(carted.length === 0) {
  document.querySelector(".empty_cart").classList.remove("hide");
  w_total.classList.add("hide");
 }
 else {
  document.querySelector(".empty_cart").classList.add("hide");
  w_total.classList.remove("hide");
  var total_price = 0;
  
  for(let i = 0; i < carted.length; i++) {
   var container = document.createElement("div");
   container.classList.add("no_empty");
   container.classList.add("--"+i);
   var image = document.createElement("img");
   image.src = carted[i].url;
   var div = document.createElement("div");
   var head = document.createElement("h1");
   head.innerText = "Name: " + carted[i].name;
   var p = document.createElement("p");
   total_price += carted[i].price;
   p.innerText = "Price: " + carted[i].price + "тг";
   var txt = document.createElement("textarea");
   txt.innerText = carted[i].text;
   var button = document.createElement("button");
   button.innerText = "Remove";
   button.addEventListener("click", removeIt);
   button.id = i;


   document.querySelector("#here").innerText = total_price + "тг";
   container.appendChild(image);
   div.appendChild(head);
   div.appendChild(p);
   div.appendChild(txt);
   div.appendChild(button);
   container.appendChild(div);
   cart_window.appendChild(container);
  }
 }
}
function removeIt(event) {
 let avoid = event.currentTarget.id;
 var toDelete = document.querySelector(".--"+avoid);
 cart_window.removeChild(toDelete);
 var temp = [];
 let j = 0;
 for(let i = 0; i < carted.length-1; i++) {
  if(i === avoid) {
   j+=1;
   temp[i] = carted[j]
  }
  else {
   temp[i] = carted[j];
   j++;
  }
 }
 carted = temp;
 total_price = 0;
 for(let k = 0; k < carted.length; k++) {
  total_price += carted[k].price;
 }
 document.querySelector("#here").innerText = total_price + "тг";


 if(carted.length === 0) {
  document.querySelector(".empty_cart").classList.remove("hide");
  w_total.classList.add("hide");
 }
 localStorage.setItem("carted", JSON.stringify(carted));
 
}