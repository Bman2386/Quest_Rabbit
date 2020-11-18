import { combineReducers } from 'redux';
import category_reducer from './category_reducer';
import QuestsReducer from './quest_reducer';
import AdventurerReducer from './adventurer_reducer';

export default combineReducers({
  categories: category_reducer,
  adventurers: AdventurerReducer,
  quests: QuestsReducer
});
