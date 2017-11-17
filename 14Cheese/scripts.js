var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
var light = "rgb(255, 219, 77)";
var dark = "orange";
var outline = "rgb(204, 82, 0)";
function mainCheese(){
c.beginPath();
c.moveTo(150,150);
c.lineTo(350,150);
c.arc(350,200,10,1.5,1.5*Math.PI);
c.lineTo(350,275);
c.lineTo(220,275);
c.arc(220,275,10,3.2,2*Math.PI);
c.lineTo(150,275);
c.lineTo(150,150);
c.closePath();
c.fillStyle = light;
c.fill();
c.lineWidth = 3;
c.strokeStyle = outline;
c.stroke();
}
function topCheese(){
  c.beginPath();
c.moveTo(150,150);
c.lineTo(280,120);
c.lineTo(350,150);
c.fillStyle = "orange";
c.fill();
c.strokeStyle = outline;
c.stroke();
}

function eye(x, y){
  c.beginPath();
  c.arc(x,y,10,0,2*Math.PI);
  c.fillStyle = "black"
  c.fill();
  c.beginPath();
  c.arc(x-4,y-3,4,0,2*Math.PI);
  c.fillStyle = "white"
  c.fill();
  c.beginPath();
  c.arc(x+2,y+2,2,0,2*Math.PI);
  c.fillStyle = "white"
  c.fill();
  

}
function blink(x,y){
  //eye
  c.beginPath();
  c.arc(x,y,9,0,1*Math.PI);
  c.strokeStyle = "black"
  c.stroke();
 //eyelash1
  c.beginPath();
  c.moveTo(x+10,y);
  c.lineTo(x+15,y+5);
  c.closePath();
  c.stroke();
  //eyelash2
  c.beginPath();
  c.moveTo(x+6,y+5);
  c.lineTo(x+10,y+10);
  c.closePath();
  c.stroke();
  //eyelash3
  c.beginPath();
  c.moveTo(x,y+10);
  c.lineTo(x,y+15);
  c.closePath();
  c.stroke();
  //eyelash4
  c.beginPath();
  c.moveTo(x-6,y+5);
  c.lineTo(x-10,y+10);
  c.closePath();
  c.stroke();
  //eyelash5
  c.beginPath();
  c.moveTo(x-10,y);
  c.lineTo(x-15,y+5);
  c.closePath();
  c.stroke();
};
function restOfFace(){
  c.beginPath();
  c.arc(250,225,10,0,1*Math.PI);
  c.strokeStyle = "red";
  c.stroke();
  c.beginPath();
  function cheek(x){
  c.arc(x,232,5,0,2*Math.PI);
  c.fillStyle = "hotPink";
  c.fill();
  }
  cheek(195);
  cheek(198);
  cheek(300);
  cheek(303);

}
function cheeseHoles(x,y,diam,color){
  c.beginPath();
  c.arc(x,y,diam,0,2*Math.PI);
  c.fillStyle = color;
  c.fill();
}



function animate(){
  var random = Math.random() * 100;
  mainCheese();
  topCheese();
  cheeseHoles(350,200,8,"white");
  cheeseHoles(220,275,8,"white");
  cheeseHoles(210,175,8,dark);
  cheeseHoles(205,185,3,dark);
  cheeseHoles(330,190,5,dark);
  cheeseHoles(275,250,6,dark);
  cheeseHoles(335,260,7,dark);
  cheeseHoles(160,160,6,dark);
  cheeseHoles(170,250,8,dark);
  cheeseHoles(280,130,7,light);
  cheeseHoles(225,140,4,light);
  cheeseHoles(300,140,2,light);
  if(random < 10){
     blink(215,225);
     blink(284,225);
     }
  else{
     eye(215,225);
     eye(284,225);
}
  restOfFace();

}
animate();
setInterval(animate, 500);     



