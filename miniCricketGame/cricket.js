const choices = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const Target = getMatchTarget(10,20);
console.log('target is', Target);
var score = 0;
var Balls = 12;
var playerChoice = 0;
var computerChoice = 0;

//gets computer choice
function getComputerChoice() {
	const rand = Math.random();
	if (rand < 0.15) {
		return 'one';
	}
	else if (rand <= 0.30) {
		return 'two';
	}
	else if (rand <= 0.45) {
		return 'three';
	}
	else if (rand <= 0.60) {
		return 'Four';
	}
	else if (rand <= 0.75) {
		return 'five';
	}
	else {
		return 'six';
	}
}
//play game
function TestPlay(value){
	
	document.getElementById("target").innerHTML = "Your Target:"+Target;
	document.getElementById("balls").innerHTML = "Balls left:"+(Balls-1);
	do {
		playerChoice = value;
		Balls = Balls -1;
		computerChoice = getComputerChoice();

		console.log('balls left:', Balls);
		console.log('playerchoice is', playerChoice);
		console.log('computerChoice is', computerChoice);
		document.getElementById("playerChoice").innerHTML = "You Selected:"+playerChoice;
		document.getElementById("computerChoice").innerHTML = "Computer Selected:"+computerChoice;
		if (playerChoice === computerChoice) {		
			computerWon();
		}
				if (playerChoice === 'one') {
					console.log (score += 1);
					document.getElementById("score").innerHTML = "Player score:"+score;
					console.log('two runs');
					break;
				}
				else if (playerChoice === 'two') {
					console.log(score += 2);
					document.getElementById("score").innerHTML = "Player score:"+score;
					console.log('one runs');
					break;
				}
				else if (playerChoice === 'three') {
					console.log(score += 3);
					document.getElementById("score").innerHTML = "Player score:"+score;
					console.log('one runs');
					break;
				}
				else if (playerChoice === 'Four') {
					console.log(score += 4);
					document.getElementById("score").innerHTML = "Player score:"+score;
					console.log('four runs');
					break;
				}
				else if (playerChoice === 'five') {
					console.log(score += 5);
					document.getElementById("score").innerHTML = "Player score:"+score;
					console.log('five runs');
					break;
				}
				else {
					console.log(score += 6);
					document.getElementById("score").innerHTML = "Player score:"+score;
					console.log('six');
					break;
				}

		}
	while ((score <= Target) && (Balls !== 0) && (playerChoice !== computerChoice));
	if (score >= Target) {
		console.log('Player wins');
		youWon();
	}
	if ((score == Target) && (playerChoice == computerChoice)) {
		console.log('Its a draw');
		MatchDraw();
	}
}

//Get match Target
function getMatchTarget(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//if computer wins
function computerWon(){	
	document.getElementById("myDialog").showModal();
}

//if player wins
function youWon(){
	document.getElementById("myDialog1").showModal();
}

function MatchDraw(){
	document.getElementById("myDialog2").showModal();
}

//event listeners
choices.forEach(choice => choice.addEventListener('click', play));

