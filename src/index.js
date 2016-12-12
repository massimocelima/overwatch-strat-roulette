import 'babel-polyfill'

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { store } from './helpers/store'

import AppRoutes from './AppRoutes';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router
            history={history}
            render={applyRouterMiddleware(useScroll())}
        >
            {AppRoutes}
        </Router>
    </Provider>
  ,
  document.getElementById('root')
);
