var scores,roundscore,activeplayer,run;


function reset(){
	roundscore = 0;
	scores = [0,0];
	activeplayer = 0;
	run = true;

	document.getElementById('player-0').textContent = 'Player 1';
	document.getElementById('player-1').textContent = 'Player 2';

	document.querySelector('.player-tab-1').classList.remove('active');
	document.querySelector('.player-tab-0').classList.remove('active');
	document.querySelector('.player-tab-0').classList.add('active');

	document.getElementById('dice').style.display = 'none';

	document.getElementById('score-0').textContent = 0;
	document.getElementById('score-1').textContent = 0;
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;

	document.querySelector('.player-tab-0' ).classList.remove('winner');
	document.querySelector('.player-tab-1' ).classList.remove('winner');

}

reset();

document.querySelector('.btn-2').addEventListener('click',function(){
	if(run){
		var dice = Math.floor(Math.random() * 6) + 1;
		var diceDOM = document.querySelector('#dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';

		if(dice !== 1){
			roundscore = roundscore + dice;
			document.getElementById('current-' + activeplayer).textContent = roundscore;
		}else{
			document.getElementById('current-' + activeplayer).textContent = 0;
			change();
		}
	}
});

document.querySelector('.btn-3').addEventListener('click',function(){
	if(run){
		scores[activeplayer] = scores[activeplayer] + roundscore;
		document.getElementById('score-' + activeplayer).textContent = scores[activeplayer];
		document.getElementById('current-' + activeplayer).textContent = 0;
		if(scores[activeplayer] >= 100){
				document.getElementById('player-' + activeplayer).textContent = 'Player ' + (activeplayer + 1) + ' is Winner';
				document.querySelector('.player-tab-' + activeplayer).classList.add('winner');
				document.querySelector('.player-tab-1').classList.remove('active');
				document.querySelector('.player-tab-0').classList.remove('active');
				run = false;
			}
		change();
	}
});


document.querySelector('.btn-1').addEventListener('click',reset);


function change(){
	if(activeplayer === 0)
		activeplayer = 1;
	else
		activeplayer = 0;

	document.querySelector('.player-tab-0').classList.toggle('active');
	document.querySelector('.player-tab-1').classList.toggle('active');
	document.getElementById('dice').style.display = 'none';
	roundscore = 0;
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
