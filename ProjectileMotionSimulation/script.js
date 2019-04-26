var canvas = document.getElementById('can');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');


// c.fillStyle = 'rgba(225,22,225,0.5)';
// c.fillRect(x,y,60,60);
//
// c.beginPath();
// c.strokeStyle = 'rgba(200,0,0,0.5)';
// c.moveTo(a,b);
// c.lineTo(x,y);
// c.stroke();


var rad;
var t;
var u;
var a;
var b;
var ux;
var uy;

function reset(){
  rad = 30;
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
  console.log(u,t);
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

// function Projectile (x,y,t,u){
//   this.x = x;
//   yhis.y = y;
//   this.ux = Math.cos(this.t*2*Math.PI/360) * u;
//   this.uy = Math.sin(this.t*2*Math.PI/360) * u;
//
//   this.draw = function(){
//
//   }
//
// }
// var values = new Projectile(300,300,30,30);
//
// console.log(values.ux,values.uy);

var hight = [];
function animate(){
  request = requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,400+rad);

  hight.push(b);
  c.beginPath();
  c.strokeStyle = 'rgba(0,225,0,0.8)';
  c.arc(a,b,rad,0,Math.PI * 2,false);
  c.stroke();
  c.fill();
  a = a + (ux/10);
  b = b - (uy/10);
  uy = uy - 9.81;
  if (b > 400) {
    reset();
    cancelAnimationFrame(request);
  }
}
