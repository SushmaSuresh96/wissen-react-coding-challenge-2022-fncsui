import { combineReducers, createReducer } from 'redux';
import users from './users';

const rootReducer = combineReducers({ users });

export default rootReducer;
