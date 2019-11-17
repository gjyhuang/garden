import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers({
  form: formReducer,
});
const store = createStore(reducer);

export default store;
