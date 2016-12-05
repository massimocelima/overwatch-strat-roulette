import React, { Component, PropTypes } from 'react';

import Title from 'react-title-component';
import CSSModules from 'react-css-modules';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import AppDrawer from './components/AppDrawer/AppDrawer';

import ScrollableContent from "./components/ScrollableContent"
import FeatureAppBar from "./components/FeatureAppBar/FeatureAppBar"
import LoginButton from './components/FeatureAppBar/LoginButton';
import LoggedButton from './components/FeatureAppBar/LoggedButton';

import styles from './App.css';

import { firebaseAuth } from './helpers/constants'

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: "#039be5",
        canvasColor: "#ffffff"
    },
    appBar: {
        height: 60,
        color: "#0288d1"
    },
});


// app bar background #0288d1
// primary #039be5
// canvas color #eceff1

class App extends Component {

    static contextTypes = {
        router: PropTypes.object.isRequired,
    };

    state = {
        navDrawerOpen: false,
        authenticated: false
    };

    componentDidMount () {
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authed: true,
                    loading: false,
                })
            } else {
                this.setState({
                    loading: false
                })
            }
        })
    }

    componentWillUnmount () {
        this.removeListener()
    }

    handleTouchTapLeftIconButton = () => {
        this.setState({
            navDrawerOpen: !this.state.navDrawerOpen,
        });
    };

    handleTouchTapTitle = () => {
        this.context.router.push("/");
    };

    handleChangeRequestNavDrawer = (open) => {
        this.setState({
            navDrawerOpen: open,
        });
    };

    handleChangeList = (event, value) => {
        this.context.router.push(value);
        this.setState({
            navDrawerOpen: false,
        });
    };

    handleScrolled = (event) => {
        if( event.srcElement.scrollTop > 2 )
        {
            //this.setState({
            //    scrolled: true
            //});
        }
    };

    handleSignOut() {
        alert("Signed Out");
    };

    handleSignIn() {
        alert("Signed In");
    };

    //.3s cubic-bezier(0.4,0.0,0.2,1);

    getStyles() {
        const inlineStyles = {
            appBar: {
                boxShadow: "0 3px 4px 0 rgba(0,0,0,0.14),0 3px 3px -2px rgba(0,0,0,0.12),0 1px 8px 0 rgba(0,0,0,0.2)",
                fontWeight: 300,
            }
        }

        return inlineStyles;
    }

    isHome() {
        var currentLocation = this.props.location.pathname;
        return currentLocation == "/" || currentLocation == "/home";
    }

    render() {

        let docked = false;
        let showMenuIconButton = true;
        let showHeader = true;
        let {
            navDrawerOpen,
        } = this.state;

        let leftContentPosition = 0;

        let drawerStyle = { };
        let inlineStyles = this.getStyles();

        let handleTouchTapLeftIconButton = this.handleTouchTapLeftIconButton;

        let title = 'Overwatch Strat Roulette';


        if ( ! this.isHome() && (this.props.width === LARGE || this.props.width === MEDIUM )) {
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
                <Title render="Overwatch Strat Roulette" />

                {this.isHome() ?
                    <FeatureAppBar
                        onMenuClick={handleTouchTapLeftIconButton}
                        containerHeight={410}
                        appBarHeight={60}
                        title="Overwatch Strat Roulette"
                        authenticated={this.state.authenticated}
                    />
                    :
                    <AppBar
                        onLeftIconButtonTouchTap={handleTouchTapLeftIconButton}
                        onTitleTouchTap={this.handleTouchTapTitle}
                        title={<div className={styles.root}>
                            <img src={process.env.PUBLIC_URL + '/img/logo_alt.png'} className={styles.logo} />
                            Overwatch Strat Roulette
                        </div>}
                        iconElementRight={this.state.authenticated ? <LoggedButton handleSignOut={this.handleSignOut} /> : <LoginButton handleSignIn={this.handleSignIn}  />}
                        titleStyle={{cursor: 'pointer', flex: ''}}
                        style={inlineStyles.appBar}
                        iconStyleLeft={{display: 'flex', cursor: 'pointer'}}
                        showMenuIconButton={showMenuIconButton}
                    />
                }

                <AppDrawer
                    style={drawerStyle}
                    showHeader={showHeader}
                    location={location}
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
