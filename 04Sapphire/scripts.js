var canvas = document.querySelector("canvas");

var c = canvas.getContext("2d");
//outline
c.beginPath();
c.moveTo(400,100);
c.lineTo(250,100);
c.lineTo(200,150);
c.lineTo(400,350);
c.lineTo(600,150);
c.lineTo(550,100);
c.lineTo(400,100);
c.closePath();
c.strokeStyle = "#0040ff";
c.lineWidth = 4;
c.stroke();
c.fillStyle = "	#0080ff";
c.fill();

//line across top
c.beginPath();
c.moveTo(200,150);
c.lineTo(600,150);
c.closePath;
c.stroke();
c.lineWidth = 2;

//triangles along top
c.beginPath();
c.moveTo(250, 100);
c.lineTo(312, 150);
c.lineTo(400, 100);
c.lineTo(488, 150);
c.lineTo(550, 100);
c.closePath();
c.stroke();

//triangles along bottom
c.beginPath();
c.lineTo(312, 150);
c.lineTo(400, 350);
c.lineTo(488, 150);
c.closePath();
c.stroke();


var canvas2 = document.querySelector("#c2");
var c2 = canvas2.getContext('2d');

var sparkleObj = {
1: {x: 250, y:100},
2: {x: 305, y:140},
3: {x: 380, y:120},
4: {x: 530, y:100},
5: {x: 435, y:110},
6: {x: 483, y:140},// top
7: {x: 250, y:180},
8: {x: 300, y:210},
9: {x: 330, y:250},
10: {x: 400, y:300},
11: {x: 423, y:215},
12: {x: 450, y:163},
13: {x: 482, y:215},
14: {x: 507, y:185},
15: {x: 550, y:160},
16: {x: 375, y:198}
}

function sparkle(x, y){
c2.clearRect(200, 100, 400, 400);
//x
c2.beginPath();
c2.moveTo(x, y);
c2.lineTo(x+20, y+20);
c2.closePath();
c2.strokeStyle = "white";
c2.stroke();
c2.beginPath();
c2.moveTo(x+20,y);
c2.lineTo(x,y+20);
c2.closePath();
c2.stroke();
//+
c2.beginPath();
c2.moveTo(x+10, y);
c2.lineTo(x+10, y+20);
c2.closePath();
c2.stroke();
c2.beginPath();
c2.moveTo(x, y+10);
c2.lineTo(x+20, y+10);
c2.closePath();
c2.stroke();
}

setInterval(function(){
  var randomSparkle = Math.round(Math.random() * 16);
  sparkle(sparkleObj[randomSparkle].x, sparkleObj[randomSparkle].y);
  console.log(sparkleObj[randomSparkle]);
}, 1000);

