//  Creating Canvas

var canvas = document.querySelector('.can');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var c = canvas.getContext('2d');


//    Drawing in Canvas

// Boxes

// c.fillStyle = 'rgba(225,0,0,0.5)';
// c.fillRect(100,100,100,100);

// c.fillStyle = 'rgba(0,0,225,0.5)';
// c.fillRect(300,100,100,100);

// c.fillStyle = 'rgba(0,225,0,0.5)';
// c.fillRect(500,100,100,100);


// Lines


// c.beginPath();
// c.strokeStyle = 'red';
// c.moveTo(200,300);
// c.lineTo(500,400);
// c.stroke();

//  Circles


// c.beginPath();
// c.strokeStyle = 'blue';
// c.arc(300,200,50,0,Math.PI * 2,false);
// c.stroke();



// playing out with Canvas Drawings

// for (let i = 0; i < 100; i++) {
//     var a = parseInt(500*Math.random());
//     var b = parseInt(500*Math.random());
//     c.lineTo(a,b);
    
// }

// c.beginPath();
// c.strokeStyle = 'red';
// c.moveTo(200,300);

// canvas.addEventListener('click',function line(e) {
//     var a = e.offsetX;
//     var b = e.offsetY;

//     c.beginPath();
//     c.lineTo(a,b);
//     c.stroke();

//     c.beginPath();
//     c.arc(a,b,50,0,Math.PI * 2,false);
//     c.stroke();
// });



// Animating the Drawings


//  a) Using Function


// var a = Math.random() * innerWidth;
// var b = Math.random() * innerHeight;
// console.log(a,b)
// rad = 50;
// var da = (Math.random() - 0.5) * 10;
// var db = (Math.random() - 0.5) * 10;

// function animate() {
//     requestAnimationFrame(animate);
   
//     c.clearRect(0,0,innerWidth,innerHeight);
//     c.beginPath();
//     c.arc(a,b,rad,0,Math.PI * 2,false);
//     c.stroke();
//     if (a + rad > window.innerWidth || a - rad < 0) {
//         da = -da;
//     }
//     if (b + rad > window.innerHeight || b - rad < 0) {
//         db = -db;
//     }

//     a += da;
//     b += db;
// }

// animate();


//  b) Using Objects

function Circles(a , b , da , db , rad) {
    this.a = a;
    this.b = b;
    this.da = da;
    this.db = db;
    this.rad = rad;

    this.draw = function() {

        
        c.beginPath();
        c.arc(this.a,this.b,this.rad,0,Math.PI * 2,false);
        c.stroke();
        c.strokeStyle = 'red';
        // c.fill();
        
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

        this.draw();
    }

}

// var circle = new Circles(200,400,3,3,100);

var circlearray = [];

for (let i = 0; i < 9; i++) {
    var rad = 50;
    var a = Math.random() * (innerWidth-2*rad)+rad;
    var b = Math.random() * (innerHeight-2*rad)+rad;
    var da = (Math.random() - 0.5)*10;
    var db = (Math.random() - 0.5)*10;
    circlearray.push(new Circles(a,b,da,db,rad));
}
console.log(circlearray);
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for (let i = 0; i < circlearray.length; i++) {
        circlearray[i].update();
        
    }

}

animate();