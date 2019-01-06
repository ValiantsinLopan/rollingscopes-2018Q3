import { combineReducers } from 'redux';
import { userReducer } from './user';
import { monsterReducer } from './monster';

export const rootReducer = combineReducers({
  user: userReducer,
  monster: monsterReducer,
})
