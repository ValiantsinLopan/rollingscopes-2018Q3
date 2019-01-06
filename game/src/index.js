import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';
import './index.css';
import Home from './screens/home/home';
import Battle from './screens/battle';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Battle} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
serviceWorker.unregister();
