import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

// Here we define all our material-ui ReactComponents.
import App from './App';
import Home from './components/pages/Home';
import Maps from './components/pages/Maps';
import Contact from './components/pages/Contact';
import Strats  from './components/pages/Strats';

const NotFound = () => (
    <h1>404.. This page is not found!</h1>)

/**
 * Routes: https://github.com/reactjs/react-router/blob/master/docs/API.md#route
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > Master
 */
const AppRoutes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="maps" component={Maps} />
    <Route path="strats" component={Strats} />
    <Route path="contact" component={Contact} />
    <Route path='*' component={NotFound} />
  </Route>
);

export default AppRoutes;