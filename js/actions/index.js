/*jshint esversion: 6 */
//DEFINITE ACTIONS

//guess a number -> reducer(grabs target # from state and compares it to the guess, logic in here that decides, hot cold etc) -> (feeback: hot, cold stored in state) -> sent back to dom through rendering in component(react/redux)
//crestart game
	//generate a new random number
//feedback based on user guess?

//MAYBE ACTIONS

//feedback based on guess?
//storing old guesses and printing back out the screen?

// ->guess number -> reducer -> grabs the state, compares that number to actual number -> stored into an array of previous guesses

export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guess = guess => ({
	type: GUESS_NUMBER,
	guess
});

// for our reducer file
// var rndNum =  () => {
// 	return Math.floor(Math.random()* 100);
// };

//think about defining restart action

const RESTART = 'RESTART';
const restart = (rndNum) => ({
	type: RESTART,
	target: rndNum,

});

const NEWGAME = 'NEWGAME';
const newGame = () => ({
	type: NEWGAME,
	target: Math.floor(Math.random() * 100),
	feedback: "Make your first guess",
});

// const initialRepositoryState = {guess: 0, target: 35};


// export const repositoryReducer = (state={guess: 0, target: 0}, action) => {
//
// 	Object.assign({}, state, newProperties)
//     return state;
// };
