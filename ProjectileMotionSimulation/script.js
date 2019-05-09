
const ti = document.querySelector('.time');
const hi = document.querySelector('.height');
const ra = document.querySelector('.range');

var canvas = document.getElementById('can');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');

var rad;
var t;
var u;
var a;
var b;
var ux;
var uy;

function reset(){
  rad = 10;
  t;
  u;
  a = 0+60;
  b = 400;
  ux;
  uy;

}

reset();


document.getElementById('btn').addEventListener('click',function values() {
  t =(document.getElementById('ang').value);
  u =(document.getElementById('vel').value);
  ux = Math.cos(t*2*Math.PI/360) * u * 10;
  uy = Math.sin(t*2*Math.PI/360) * u * 10;
  animate();
});

c.beginPath();
c.strokeStyle = 'rgba(0,225,0,0.8)';
c.arc(a,b,rad,0,Math.PI * 2,false);
c.stroke();
c.fill();

c.beginPath();
c.moveTo(0,b+rad);
c.lineTo(innerWidth,b+rad);
c.stroke();

function draw(){
  c.beginPath();
  c.strokeStyle = 'rgba(0,225,0,0.8)';
  c.arc(a,b,rad,0,Math.PI * 2,false);
  c.stroke();
  c.fill();
}

function value(){
  let sin = Math.sin(t*2*Math.PI/360);
  let time = (2 * u * sin)/9.81;
  let range = (u * u * Math.sin(2*t*2*Math.PI/360))/9.81;
  let height = (u * u * sin * sin)/(2 * 9.81)
  ti.textContent = `Time of Flight : ${time.toFixed(3)} s`;
  hi.textContent = `Maximum Hight : ${height.toFixed(3)} m`;
  ra.textContent = `Horizontal Range : ${range.toFixed(3)} m`;
}

function animate(){
  request = requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,400+rad);

  draw();

  a = a + (ux/10);
  b = b - (uy/10);
  uy = uy - 9.81;
  if (b > 400) {
    b = 400;
    c.clearRect(0,0,innerWidth,400+rad);
    draw();
    value();
    reset();
    cancelAnimationFrame(request);
  }
}
