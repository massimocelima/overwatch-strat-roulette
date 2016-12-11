import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore, applyMiddleware, compose  } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'
import {initialState} from './helpers/constants'

import AppRoutes from './AppRoutes';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(thunkMiddleware),
    // Required! Enable Redux DevTools with the monitors you chose
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(reducer, initialState, enhancer );
//const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

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
