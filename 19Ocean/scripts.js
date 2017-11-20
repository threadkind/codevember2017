var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

function reload(){
  function bubble(x, y, size) {
   c.beginPath();
   c.arc(x,y,size,0,2*Math.PI);
  c.strokeStyle = "white";
   c.stroke();
}

var bubs = {
  1: {},
  2: {},
  3: {},
  4: {},
  5: {},
  6: {},
  7: {},
  8: {},
  9: {},
  10: {},
}
for (var i = 1; i <= 10; i++){
  bubs[i].x = Math.random() * 500;
  bubs[i].y = (Math.random() * 100) + 550;
  bubs[i].size = Math.random() * 50;

}

function bubbleMove(){
  c.clearRect(0,0,500,500);
  //console.log('hello');
  for (var j = 1; j <= 10; j++){
  bubble(bubs[j].x, bubs[j].y, bubs[j].size);
  bubs[j].y -= 10;
//   //bubs[j].size -= 0.2;
}
}
setInterval(bubbleMove, 100);}

setInterval(reload, 9000);
