var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

function sunglasses(x,y){
  c.beginPath();
  c.moveTo(x-8,y);
  c.lineTo(x,y);
  c.quadraticCurveTo(x+25,y-10,x+50,y);
  c.lineTo(x+55,y);
  c.quadraticCurveTo(x+80,y-10,x+110,y);
  c.lineTo(x+118,y);
  c.lineWidth = 5;
  c.stroke();
  
  c.beginPath();
  c.arc(x+23,y,25,0,1*Math.PI);
  c.stroke();
  
  c.beginPath();
  c.arc(x+84,y,25,0,1*Math.PI);
  c.stroke();
  //left stripe
  c.beginPath();
  c.moveTo(x+5,y+14);
  c.lineTo(x+42,y-4);
  c.stroke();

  c.beginPath();
  c.moveTo(x+11,y+20);
  c.lineTo(x+48,y+2);
  c.stroke();

  c.beginPath();
  c.moveTo(x+20,y+25);
  c.lineTo(x+46,y+11);
  c.stroke();
//right stripes
  c.beginPath();
  c.moveTo(x+60,y+14);
  c.lineTo(x+100,y-4);
  c.stroke();

  c.beginPath();
  c.moveTo(x+66,y+20);
  c.lineTo(x+107,y+2);
  c.stroke();

  c.beginPath();
  c.moveTo(x+75,y+25);
  c.lineTo(x+105,y+11);
  c.stroke();


}

function sunRow(y){
  sunglasses(30,y);
  sunglasses(190,y);
  sunglasses(350,y);
}
sunRow(50);
sunRow(150);
sunRow(250);
sunRow(350);
sunRow(450);
