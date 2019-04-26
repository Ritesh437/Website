

var canvas = document.getElementById('can');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');





var a = 200;
var b = 200;
var x = 200;
var y = 300;
var rad = 30;


c.fillStyle = 'rgba(225,22,225,0.5)';
c.fillRect(x,y,60,60);

c.beginPath();
c.strokeStyle = 'rgba(200,0,0,0.5)';
c.moveTo(a,b);
c.lineTo(x,y);
c.stroke();

c.beginPath();
c.strokeStyle = 'rgba(0,225,0,0.8)';
c.arc(a,b,rad,0,Math.PI * 2,false);
c.stroke();