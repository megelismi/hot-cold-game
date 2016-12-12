
import * as actions from '../actions/index';

const initialState = {};

export const createGameReducer = (state = initialState, action) => {
  if (action.type === 'NEWGAME') {
    return Object.assign({}, state, {
      numberToGuess: action.target,
      theFeedBack: action.feedback
    });
  }
  return state;
};

export const guessNumberReducer = (state = initialState, action) => {
  if (action.type === 'GUESS_NUMBER') {
    return Object.assign({}, state, {
      guess: action.guess
    });
  }
  return state;
}
