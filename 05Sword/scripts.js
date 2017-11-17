var wrapper = document.querySelector("#canvasWrapper");
var w = window.innerWidth;
wrapper.style.left = (w - 500)/2 + "px";

var canvas1 = document.querySelector("#canvas1");

var c1 = canvas1.getContext("2d");

var colors = {
  darkGreen: "#1a3813",
  green: "#0E7A0A",
  yellow: "#d7be25",
  skin: "#f5e7b2",
  brown: "#7a5a38",
  blue: "#3399ff",
  grey: "#808080",
  darkGrey: "#404040",
  black: "#000000",
  white: "#FFFFFF"
}
console.log(colors.darkGreen);

function pixel(color, x, y){
  c1.beginPath();
  c1.fillStyle = color;
  c1.rect(x, y, 10, 10);
  c1.closePath();
  c1.fill();
};

function row(startx, starty, number, color){
  for(var i = 0; i < number; i++){
      var col = color[i];

      pixel(colors[col], startx + (i*10), starty);
          console.log("Color is " + colors[col]);


  }
}
//row1
row(200, 50, 6, ["darkGreen", "darkGreen", "darkGreen", "darkGreen", "darkGreen", "darkGreen"]);
//row2
row(170, 60, 15, ["darkGreen", "darkGreen", "darkGreen", "darkGreen", "darkGreen", "darkGreen", "darkGreen", "darkGreen", "darkGreen", "black", "black", "black", "black", "black", "black"]);
//row3
row(160, 70, 16, ["darkGreen", "green", "green", "green", "green", "green", "green", "green", "green", "darkGreen", "yellow", "yellow", "skin", "skin", "yellow", "black"]);
//row4 -150,80,17
row(150,80,17, ["darkGreen", "green", "green", "green", "green", "green", "green", "green", "yellow", "skin", "skin", "yellow", "yellow", "yellow", "yellow", "yellow", "black"]);
//row5 -130,90,18
row(130, 90, 18, ["darkGreen", "darkGreen", "green", "green", "green", "green", "green", "green", "green", "green", "yellow", "yellow", "yellow", "brown", "skin", "yellow", "yellow", "black"]);
//row6 -110,100,19
row(110, 100, 19, ["darkGreen", "darkGreen", "green", "green", "green", "green", "green", "green", "green", "green", "green", "yellow", "yellow", "yellow", "skin", "skin", "brown", "black", "black"]);
//row7 -100,110,19
row(100, 110, 19, ["darkGreen", "green", "green", "green", "green", "darkGreen", "green", "green", "green", "green", "green", "green", "yellow", "yellow", "skin", "skin", "skin", "skin", "black"]);
//row8 -90,120,20
row(90, 120, 20, ["darkGreen", "darkGreen", "darkGreen", "darkGreen", "darkGreen", "darkGreen", "darkGreen", "darkGreen", "green", "darkGreen", "darkGreen", "green", "green", "yellow", "yellow", "skin", "skin", "skin", "skin", "black"]);
//row9 -90,130,20
row(90, 130, 20, ["black", "black", "green", "green", "green", "green", "green", "skin", "skin", "skin", "green", "black", "skin", "skin", "skin", "skin", "black", "brown", "black"]);
//row10 -120,140,17
row(120, 140, 17, ["black", "darkGrey", "darkGreen", "darkGreen", "skin", "skin", "green", "black", "brown", "skin", "skin", "brown", "skin", "white", "blue", "skin", "black"]);
//row11 -130,150,15
row(130, 150, 15, ["black", "brown", "brown", "brown", "skin", "skin", "black", "brown", "yellow", "grey", "skin", "skin", "white", "blue", "skin"]);
//row12 -130,160,18
row(130, 160, 18, ["black", "brown", "darkGrey", "black", "darkGrey", "brown", "black", "skin", "yellow", "brown", "skin", "skin", "skin", "skin", "skin", "black", "darkGrey"]);
//row13 -130,170,18
row(130, 170, 18, ["black", "brown", "darkGrey", "black", "darkGrey", "black", "black", "yellow", "brown", "brown", "skin", "skin", "black", "black", "black", "darkGrey", "grey", "darkGrey"]);
//row14 -130,180,28
row(130, 180, 28, ["black", "brown", "brown", "brown", "black", "green", "black", "skin", "black", "black", "black", "black", "darkGreen", "brown", "brown", "darkGrey", "grey", "darkGrey"]);
//row15 -150,190,29
row(150, 190, 27, ["brown", "black", "black", "green", "darkGreen", "black", "darkGreen", "green", "green", "green", "green", "skin", "skin", "darkGrey", "grey", "darkGrey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "darkGrey"]);
//row16 -150,200,29
row(150, 200, 27, ["black", "black", "black", "green", "green", "darkGreen", "darkGreen", "green", "green", "green", "green", "skin", "skin", "darkGrey", "grey", "darkGrey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "darkGrey"]);
//row17 -140,210,28
row(140, 210, 27, ["black", "brown", "black", "darkGreen", "black", "green", "green", "green", "darkGreen", "darkGreen", "darkGreen", "darkGreen", "brown", "brown", "darkGrey", "grey", "darkGrey"]);
//row18.a -140,220,13
row(140, 220, 13, ["black", "brown", "black", "green", "green", "grey", "grey", "grey", "grey", "grey", "green", "green", "black"]);
//row18.b -140,280,3
row(280, 220, 3, ["darkGrey"]);
//row19 -140,230,14
row(140, 230, 14, ["black", "brown", "black", "darkGreen", "green", "green", "green", "green", "green", "green", "green", "black"]);
//row20 -140,240,15
row(140, 240, 15, ["black", "brown", "brown", "black", "darkGreen", "green", "green", "green", "green", "green", "black", "brown", "brown", "brown", "black"]);
//row21.a -150,250,2
row(150, 250, 2, ["black"]);
//row21.b -180,250,12
row(180, 250, 12, ["black", "black", "black", "black", "black", "black", "brown", "brown", "brown", "brown", "brown", "black"]);
//row22 -240,260,6
row(240, 260, 6, ["black"]);