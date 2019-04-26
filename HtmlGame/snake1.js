const canvas = document.getElementById('snake');
const c = canvas.getContext('2d');

// Unit

const box = 32;

// load Image

const ground = new Image();
ground.src = 'img/ground.png';

const foodImg = new Image();
foodImg.src = 'img/food.png';

//Audios
let dead = new Audio();
dead.src = 'audio/dead.mp3';
let eat = new Audio();
eat.src = 'audio/eat.mp3';

//  Snake

let snake = [];
snake[0] = {
    x : 9 * box,
    y : 10 * box
};

// Food

let food = {
    x : Math.floor(Math.random() * 17 + 1) * box,
    y : Math.floor(Math.random() * 15 + 3) * box
}

// Score Variable

let score = 0;
let d;
document.addEventListener('keydown',direction);

function direction(event){
    if (event.keyCode == 37 && d != 'RIGHT') {
        d = 'LEFT';
    }else if (event.keyCode == 38 && d != 'DOWN'){
        d = 'UP';
    }else if (event.keyCode == 39 && d != 'LEFT'){
        d = 'RIGHT';
    }else if (event.keyCode == 40 && d != 'UP'){
        d = 'DOWN';
    }
}

//check colission
function collision(head,array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x == array[i].x && head.y == array[i].y) {
            return true;
        }
    }
    return false;
}
// Drawing In Canvas

function draw() {
    c.drawImage(ground,0,0);

    for (let i = 0; i < snake.length; i++) {
        c.fillStyle = (i==0)? 'green' : 'white';
        c.fillRect(snake[i].x,snake[i].y,box,box);

        c.strokeStyle = 'red';
        c.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    c.drawImage(foodImg,food.x,food.y);

    // Old Head Position
    let snakex = snake[0].x;
    let snakey = snake[0].y;

    // remove tail
    snake.pop();

    if(d == 'LEFT') snakex -= box;
    if(d == 'UP') snakey -= box;
    if(d == 'RIGHT') snakex += box;
    if(d == 'DOWN') snakey += box;

    //if snake eats

    if (snakex == food.x && snakey == food.y) {
        score++;
        eat.play();
        food = {
            x : Math.floor(Math.random() * 17 + 1) * box,
            y : Math.floor(Math.random() * 15 + 3) * box
        }
    }else{
        snake.pop();
    }

   

    // add new head 

    let newHead = {
        x : snakex,
        y : snakey
    }

    if (snakex < box || snakex > 17*box || snakey > 3*box  || snakey < 17*box || collision(newHead,snake)) {
        clearInterval(game);
        // dead.play();
    }

    snake.unshift(newHead);


    c.fillStyle = 'white';
    c.font = '45px changa one';
    c.fillText(score,2*box,1.6*box);
}

//  calling Draw Function Every second

let game = setInterval(draw,100);
