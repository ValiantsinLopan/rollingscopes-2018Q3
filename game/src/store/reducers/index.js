import { combineReducers } from 'redux';
import { pageReducer } from './page';
import { userReducer } from './user';
import { monsterReducer } from './monster';
import { taskReducer } from './task';
import { scoreReducer } from './score';

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  monster: monsterReducer,
  task: taskReducer,
  score: scoreReducer,
});
