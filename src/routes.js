import React from 'react';
import { Route, IndexRoute,browserHistory } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import FuelSavingsForm from './components/FuelSavingsForm'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';
import Profile from './components/Profile'; // eslint-disable-line import/no-named-as-default
import Contact from './components/Contact';
import Team from './components/Team';

export default (
  <Route history={browserHistory} path="/" component={App}>
    <IndexRoute component={HomePage}/>
     <Route path="/about" component={AboutPage}/>
    <Route path="/fuelsavings" component={FuelSavingsForm}>
    		<Route path="/Profile" component={Profile}/>
    		<Route path="/Contact" component={Contact}/>
    		<Route path="/Team" component={Team}/>
    </Route>
    
    <Route path="*" component={NotFoundPage}/>

  </Route>
);
