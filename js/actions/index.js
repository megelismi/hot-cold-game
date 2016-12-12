
//DEFINITE ACTIONS

//guess a number -> reducer(grabs target # from state and compares it to the guess, logic in here that decides, hot cold etc) -> (feeback: hot, cold stored in state) -> sent back to dom through rendering in component(react/redux)
//create game
	//generate a new random number
//restart game?

//MAYBE ACTIONS

//feedback based on guess?
//storing old guesses and printing back out the screen?


export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guess = guess => ({
	type: GUESS_NUMBER,
	guess
});

export const RESTART = 'RESTART';
export const restart = () => ({
	type: RESTART,
	target: Math.floor(Math.random() * 100),
});

export const NEWGAME = 'NEWGAME';
export const newGame = () => ({
	type: NEWGAME,
	target: Math.floor(Math.random() * 100),
	feedback: "Make your first guess",
});

