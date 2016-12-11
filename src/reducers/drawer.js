const drawer = (state = {show: false}, action) => {
    switch (action.type) {
        case 'HIDE_DRAWER':
            return {
                show: false
            }
        case 'SHOW_DRAWER':
            return {
                show: true
            }
        case 'TOGGLE_DRAWER':
            return {
                show: !state.show
            }
        default:
            return state
    }
};

export default drawer


