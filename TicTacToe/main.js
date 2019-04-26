var a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,x=1,y=1,u=100;

function reset(){
  a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,x=1,y=0,u=100;
  document.getElementById('a').setAttribute('src','blank.jpg');
  document.getElementById('b').setAttribute('src','blank.jpg');
  document.getElementById('c').setAttribute('src','blank.jpg');
  document.getElementById('d').setAttribute('src','blank.jpg');
  document.getElementById('e').setAttribute('src','blank.jpg');
  document.getElementById('f').setAttribute('src','blank.jpg');
  document.getElementById('g').setAttribute('src','blank.jpg');
  document.getElementById('h').setAttribute('src','blank.jpg');
  document.getElementById('i').setAttribute('src','blank.jpg');

document.getElementById('win').textContent = '';
document.getElementById('draw').textContent = '';


}

document.getElementById('a').addEventListener('click',function(){
if (a==0) {
  if (x%2==1) {
      document.getElementById('a').setAttribute('src','krestik.gif');
      a=1;
  }else if (x%2==0) {
    document.getElementById('a').setAttribute('src','nolik.gif');
    a=2;
  }
  x++;
}
y = check();
draw();
});

document.getElementById('b').addEventListener('click',function(){
  if (b==0) {
    if (x%2==1) {
        document.getElementById('b').setAttribute('src','krestik.gif');
        b=1;
    }else if (x%2==0) {
      document.getElementById('b').setAttribute('src','nolik.gif');
      b=2;
    }
    x++;
  }
  y = check();
  draw();
});

document.getElementById('c').addEventListener('click',function(){

  if (c==0) {
    if (x%2==1) {
        document.getElementById('c').setAttribute('src','krestik.gif');
        c=1;
    }else if (x%2==0) {
      document.getElementById('c').setAttribute('src','nolik.gif');
      c=2;
    }
    x++;
  }
  y = check();
  draw();
});

document.getElementById('d').addEventListener('click',function(){

  if (d==0) {
    if (x%2==1) {
        document.getElementById('d').setAttribute('src','krestik.gif');
        d=1;
    }else if (x%2==0) {
      document.getElementById('d').setAttribute('src','nolik.gif');
      d=2;
    }
    x++;
  }
  y = check();
  draw();
});

document.getElementById('e').addEventListener('click',function(){
  if (e==0) {
    if (x%2==1) {
        document.getElementById('e').setAttribute('src','krestik.gif');
        e=1;
    }else if (x%2==0) {
      document.getElementById('e').setAttribute('src','nolik.gif');
      e=2;
    }
    x++;
  }
  y = check();
  draw();
});

document.getElementById('f').addEventListener('click',function(){

  if (f==0) {
    if (x%2==1) {
        document.getElementById('f').setAttribute('src','krestik.gif');
        f=1;
    }else if (x%2==0) {
      document.getElementById('f').setAttribute('src','nolik.gif');
      f=2;
    }
    x++;
  }
  y = check();
  draw();
});

document.getElementById('g').addEventListener('click',function(){

  if (g==0) {
    if (x%2==1) {
        document.getElementById('g').setAttribute('src','krestik.gif');
        g=1;
    }else if (x%2==0) {
      document.getElementById('g').setAttribute('src','nolik.gif');
      g=2;
    }
    x++;
  }
  y = check();
  draw();
});

document.getElementById('h').addEventListener('click',function(){

  if (h==0) {
    if (x%2==1) {
        document.getElementById('h').setAttribute('src','krestik.gif');
        h=1;
    }else if (x%2==0) {
      document.getElementById('h').setAttribute('src','nolik.gif');
      h=2;
    }
    x++;
  }
  y = check();
  draw();
});

document.getElementById('i').addEventListener('click',function(){

  if (i==0) {
    if (x%2==1) {
        document.getElementById('i').setAttribute('src','krestik.gif');
        i=1;
    }else if (x%2==0) {
      document.getElementById('i').setAttribute('src','nolik.gif');
      i=2;
    }
    x++;
  }
  y = check();
  draw();

});

document.querySelector('.neww').addEventListener('click',reset);

function check(){

  if ((a==1&&b==1&&c==1)||(d==1&&e==1&&f==1)||(g==1&&h==1&&i==1)||(a==1&&d==1&&g==1)||(b==1&&e==1&&h==1)||(c==1&&f==1&&i==1)||(a==1&&e==1&&i==1)||(c==1&&e==1&&g==1)) {
    document.getElementById('win').textContent = 'Player 1 is Winner';
    a=10,b=10,c=10,d=10,e=10,f=10,g=10,h=10,i=10,u=10;
    return 0;
  }else if ((a==2&&b==2&&c==2)||(d==2&&e==2&&f==2)||(g==2&&h==2&&i==2)||(a==2&&d==2&&g==2)||(b==2&&e==2&&h==2)||(c==2&&f==2&&i==2)||(a==2&&e==2&&i==2)||(c==2&&e==2&&g==2)) {
    document.getElementById('win').textContent = 'Player 2 is Winner';
    a=10,b=10,c=10,d=10,e=10,f=10,g=10,h=10,i=10,u=10;
    return 0;
  }else {
    return 1;
  }
}

function draw(){
  if (a!=0&&b!=0&&c!=0&&d!=0&&e!=0&&f!=0&&g!=0&&h!=0&&i!=0&&y!=0&&u==100) {
    document.getElementById('draw').textContent = 'Draw';
  }
}
function viewSource(){;
    var source = "<html>";
    source += document.getElementsByTagName('html')[0].innerHTML;
    source += "</html>";
    source = source.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    source = "<pre>"+source+"</pre>";
    sourceWindow = window.open('','Source of page','height=800,width=800,scrollbars=1,resizable=1');
    sourceWindow.document.write(source);
    sourceWindow.document.close();
    if(window.focus) sourceWindow.focus();
}