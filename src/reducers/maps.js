import {
    FETCH_MAPS_REQUEST,
    FETCH_MAPS_SUCCESS,
    FETCH_MAPS_ERROR
} from '../actions'

const maps = (state = {
    isLoading: false,
    invalidated: true,
    data: [],
    error: null
}, action) => {
    switch (action.type) {
        case FETCH_MAPS_REQUEST:
            return {
                ...state,
                invalidated: false,
                isLoading: true
            }
        case FETCH_MAPS_SUCCESS:
            return {
                ...state,
                invalidated: false,
                isLoading: false,
                data: action.data
            }
        case FETCH_MAPS_ERROR:
            return {
                ...state,
                invalidated: true,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
};

export default maps


