function styleBauble(number, color, x, y){
  var id = "b" + number;
  var getBauble = document.getElementById(id);
  getBauble.style.background = color;
  getBauble.style.top = y + "px";
  getBauble.style.left = x + "px";
}

for(var i = 1; i <= 12; i++){
  if (i === 1 || i === 5 || i === 9 ){
    var bcolor = "pink";
      }
  else if (i === 2 || i === 6 || i === 10){
    var bcolor = "yellow";
      }
  else if (i === 3 || i === 7 || i === 11){
    var bcolor = "lightblue";
      }
  else if (i === 4 || i === 8 || i === 12){
    var bcolor = "purple";
      }
  var pos = [140, 110, 165, 90, 155, 230, 40, 100, 260, 50, 155, 255];
  styleBauble(i, bcolor, pos[i-1], i*38);

} // end of for loop

 styleBauble(13, "pink", 0, 455);
 styleBauble(13, "lightblue", 159, 264);
 styleBauble(14, "red", 100, 220);
 styleBauble(15, "red", 165, 330);
 styleBauble(16, "red", 65, 445);

function makeSnow(i){
  var flake = document.createElement("div");
  flake.setAttribute("id", "flake" + i);
  flake.setAttribute("class", "snowflake");
  var fa = document.createElement('i');
  fa.setAttribute("class", "fa fa-snowflake-o");
  fa.setAttribute("aria-hidden", "true");
  flake.appendChild(fa);
  document.querySelector("body").appendChild(flake);
  var fl = document.querySelector("#flake" + i);
  fl.style.left = i * 20 + "px";
}

for(var j = 0; j < 100; j++){
  makeSnow(j);
  var flakeDelay = document.querySelector("#flake" + j);
  var random = Math.random() * 15;
       flakeDelay.style.animationDelay = random + "s"
     
}
