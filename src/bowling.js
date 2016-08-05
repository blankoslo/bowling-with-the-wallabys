var rolls = [];

function roll(cones){
	rolls.push(cones);
}

function sum() {
	var s = 0;
	var i = 0;
	var frame = 0;
	while(frame < 10) {
		let frameScore = rolls[i] + rolls[i+1];
		if (frameScore == 10) frameScore += rolls[i+2];
		if (rolls[i] == 10) {
			frameScore = 10 + rolls[i+1] + rolls[i+2];
			i--;
		}
		s += frameScore;
		i += 2;
		frame++;
	}
	return s;
}

function reset() {
	rolls = [];
}

export default { roll, sum, reset }