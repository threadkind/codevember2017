var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

function drawCircle(x, y, diameter, color){
  c.beginPath();
c.arc(x,y,diameter,0,2*Math.PI);
c.fillStyle = color;
c.fill();
c.closePath();
}
function drawFace(x,y){
    drawCircle(220,y+100,9, "black");//lefteye
    drawCircle(x+216,y+97,3, "white");
    drawCircle(x+224,y+103,2, "white");  
    drawCircle(x+280,y+100,9, "black");//righteye
    drawCircle(x+276,y+97,3, "white");
    drawCircle(x+284,y+103,2, "white");
  //cheeks
    drawCircle(x+300,y+108,5, "hotpink");
    drawCircle(x+305,y+108,5, "hotpink");
    drawCircle(x+200,y+108,5, "hotpink");
    drawCircle(x+195,y+108,5, "hotpink");
  //mouth
    c.beginPath();
    c.arc(x+250,y+100,10,0,1*Math.PI)
    c.strokeStyle = "black";
    c.lineWidth = 2;
    c.stroke();
    c.closePath();
}
function drawCloud(x, y, color){
drawCircle(x+250,y+50,40,color);//top
drawCircle(x+215,y+120,40,color);//bottomleft
drawCircle(x+285,y+120,40,color);//bottomright
drawCircle(x+310,y+75,40,color);//topleft
drawCircle(x+190,y+75,40,color);//topright
drawCircle(x+150,y+100,40,color);//middleleft
drawCircle(x+350,y+100,40,color);//middleright
drawCircle(x+250,y+100,40,color);//middleright
drawFace(x,y);
}
function bolt(x, y){
  c.beginPath();
  c.moveTo(x+50,y+50);
  c.lineTo(x+20,y+160);
  c.lineTo(x+60,y+160);
  c.lineTo(x+30,y+250);
  c.lineTo(x+120,y+140);
  c.lineTo(x+80,y+140);
  c.lineTo(x+110,y+50);
  c.lineTo(x+50,y+50);
  c.closePath();
  c.fillStyle = "rgb(255, 209, 26)";
  c.fill();
}
function rainbow(x, y){
 function arch(x,y,diam, color){
    c.beginPath();
    c.arc(x,y,diam,1*Math.PI,2*Math.PI);
    c.strokeStyle = color;
    c.lineWidth = 10;
    c.stroke();
    c.closePath();
  }
  for(var i = 0; i < 7; i++){
    var size = 140+(8*i);
    var rby = (i*2)+y;
    var rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
    arch(x, rby, size, rainbow[i]);
  }
}
function storm(){
  //c.clearRect(0,0,500,500);
  canvas.style.background = "rgb(0, 102, 153)";
  drawCloud(0,140, "grey");
}
function clearSkies(){
  c.clearRect(0,0,500,500);
  canvas.style.background = "rgb(0, 153, 255)"
  rainbow(400,250);
  drawCloud(0,140, "white");
}
function raindrop(x, y){
  drawCircle(x,y,10,"blue");
  c.beginPath();
  c.moveTo(x-10,y);
  c.lineTo(x,y-20);
  c.lineTo(x+10,y);
  c.lineTo(x-10,y);
  c.fillStyle = "blue";
  c.fill();
  c.closePath();
}
function dropRows(index){
      //row of 3
      raindrop(170,200+index);
      raindrop(250,200+index);
      raindrop(330,200+index);
     
      //row of 2
      raindrop(210,240+index);
      raindrop(290,240+index);
    }

function raining(){
   var rowIndex0 = 0;
   var rowIndex1 = 80;
   var rowIndex2 = 160;
   var rowIndex3 = 240;
   var rowIndex4 = 320;
   var rowIndex5 = 400;
   var rowIndex6 = 480;
  function drops(){
    c.clearRect(0,0,500,500);
    window.requestAnimationFrame(drops);
       dropRows(rowIndex0);
       dropRows(rowIndex1);
       dropRows(rowIndex2);
       dropRows(rowIndex3);
       dropRows(rowIndex4);
       dropRows(rowIndex5);
       dropRows(rowIndex6);
       //c.rect(0,0,500,250);
       //c.fill();
function strike(start, stop){
       if(rowIndex0 > start && rowIndex0 < stop){
         bolt(190,190);
        }
    }
       strike(55, 58);
       strike(65, 75);
       strike(240, 255);
       strike(262, 268);
       strike(275, 300);
       strike(410, 425);
       strike(430, 435);
       strike(500, 505);
       storm();

     if(rowIndex0 === 560){
       rowIndex0 = 0;
     } else{
       rowIndex0++; 
     }
     if(rowIndex1 === 560){
       rowIndex1 = 0;
     } else{
       rowIndex1++; 
     }    
     if(rowIndex2 === 560){
       rowIndex2 = 0;
     } else{
       rowIndex2++; 
     }  
     if(rowIndex3 === 560){
       rowIndex3 = 0;
     } else{
       rowIndex3++; 
     }
     if(rowIndex4 === 560){
       rowIndex4 = 0;
     } else{
       rowIndex4++; 
     } 
     if(rowIndex5 === 560){
       rowIndex5 = 0;
     } else{
       rowIndex5++; 
     }    
     if(rowIndex6 === 560){
       rowIndex6 = 0;
     } else{
       rowIndex6++; 
     }
      
    }//end drops
  drops();
}//end raining


raining();
// setTimeout(function(){
//   window.cancelAnimationFrame(window.requestAnimationFrame(drops));
//   clearSkies();
// },5000);

