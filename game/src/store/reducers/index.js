import { combineReducers } from 'redux';
import { pageReducer } from './page';
import { userReducer } from './user';
import { monsterReducer } from './monster';

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  monster: monsterReducer,
});
