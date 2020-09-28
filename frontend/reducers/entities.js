import { combineReducers } from 'redux';
import category_reducer from './category_reducer';

export default combineReducers({
  categories: category_reducer
});
