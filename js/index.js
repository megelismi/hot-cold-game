/*jshint esversion: 6 */
require('babel-polyfill');

// import * as actions from './actions/index';
import {createStore, combineReducers} from 'redux';

const NEWGAME = 'NEWGAME';
const newGame = () => ({
	type: NEWGAME,
	target: Math.floor(Math.random() * 100),
  feedback: "Make your first guess",
});

const GUESS_NUMBER = 'GUESS_NUMBER';
const guess = guess => ({
  type: GUESS_NUMBER,
  guess: guess
});

const initialState = {};

const createGameReducer = (state = initialState, action) => {
  if (action.type === NEWGAME) {
    return Object.assign({}, state, {
      numberToGuess: action.target,
      theFeedBack: action.feedback
    });
  }
  return state;
};

//how do we pass it the existing state?
const guessNumberReducer = (state = initialState, action) => {
  if (action.type === GUESS_NUMBER) {

    return Object.assign({}, state, {
      guess: action.guess
    });
  }
  return state;
}


const reducer = combineReducers({
    newGame: createGameReducer,
    guessNumber: guessNumberReducer
})

const store = createStore(reducer);

store.dispatch(newGame());
store.dispatch(guess(34));


console.log(store.getState())

let unsubscribe = store.subscribe(()=>
  console.log(store.getState())
);

unsubscribe();
