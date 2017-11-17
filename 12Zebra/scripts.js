var canvas = document.querySelector("canvas");
var c = canvas.getContext('2d');

//nose
c.beginPath();
c.arc(250,500,200,0,2*Math.PI);
c.closePath();
c.fillStyle = "rgb(194, 194, 163)";
c.fill();


function eye(x,y){
  c.beginPath();
  c.arc(x,y,30,0,2*Math.PI);
  c.closePath();
  c.fillStyle = "black";
  c.fill();
  
    c.beginPath();
  c.arc(x-10,y-10,10,0,2*Math.PI);
  c.closePath();
  c.fillStyle = "white";
  c.fill();
  
    c.beginPath();
  c.arc(x+3,y+1,5,0,2*Math.PI);
  c.closePath();
  c.fillStyle = "white";
  c.fill();
  
}

eye(120,300);
eye(380,300);

// nostrils
  c.beginPath();
  c.arc(200,350,18,0,2*Math.PI);
  c.closePath();
  c.fillStyle = "black";
  c.fill();

  c.beginPath();
  c.arc(300,350,18,0,2*Math.PI);
  c.closePath();
  c.fillStyle = "black";
  c.fill();

//mouth
  c.beginPath();
  c.arc(250,390,25,0,1*Math.PI);
  c.strokeStyle = "black";
  c.lineWidth = 5;
  c.stroke();

function stripes(x1,y1,x2,y2,x3,y3){
  c.beginPath();
  c.moveTo(x1,y1);
  c.lineTo(x2,y2);
  c.lineTo(x3,y3);
  c.closePath();
  c.fillStyle = "black";
  c.fill();
  
}
//left stripes
stripes(0,120,80,190,0,220);
stripes(0,220,50,250,0,280);
stripes(0,280,30,310,0,340);

//right stripes
stripes(500,120,420,190,500,220);
stripes(500,220,450,250,500,280);
stripes(500,280,470,310,500,340);

//mane
stripes(100,0,120,110,140,0);
stripes(140,0,160,130,185,0);
stripes(185,0,205,150,225,0);
stripes(225,0,250,175,275,0);
stripes(275,0,295,150,315,0);
stripes(315,0,335,130,355,0);
stripes(355,0,375,110,395,0);
