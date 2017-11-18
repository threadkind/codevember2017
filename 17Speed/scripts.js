var canvas = document.querySelector("canvas");
var c = canvas.getContext('2d');



function speedo(theta){
c.clearRect(0,0,500,500);
c.beginPath();
c.arc(250,250,200,0,2*Math.PI);
c.lineWidth = 15;
c.strokeStyle = "black";
c.fillStyle = "grey";
c.fill();
c.stroke();

c.beginPath();
c.arc(250,250,20,0,2*Math.PI);
c.lineWidth = 15;
c.fillStyle = "red";
c.fill();

c.beginPath();
c.arc(250,250,185,2.5,2.2*Math.PI);
c.lineWidth = 20;
c.strokeStyle = "green";
c.stroke();

c.beginPath();
c.arc(250,250,185,4.4,1.6*Math.PI);
c.lineWidth = 20;
c.strokeStyle = "orange";
c.stroke();

c.beginPath();
c.arc(250,250,185,5,2.2*Math.PI);
c.lineWidth = 20;
c.strokeStyle = "red";
c.stroke();


  //var theta = 2*3.141592;
  var rCosTheta = 150*Math.cos(theta/10);
  var rSinTheta = 150*Math.sin(theta/10);

	c.beginPath();
	c.moveTo(250,250);
	c.lineTo(250+rCosTheta,250+rSinTheta);
	c.lineWidth = 5;
	c.closePath();
	c.strokeStyle = "red";
	c.stroke();
}

 var rangeSpeed = document.querySelector("#speed");
rangeSpeed.addEventListener("onmousemove", function(e){
	e.preventDefault();
	console.log(rangeSpeed.value);
	speedo(rangeSpeed.value);
});
rangeSpeed.addEventListener("click", function(e){
	e.preventDefault();
	speedo(rangeSpeed.value);
});

speedo(25);
