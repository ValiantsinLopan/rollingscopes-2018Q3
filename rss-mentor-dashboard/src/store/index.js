import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { mentorsReducer } from './reducers/index';

export const store = createStore(
  mentorsReducer, composeWithDevTools(
    applyMiddleware(thunk),
  ),
);
