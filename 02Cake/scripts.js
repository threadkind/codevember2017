var canvas = document.querySelector("#canvas1");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var width = window.innerWidth;
var height = window.innerHeight;



var c = canvas.getContext('2d');



// cake
      c.scale(3, 0.5);

//plate
 c.beginPath();
      c.arc(208, 750, 75, 0, 2 * Math.PI, false);
      c.fillStyle =  '#db70b8';
      c.fill();
      c.stroke
      c.strokeStyle = "#8f246b";
      c.stroke();

//main part of cake
c.beginPath();
c.rect(158, 395, 100, 350);
c.fillStyle = "pink";
c.fill();
c.strokeStyle = "hotpink";
c.stroke();
//top of cake
      c.beginPath();
      c.arc(208, 393, 50, 0, 2 * Math.PI, false);
      c.fillStyle = 'pink';
      c.fill();
      c.strokeStyle = "hotpink";
      c.stroke();
// bottom of cake
      c.beginPath();
      c.arc(208, 750, 50, 0, 2 * Math.PI, false);
      c.fillStyle = 'pink';
      c.fill();
      //bottom of cake stroke
      c.beginPath();
      c.arc(208.5, 750, 50, 0, 1 * Math.PI, false);
      c.strokeStyle = "hotpink";
      c.stroke();
// // over plate
// c.beginPath();
// c.rect(159.2, 400, 98, 175);
// c.fillStyle = "purple";
// c.fill();
// c.strokeStyle = "purple";
// c.stroke();
// candle
c.scale(0.5, 3);
    c.beginPath();
    c.moveTo(416, 70);
    c.lineTo(416, 80);
    //c.strokeStyle = black;
    c.stroke();
c.beginPath();
    c.arc(416, 84, 6, 0, 2 * Math.PI, false);
    c.fillStyle = 'purple';
    c.fill();
    c.beginPath();
    c.rect(410, 80, 12, 50);
    c.fillStyle = "purple";
    c.fill();
    c.beginPath();
    c.arc(416, 126, 6, 0, 2 * Math.PI, false);
    c.fillStyle = 'purple';
    c.fill();
//`flame`
function drawFlame(endWidth1, endHeight1){
  c.clearRect(400,41,50,30);
   c.beginPath();
      c.moveTo(416, 70);
      // var endWidth1 = 422; //410-422  range 12
      // var endHeight1 = 48; //42-48    range 5
      c.bezierCurveTo(405, 70, 405, 60, endWidth1, endHeight1);
      c.bezierCurveTo(427, 60, 427, 70, 416, 70);
      // complete custom shape
      c.closePath();
      c.strokeStyle = 'red';
      c.stroke();
      c.fillStyle = "yellow";
      c.fill();
  
  c.beginPath();
      c.moveTo(416, 70);
      c.bezierCurveTo(412, 70, 405, 60, endWidth1, endHeight1+14);
      c.bezierCurveTo(420, 60, 427, 65, 416, 70);
      // complete custom shape
      c.closePath();
      c.fillStyle = "red";
      c.fill();
}
drawFlame(422, 48);
drawFlame(410, 42);

  var x = 416;
  var y = 45;
setInterval(function generateNewVals(){
  x = Math.round(Math.random()*(422-410+1) + 410);
  y = Math.round(Math.random()*(48-42+1) + 42);
}, 100);

function animate(){
  requestAnimationFrame(animate);
  drawFlame(x, y);
}
animate();
     
