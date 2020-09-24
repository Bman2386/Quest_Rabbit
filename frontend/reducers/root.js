import { combineReducers } from 'redux';
import sessionReducer from './session';
import session_errors from './errors'

export default combineReducers({
  session: sessionReducer,
  errors: session_errors
});