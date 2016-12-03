import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './containers/layout';
import Home from './pages/home/index';
import About from './pages/about/index';


export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
  </Route>
);
