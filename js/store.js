import * as actions from './actions/index';
import * as reducers from './reducers/index'
import {createStore, combineReducers} from 'redux';

const reducer = combineReducers({
    newGame: reducers.createGameReducer,
    guessNumber: reducers.guessNumberReducer
})

const store = createStore(reducer);

store.dispatch(actions.newGame());
store.dispatch(actions.guess(34));


console.log(store.getState())

// let unsubscribe = store.subscribe(()=>
//   console.log(store.getState())
// );

// unsubscribe();
