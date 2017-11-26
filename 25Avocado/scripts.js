var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

c.beginPath();
c.arc(250,150,60,3.2,2*Math.PI);
c.arc(250,250,100,6,1.1*Math.PI);
c.closePath();
c.strokeStyle = "green";
c.lineWidth = 10;
c.fillStyle = "rgb(180, 229, 82)";
c.stroke();
c.fill();

c.beginPath();
c.arc(250,250,50,0,2*Math.PI);
c.fillStyle = "brown";
c.fill();

function eye(x,y){
  c.beginPath();
  c.arc(x,y,10,0,2*Math.PI);
  c.fillStyle = "black";
  c.fill();

    c.beginPath();
  c.arc(x-4,y-3,3,0,2*Math.PI);
  c.fillStyle = "white";
  c.fill();
  
      c.beginPath();
  c.arc(x+2,y,2,0,2*Math.PI);
  c.fillStyle = "white";
  c.fill();
  
}
eye(230,250);
eye(270,250);

    c.beginPath();
  c.arc(250,255,8,6.2,1*Math.PI);
  c.strokeStyle = "black";
  c.lineWidth = 2;
  c.stroke();

function cheek(x,y){
        c.beginPath();
  c.arc(x,y,4,0,2*Math.PI);
  c.fillStyle = "hotpink";
  c.fill();
  
        c.beginPath();
  c.arc(x+3.5,y,4,0,2*Math.PI);
  c.fillStyle = "hotpink";
  c.fill();
  
}
cheek(212,258);
cheek(283,258);


function text(color){
  c.font="40px Arial";
  c.fillStyle = color;
c.fillText("AVOCADO",155,400);
  }
var colorArray = ["red","red", "orange","orange", "green","green", "blue","blue", "indigo","indigo", "violet","violet", "hotpink","hotpink", ];
var arrayCounter = 0;

text("hotpink");


function avo(){
  console.log(arrayCounter);
  c.clearRect(150,360,205,50);
  text(colorArray[arrayCounter]);
  
  if(arrayCounter < colorArray.length){
  arrayCounter++;
  }
  else {
    arrayCounter = 0;
  }
  requestAnimationFrame(avo);
  
}
//setInterval(avo(arrayCounter), 500);
avo();
