import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './auth'
import drawer from './drawer'

const overwatchStratRouletteApp = combineReducers({
    auth,
    drawer,
    routing: routerReducer
});

export default overwatchStratRouletteApp