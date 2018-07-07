import { combineReducers } from 'redux';
import  BookReducer  from './reducer-book';
import  ActiveBook  from './reducer-active-book';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  books: BookReducer,
  activeBook: ActiveBook
});

export default rootReducer;
