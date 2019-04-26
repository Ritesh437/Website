

var canvas = document.querySelector('.can');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var c = canvas.getContext('2d');

function sizeChange() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    init();
}
var n = 300;   // number of circles

if (window.innerWidth < 400) {
    n = 100;
    
}

window.addEventListener('resize',sizeChange);

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 30;

var colorArray = ['#E91E63','#03A9F4','#FF5722','#9E9E9E','#4caf50','#f44336','#8bc34a'];


window.addEventListener('mousemove',function(e){
    
    mouse.x = e.x;
    mouse.y = e.y;
    
});





function Circles(a , b , da , db , rad) {
    this.a = a;
    this.b = b;
    this.da = da;
    this.db = db;
    this.rad = rad;
    this.minRadius = rad;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() {

        
        c.beginPath();
        c.arc(this.a,this.b,this.rad,0,Math.PI * 2,false);
        c.stroke();
        c.fillStyle = this.color;
        c.fill();
        
    }

    this.update = function() {
        if (this.a + this.rad > window.innerWidth || this.a - this.rad < 0) {
            this.da = -this.da;
        }
        if (this.b + this.rad > window.innerHeight || this.b - this.rad < 0) {
            this.db = - this.db;
        }
    
        this.a += this.da;
        this.b += this.db;

        if (mouse.x - this.a < 50 && mouse.x - this.a > -50 && mouse.y - this.b < 50 && mouse.y - this.b > -50) {
            if (this.rad < maxRadius) {
                this.rad += 1;
            }
        } else if (this.rad > this.minRadius) {
            this.rad -= 1;
        }

        this.draw();
    }

}

// var circle = new Circles(200,400,3,3,100);

var circlearray = [];
function init() {
    circlearray = [];
    for (let i = 0; i < n; i++) {
        var rad = (Math.random() * 4) + 1;
        var a = Math.random() * (innerWidth-2*rad)+rad;
        var b = Math.random() * (innerHeight-2*rad)+rad;
        var da = (Math.random() - 0.5)*3;
        var db = (Math.random() - 0.5)*3;
        circlearray.push(new Circles(a,b,da,db,rad));
    }
    
}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for (let i = 0; i < circlearray.length; i++) {
        circlearray[i].update();
        
    }

}
init();
animate();