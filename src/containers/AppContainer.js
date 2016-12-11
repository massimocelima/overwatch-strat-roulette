import { connect } from 'react-redux'
import {showDrawer, hideDrawer, toggleDrawer} from '../actions'
import App from '../App'

const mapStateToProps = (state) => ({
    navDrawerOpen: state.drawer.show
});

const mapDispatchToProps = (dispatch, ownProps) => ({
/*    handleTouchTapLeftIconButton: () => {
        dispatch( toggleDrawer() );
    },
    handleChangeRequestNavDrawer: (open) => {
        dispatch(open ? showDrawer() : hideDrawer());
    }*/
});

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;