var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

c.beginPath();
c.rect(0, 350, 500, 150);
c.fillStyle = "rgb(0, 153, 51)";
c.fill();
c.closePath();

function spokes(x, y, theta, diam){
  //var theta = 2*3.141592;
  var rCosTheta = diam*Math.cos(theta);
  var rSinTheta = diam*Math.sin(theta);
  
  c.beginPath();
  c.moveTo(x+rCosTheta,y+rSinTheta);
  c.lineTo(x, y);
  c.closePath();
  c.strokeStyle = "rgb(89, 89, 89)";
  c.stroke();
}
function createSpokes(x, y, diam, numberOfSpokes){
  for(var spoke = 1; spoke <= numberOfSpokes; spoke++){
  var num = (2 / numberOfSpokes) * spoke;
  var pi = num * Math.PI;
  //var th = pi / spoke;
      spokes(x, y, pi, diam);
  }
}
createSpokes(310, 245, 149, 36);
createSpokes(100, 355, 40, 20);

//right pedal attachment
c.beginPath();
c.moveTo(355,225);
c.lineTo(310, 245);
c.closePath();
c.lineWidth = 2;
c.strokeStyle = "grey";
c.stroke();

function drawCircle(x, y, diam, color){
c.beginPath();
c.arc(x,y,diam,0,2*Math.PI);
c.closePath();
c.strokeStyle = color;
c.lineWidth = "3";
c.stroke();
}

drawCircle(100, 355, 40, "black");
drawCircle(100, 355, 5, "black");
c.fillStyle = "black";
c.fill();
drawCircle(310, 245, 150, "black");
drawCircle(310, 245, 10, "black");
c.fill();

//line up to handlebars
c.beginPath();
c.moveTo(310, 245);
c.lineTo(310, 60);
c.closePath();
c.stroke();

//line up to seat
c.beginPath();
c.moveTo(210, 125);
c.lineTo(210, 100);
c.closePath();
c.stroke();

//small wheel attachment
c.beginPath();
c.moveTo(100,355);
c.bezierCurveTo(120,140,250,100,310,70);
c.stroke();

//pedal left attachment
c.beginPath();
c.moveTo(250,256);
c.lineTo(310, 245);
c.closePath();
c.strokeStyle = "grey";
c.stroke();

//left pedal
c.beginPath();
c.rect(250,250, 30, 12);
c.closePath();
c.fill();

//right pedal
c.beginPath();
c.rect(340,220, 30, 12);
c.closePath();
c.fill();

// seat
c.beginPath();
c.moveTo(210,100);
c.lineTo(200,100);
c.lineTo(195,98);
c.lineTo(190,95);
c.lineTo(185,88);
c.lineTo(185,82);
c.lineTo(190,78);
c.lineTo(245,78);
c.lineTo(247,82);
c.lineTo(247,85);
c.lineTo(230,85);
c.lineTo(228,90);
c.lineTo(215,98);
c.lineTo(210,100);
c.closePath();
c.fillStyle = "grey"
c.fill();

//handlebars
c.beginPath();
c.moveTo(310,60);
c.bezierCurveTo(330,60,330,60,310,45);
c.strokeStyle = "black";
c.stroke();


//console.log(Math.PI);