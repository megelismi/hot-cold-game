/*jshint esversion: 6 */
require('babel-polyfill');

// import * as actions from './actions/index';
import {createStore} from 'redux';

const NEWGAME = 'NEWGAME';
const newGame = () => ({
	type: NEWGAME,
	target: Math.floor(Math.random() * 100),
  feedback: "Make your first guess",
});

const guessNumberReducer = (state = {}, action) => {
  console.log('state', state);
  console.log('action', action);
  if (action.type === NEWGAME) {
    return Object.assign({}, state, {
      numberToGuess: action.target,
      theFeebBack: action.feedback
    });
  }
};

const store = createStore(guessNumberReducer);

let unsubscribe = store.subscribe(()=>
  console.log(store.getState())
);

store.dispatch(newGame());

unsubscribe();
