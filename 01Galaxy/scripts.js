function addElement(num) { 
   // create a new star element 
  var newStar = document.createElement("div"); 
  // add an id
  var id = "star" + num;
  newStar.setAttribute("id", id);
  //create the svg and add to the newStar
  var i = document.createElement("i");
  var iClass  = "fa fa-star";
  i.setAttribute("class", iClass);
  newStar.appendChild(i);
    // add the newly created element and its content into the DOM 
  var starWrapper = document.getElementById("starWrapper");
  starWrapper.appendChild(newStar);
}

function styleNewElement(num){
  addElement(num);
   // set variables for position and size
  //Math.random() * (max - min) + min
  var size = Math.floor(Math.random() * ((20-6) + 6)) + "px";
  var positionTop = Math.floor((Math.random() * 1500) + 1) + "px";
  var positionLeft = Math.floor((Math.random() * 1320) + 1) + "px";
  var idStyle = "star" + num;
//style the div
  var starStyle = document.getElementById(idStyle);
  starStyle.style.position = "absolute";
  starStyle.style.top = positionTop;
  starStyle.style.left = positionLeft;
  starStyle.style.fontSize = size;
}

function addStars(starNum){
   for(var i = 0; i < starNum; i++){
    styleNewElement(i);
  
 }
for(var j = 0; j < (starNum/4); j++){
  var random = Math.round(Math.random() * starNum);
  var starSpin = document.getElementById("star" + random).children;
  starSpin[0].classList.add("fa-spin");
}
}

addStars(300);

function starGen (e){
  e.preventDefault();
  document.getElementById("starWrapper").innerHTML = "";
  var value = document.getElementById("starRange").value;
  addStars(value);
}
document.getElementById("submitButton").addEventListener("click", starGen);
