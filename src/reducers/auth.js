const auth = (state = {authenticated: false, user: null}, action) => {
    switch (action.type) {
        case 'SIGNED_IN':
            return {
                ...state,
                authenticated: true,
                user: action.user
            }
        case 'SIGNED_OUT':
            return {
                ...state,
                authenticated: false,
                user: null
            }
        default:
            return state
    }
};

export default auth
