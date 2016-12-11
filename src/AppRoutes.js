import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

// Here we define all our material-ui ReactComponents.
import AppContainer from './containers/AppContainer'
import Home from './components/Home/Home';
import MapsContainer from './containers/MapsContainer';
import Contact from './components/pages/Contact';
import Strats  from './components/Strat/Strats';
import Strat  from './components/Strat/Strat';
import About from './components/pages/About';
import Login from './components/Authentication/Login';
import TestPage from './components/pages/Test';

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
  <Route path="/" component={AppContainer}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="maps" component={MapsContainer} />
    <Route path="strats" component={Strats} />
    <Route path="strat/:map" component={Strat} />
    <Route path="contact" component={Contact} />
      <Route path="about" component={About} />
      <Route path="testpage" component={TestPage} />
      <Route path="login" component={Login} />
    <Route path='*' component={NotFound} />
  </Route>
);

export default AppRoutes;