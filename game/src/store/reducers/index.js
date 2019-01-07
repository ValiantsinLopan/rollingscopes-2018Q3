import { combineReducers } from 'redux';
import { pageReducer } from './page';
import { userReducer } from './user';
import { monsterReducer } from './monster';
import { taskReducer } from './task';

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  monster: monsterReducer,
  task: taskReducer,
});
