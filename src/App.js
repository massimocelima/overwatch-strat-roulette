import React, { Component, PropTypes } from 'react';

import Title from 'react-title-component';
import CSSModules from 'react-css-modules';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';

import AppDrawer from './components/AppDrawer/AppDrawer';

import ScrollableContent from "./components/ScrollableContent"
import FeatureAppBar from "./components/FeatureAppBar/FeatureAppBar"

import styles from './App.css';

import {signedIn, signedOut, hideDrawer, showDrawer, toggleDrawer} from './actions'

import { firebaseAuth } from './helpers/constants'

const muiTheme = getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: "#039be5",
        canvasColor: "#ffffff"
    },
    appBar: {
        height: 60,
        color: "#0288d1"
    },
    textField: {
        focusColor: "#039be5",
        borderColor: "#888888",
        floatingLabelColor: "#888888",
    }
});


// app bar background #0288d1
// primary #039be5
// canvas color #eceff1

class App extends Component {

    static contextTypes = {
        router: PropTypes.object.isRequired,
        store: PropTypes.object.isRequired,
    };

    static propTypes = {
        navDrawerOpen: PropTypes.bool.isRequired
    };

    componentDidMount () {
        const { store } = this.context;
        //this.unsubscribe = store.subscribe(() => this.forceUpdate());
        this.removeListener = firebaseAuth.onAuthStateChanged((user) => {
            if (user) {
                store.dispatch(signedIn(user));
            } else {
                store.dispatch(signedOut());
            }
        });
    }

    componentWillUnmount () {
        //this.unsubscribe();
        this.removeListener()
    }

    handleTouchTapLeftIconButton = () => {
        const { store } = this.context;
        store.dispatch(toggleDrawer());
    };

    handleTouchTapTitle = () => {
        const { router } = this.context;
        router.push("/");
    };

    handleChangeRequestNavDrawer = (open) => {
        const { store } = this.context;
        store.dispatch(open ? showDrawer() : hideDrawer());
    };

    handleChangeList = (event, value) => {
        const { router, store } = this.context;
        router.push(value);
        if(this.props.navDrawerOpen) store.dispatch(hideDrawer());
    };

    handleScrolled = (event) => {
        //if( event.srcElement.scrollTop > 2 ) {
        //}
    };

    //.3s cubic-bezier(0.4,0.0,0.2,1);

    isHome() {
        var currentLocation = this.props.location.pathname;
        return currentLocation == "/"|| currentLocation == "home" || currentLocation == "/home";
    }

    isLogin() {
        var currentLocation = this.props.location.pathname;
        return currentLocation == "login" || currentLocation == "/login";
    }

    render() {

        let docked = false;
        let showMenuIconButton = true;
        let showHeader = true;
        let navDrawerOpen = this.props.navDrawerOpen; //this.context.store.getState().drawer.show;

        let leftContentPosition = 0;

        let drawerStyle = { };

        let handleTouchTapLeftIconButton = this.handleTouchTapLeftIconButton;

        const title = 'Overwatch Strat Roulette';

        if ( ! this.isHome() && ! this.isLogin() && (this.props.width === LARGE || this.props.width === MEDIUM )) {
            showHeader = false;
            docked = true;
            navDrawerOpen = true;
            showMenuIconButton = false;

            drawerStyle.top = muiTheme.appBar.height;
            drawerStyle.zIndex = muiTheme.zIndex.appBar - 1;
            leftContentPosition = muiTheme.drawer.width;
            handleTouchTapLeftIconButton = this.handleTouchTapTitle;
        }


    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <Title render={title} />

                <FeatureAppBar
                    onMenuClick={handleTouchTapLeftIconButton}
                    containerHeight={410}
                    appBarHeight={60}
                    title={title}
                    showMenuIconButton={showMenuIconButton}
                    location={this.props.location}
                />

                <AppDrawer
                    style={drawerStyle}
                    showHeader={showHeader}
                    location={this.props.location}
                    docked={docked}
                    onRequestChangeNavDrawer={this.handleChangeRequestNavDrawer}
                    onChangeList={this.handleChangeList}
                    open={navDrawerOpen}
                />

                {this.isHome() ?
                    <div style={{backgroundColor: "#eceff1"}}>
                        {this.props.children}
                    </div> :
                   <ScrollableContent
                       scrollKey="main-content"
                       left={leftContentPosition}
                       onScroll={this.handleScrolled}>
                        {this.props.children}
                    </ScrollableContent>
                }
            </div>
        </MuiThemeProvider>
    );
  }

}

export default withWidth()( CSSModules( App, styles ) );
