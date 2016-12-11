import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './auth'
import drawer from './drawer'
import maps from './maps'

const overwatchStratRouletteApp = combineReducers({
    auth,
    drawer,
    maps,
    routing: routerReducer
});

export default overwatchStratRouletteApp