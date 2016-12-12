export const SIGNED_IN = 'SIGNED_IN';
export const SIGNED_OUT = 'SIGNED_OUT';

export const HIDE_DRAWER = 'HIDE_DRAWER';
export const SHOW_DRAWER = 'SHOW_DRAWER';
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

export const FETCH_MAPS_REQUEST = 'FETCH_MAPS_REQUEST';
export const FETCH_MAPS_ERROR = 'FETCH_MAPS_ERROR';
export const FETCH_MAPS_SUCCESS = 'FETCH_MAPS_SUCCESS';

export const FETCH_STRATS_REQUEST = 'FETCH_STRATS_REQUEST';
export const FETCH_STRATS_ERROR = 'FETCH_STRATS_ERROR';
export const FETCH_STRATS_SUCCESS = 'FETCH_STRATS_SUCCESS';
export const FILTER_STRATS = 'FILTER_STRATS';

import fetch from 'isomorphic-fetch';

export const signedIn = (user) => ({
    type: SIGNED_IN,
    user: user
});

export const signedOut = () => ({
    type: SIGNED_OUT
});

export const hideDrawer = () => ({
    type: HIDE_DRAWER
});

export const showDrawer = () => ({
    type: SHOW_DRAWER
});

export const toggleDrawer = () => ({
    type: TOGGLE_DRAWER
});

export const fetchMapsRequest = () => ({
    type: FETCH_MAPS_REQUEST
});

export function fetchMapsIfNeeded() {

    // Note that the function also receives getState()
    // which lets you choose what to dispatch next.

    // This is useful for avoiding a network request if
    // a cached value is already available.

    return (dispatch, getState) => {
        if (getState().maps.invalidated) {
            // First dispatch: the app state is updated to inform
            // that the API call is starting.
            dispatch(fetchMapsRequest());

            // The function called by the thunk middleware can return a value,
            // that is passed on as the return value of the dispatch method.

            // In this case, we return a promise to wait for.
            // This is not required by thunk middleware, but it is convenient for us.

            return fetch(process.env.PUBLIC_URL + "/data/maps.json")
                .then( response => response.json() )
                .then( json => dispatch( fetchMapsSuccess(json) ) )
                .catch( error => dispatch( fetchMapsError("Error fetching maps") ) );
        } else {
            // Let the calling code know there's nothing to wait for.
            return Promise.resolve()
        }
    }
}

export const fetchMapsError = (error) => ({
    type: FETCH_MAPS_ERROR,
    error: error
});

export const fetchMapsSuccess = (response) => ({
    type: FETCH_MAPS_SUCCESS,
    data: response.maps
});

export const fetchStartsRequest = (mapName) => ({
    type: FETCH_STRATS_REQUEST,
    mapName: mapName
});

export function fetchStratsIfNeeded( mapName ) {

    // Note that the function also receives getState()
    // which lets you choose what to dispatch next.

    // This is useful for avoiding a network request if
    // a cached value is already available.

    return (dispatch, getState) => {
        if (getState().maps.invalidated) {
            // First dispatch: the app state is updated to inform
            // that the API call is starting.
            dispatch( fetchStartsRequest(mapName) );

            // The function called by the thunk middleware can return a value,
            // that is passed on as the return value of the dispatch method.

            // In this case, we return a promise to wait for.
            // This is not required by thunk middleware, but it is convenient for us.

            return fetch(process.env.PUBLIC_URL + "/data/strats.json")
                .then( response => response.json() )
                .then( json => dispatch( fetchStratsSuccess(json) ) )
                .catch( error => dispatch( fetchStratsError("Error fetching strats") ) );
        } else {
            // Let the calling code know there's nothing to wait for.
            return Promise.resolve()
        }
    }
}

export const fetchStratsError = (error) => ({
    type: FETCH_STRATS_ERROR,
    error: error
});

export const fetchStratsSuccess = (response) => ({
    type: FETCH_STRATS_SUCCESS,
    data: response.maps
});
