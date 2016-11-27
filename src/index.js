import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppRoutes from './AppRoutes';
import './index.css';
//import './bootstrap.css';
import './markdown.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
    <Router
        history={browserHistory}
        render={applyRouterMiddleware(useScroll())}
    >
        {AppRoutes}
    </Router>
  ,
  document.getElementById('root')
);
