var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var green = "rgba(5, 178, 60, 1)";
var white = "rgba(255, 255, 255, 1)";

function number(x,y, number, color){
  c.font = "30px Courier";
  c.fillStyle = color;
  c.fillText(number,x,y);
  c.font = "30px Courier";
  c.fillStyle = color;
  c.fillText(number,x-2,y+2);
  c.font = "30px Courier";
  c.fillStyle = color;
  c.fillText(number,x+2,y-2);
}

function verticalRow(x,y,numArray){
  for (var i = 0; i < numArray.length; i++){
     if (i == 0){
      number(x,y,numArray[i],"white");
     }
    else {
      var num = y - (i * 30);
      number(x,num, numArray[i], "green");
    }//end of else
  
  }//end of for
}//end of function

var obj = {
  1: {y: -(Math.round(Math.random() * 500))},
  2: {y: -(Math.round(Math.random() * 500))},
  3: {y: -(Math.round(Math.random() * 500))},
  4: {y: -(Math.round(Math.random() * 500))},
  5: {y: -(Math.round(Math.random() * 500))},
  6: {y: -(Math.round(Math.random() * 500))},
  7: {y: -(Math.round(Math.random() * 500))},
  8: {y: -(Math.round(Math.random() * 500))},
  9: {y: -(Math.round(Math.random() * 500))},
  10: {y: -(Math.round(Math.random() * 500))},
  11: {y: -(Math.round(Math.random() * 500))},
  12: {y: -(Math.round(Math.random() * 500))},
  13: {y: -(Math.round(Math.random() * 500))},
  14: {y: -(Math.round(Math.random() * 500))},
  15: {y: -(Math.round(Math.random() * 500))},
  16: {y: -(Math.round(Math.random() * 500))},
  17: {y: -(Math.round(Math.random() * 500))},
}
//push values to create object
for (var j = 1; j <= 17; j++){
  obj[j].length = (Math.round(Math.random() * 15));
  obj[j].array = [];
    for(var k = 0; k < obj[j].length; k++){
      var rando = Math.random() * 100;
      if(rando < 65 ){
         obj[j].array.push("1");
         }
      else{
         obj[j].array.push("0");
      }
    }
};

function animate(){
  c.clearRect(0,0,500,500);
  var rowCount = 0;
  for (var l = 1; l <= 17; l++){
    //console.log(obj[l);
    verticalRow(rowCount, obj[l].y, obj[l].array);
    rowCount += 30;
    var arrayLength = (obj[l].array.length) * 30;
    if(obj[l].y >= 510 + arrayLength) {
       obj[l].y = 0;
       }
    else{
       obj[l].y += 5;

    }
  };
  window.requestAnimationFrame(animate);
}
animate();

