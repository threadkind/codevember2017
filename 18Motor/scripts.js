var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

var pink = "hotPink";
var skin = "orange";

function scooter(x,y){
  c.beginPath();
  c.moveTo(x+380,y+50);
  c.lineTo(x+375,y+20);
  c.lineTo(x+300,y+20);
  c.bezierCurveTo(x+280,y+80,x+150,y+80,x+175,y+80);
  c.lineTo(x+175,y+100);
  c.lineTo(x+300,y+100);
  c.closePath();
  c.stroke();
  c.fillStyle = pink;
  c.fill();
  
	c.beginPath();
  c.rect(x+285,y+10,95,12);
  c.closePath()
  c.fillStyle = "grey";
  c.fill();
  c.beginPath();
	c.moveTo(x+114,y+100);
	c.lineTo(x+400,y+100);
  c.closePath();
	c.strokeStyle = "black";
	c.stroke();
    //handlebars
  c.beginPath();
  c.moveTo(x+140,y+62);
  c.lineTo(x+170,y-40);
  c.lineTo(x+230,y-40);
  c.lineTo(x+230,y-30);
  c.lineTo(x+185,y-25);
  c.lineTo(x+175,y+65);
  c.closePath();
  c.stroke();
  c.fillStyle = pink;
  c.fill();

    
  //wheel
  c.beginPath();
  c.arc(x+330,y+100,30,0,2*Math.PI);
  c.stroke();
  c.fillStyle = "white";
  c.fill();
  c.arc(x+330,y+100,5,0,2*Math.PI);
  c.closePath();
  c.stroke();

  c.beginPath();
  c.arc(x+330,y+100,70,3.15,2*Math.PI);
  c.stroke();
  c.arc(x+155,y+100,40,3.15,2*Math.PI);
  c.closePath();
  c.stroke();
  c.fillStyle = pink;
  c.fill();
    
  //wheel
  c.beginPath();
  c.arc(x+155,y+100,30,0,2*Math.PI);
  c.closePath();
  c.fillStyle = "white";
  c.fill();
  c.stroke();
  c.beginPath();
  c.arc(x+155,y+100,5,0,2*Math.PI);
  c.closePath();
  c.stroke();
}



var xCount = 0;

setInterval(function(){
  c.clearRect(0,0,500,500);
  
  c.beginPath();
  c.rect(0,0,500,270);
  c.closePath();
  c.fillStyle = "lightblue";
  c.fill();

  c.beginPath();
  c.rect(0,270,500,230);
  c.fillStyle = "green";
  c.fill();
  
  scooter(xCount,200);
  
  if(xCount === -400){
     xCount = 390;
     }
  else {
     xCount--;
  }
},1000/60);
