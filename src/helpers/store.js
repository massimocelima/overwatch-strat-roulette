import { reduxReactFirebase } from 'redux-react-firebase'
import { createStore, applyMiddleware, compose  } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from '../reducers'
import {config} from './constants'

const initialState = {
    auth: {
        authenticated: false,
        user: null
    },
    drawer: {
        show: false
    },
    maps: {
        isFetching: false,
        invalidated: true,
        data: []
    },
    /*strats: {
     isFetching: false,
     invalidated: true,
     data: []
     },
     roll: {
     startA: null,
     startB: null,
     }*/
};

const enhancer = compose(
    applyMiddleware(thunkMiddleware),
    reduxReactFirebase(config),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore( reducer, initialState, enhancer );