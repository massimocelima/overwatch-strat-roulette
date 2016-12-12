import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {firebaseStateReducer} from 'redux-react-firebase'
import auth from './auth'
import drawer from './drawer'
import maps from './maps'


const overwatchStratRouletteApp = combineReducers({
    auth,
    drawer,
    maps,
    firebase: firebaseStateReducer,
    routing: routerReducer
});

export default overwatchStratRouletteApp