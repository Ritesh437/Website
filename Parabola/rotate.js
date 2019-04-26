

var canvas = document.getElementById('can');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');





var a = 300;
var b = 300;
var x;
var y;
var rad = 20;
var t = -100;






function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    x = a  + eval(t^2);
    y = b  + 2*t;

    // c.fillStyle = 'rgba(225,22,225,0.5)';
    // c.fillRect(x,y,60,60);

    c.beginPath();
    c.strokeStyle = 'rgba(0,225,0,0.8)';
    c.arc(a,b,30,0,Math.PI * 2,false);
    c.stroke();

    c.beginPath();
    c.strokeStyle = 'rgba(0,200,0,0.5)';
    c.arc(x,y,rad,0,Math.PI * 2,false);
    c.stroke();
    c.fillStyle = 'rgba(0,0,200,0.5)';
    c.fill();

    c.beginPath();
    c.strokeStyle = 'rgba(200,0,0,0.5)';
    c.moveTo(a,b);
    c.lineTo(x,y);
    c.stroke();

    t += 1;

}

animate();