import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { decks } from './decks';

const reducer = combineReducers({
  form: formReducer,
  decks
});
const store = createStore(reducer);

export default store;
