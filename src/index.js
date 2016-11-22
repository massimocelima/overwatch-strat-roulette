import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppRoutes from './AppRoutes';
import './index.css';
import './bootstrap.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
    <Router
        history={browserHistory}
        onUpdate={() => window.scrollTo(0, 0)}
    >
        {AppRoutes}
    </Router>
  ,
  document.getElementById('root')
);
