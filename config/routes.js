import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from '../Main.js';
import Profile from '../Profile';
import Home from '../Home';
import Javascript from '../Javascript';


export default (
  <Route path="/" component={Main}>
    <Route path="/trending/:language" component={Javascript} />
    <IndexRoute component={Home} />
  </Route>
);