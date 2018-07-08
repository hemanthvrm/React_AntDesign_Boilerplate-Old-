import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import auth from './auth';
import sites from "./sites";

export default combineReducers({
  auth,
  form: formReducer
});
