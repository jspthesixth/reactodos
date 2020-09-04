import filter from './filter';
import todos from './todos';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  filter,
  todos,
});

export default rootReducer;
