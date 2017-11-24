var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

function heart(x,y,hexcode){
    c.beginPath();
    c.arc(x,y,12,3,2*Math.PI);
    c.arc(x+23,y,12,3,2*Math.PI);
    c.fillStyle = hexcode;
    c.fill();
    c.beginPath();
    c.moveTo(x-13,y);
    c.lineTo(x+12,y+25);
    c.lineTo(x+35,y);
    c.fill();
}

canvas.addEventListener("click", function(e){
  var color = document.getElementById("color").value;
  heart(e.layerX,e.layerY, color);
});

document.querySelector('#resetButton').addEventListener("click", function(){
    c.clearRect(0,0,625,450);
});