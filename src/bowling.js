var rolls = [];

function roll(cones){
	rolls.push(cones);
}

function sum() {
	var score= 0;
	var roll = 0;
	var frame = 0;
	while(frame < 10) {
		let frameScore = rolls[roll] + rolls[roll+1];
		if (frameScore >= 10) frameScore += rolls[roll+2];
		score += frameScore;
		
		if (rolls[roll] !== 10) roll++;
		roll++;	
		frame++;
	}
	return score;
}

function reset() {
	rolls = [];
}

export default { roll, sum, reset }