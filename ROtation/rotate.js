

var canvas = document.getElementById('can');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');





var a = 200;
var b = 330;
var x;
var y;
var rad = 150;
var t = 0;
var rad2 = 2;






function animate() {
    anim=requestAnimationFrame(animate);
    // c.clearRect(0,0,innerWidth,innerHeight);
    x = a  + rad * Math.cos(t * 2 * Math.PI / 360);
    y = b  + (rad + 50) * Math.sin(t * 2 * Math.PI / 360);

    // c.fillStyle = 'rgba(225,22,225,0.5)';
    // c.fillRect(x,y,60,60);

    c.beginPath();
    c.strokeStyle = 'rgba(0,225,0,0.8)';
    c.arc(a,b,5,0,Math.PI * 2,false);
    c.stroke();

    c.beginPath();
    c.strokeStyle = 'rgba(0,200,0,0.5)';
    c.arc(x,y,rad2,0,Math.PI * 2,false);
    c.stroke();
    c.fillStyle = 'rgba(0,0,200,0.5)';
    // c.fill();

    c.beginPath();
    c.strokeStyle = 'rgba(200,0,0,0.5)';
    c.moveTo(a,b);
    c.lineTo(x,y);
    c.stroke();



    e = (a + 450) + rad * Math.cos(t * 2 * Math.PI / 360);
    f = b  + rad * Math.sin(t * 2 * Math.PI / 360);

    c.beginPath();
    c.strokeStyle = 'rgba(0,225,0,0.8)';
    c.arc(a+450,b,5,0,Math.PI * 2,false);
    c.stroke();

    c.beginPath();
    c.strokeStyle = 'rgba(0,200,0,0.5)';
    c.arc(e,f,rad2,0,Math.PI * 2,false);
    c.stroke();
    c.fillStyle = 'rgba(0,0,200,0.5)';
    // c.fill();

    c.beginPath();
    c.strokeStyle = 'rgba(200,0,0,0.5)';
    c.moveTo(a+450,b);
    c.lineTo(e,f);
    c.stroke();

    t += 1;
    if (t > 720) {
        cancelAnimationFrame(anim);
    }
}

animate();