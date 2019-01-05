import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './screens/home/home';
import Battle from './screens/battle/battle';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/game" component={Battle} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'),
);
serviceWorker.unregister();
