

document.querySelector('.nav').innerHTML = '<nav class="navbar"><span class="open-menu"><a href="#" onclick="openSlideMenu()"><svg width="30" height="30"><path d="M0,5 30,5" stroke="#000" stroke-width="5"/><path d="M0,14 30,14" stroke="#000" stroke-width="5"/><path d="M0,23 30,23" stroke="#000" stroke-width="5"/></svg></a></span><ul class="navbar-nav"><li><a href="../index.html">Home</a></ul></nav><div class="side-nav" id="side-menu"><a href="#" class="btn-close" onclick="closeSlideMenu()">&times;</a><a href="../todo/index.html">To DO List Application</a><a href="../TicTacToe/index.html">Tic Tac Toe</a><a href="../Calculator/index.html">Calculator</a><a  href="../Canvas/index.html">Moving Circles</a><a href="../DiceGame/index.html">Dice Game</a><a href="../HtmlGame/game.html">Snake Xania (Canvas Game)</a><a href="../ROtation/index.html">Circle and Ellipse Animation</a><a href="../ProjectileMotionSimulation/index.html">Projectile Motion Simulation</a></nav>'


//navbar  
function openSlideMenu() {
    document.getElementById('side-menu').style.width = '250px';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0px';
}
  
//navbar  



