export const signedIn = (user) => ({
    type: 'SIGNED_IN',
    user: user
});

export const signedOut = () => ({
    type: 'SIGNED_OUT'
});

export const hideDrawer = () => ({
    type: 'HIDE_DRAWER'
});

export const showDrawer = () => ({
    type: 'SHOW_DRAWER'
});

export const toggleDrawer = () => ({
    type: 'TOGGLE_DRAWER'
});

