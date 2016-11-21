import React, { Component, PropTypes } from 'react';
import Link from 'react-router';

import Title from 'react-title-component';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import spacing from 'material-ui/styles/spacing';
import {darkWhite, lightWhite, grey900} from 'material-ui/styles/colors';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';

import AppDrawer from './components/AppDrawer';
import ScrollableContent from "./components/ScrollableContent"

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: "#039be5",
        canvasColor: "#ffffff"
    },
    appBar: {
        height: 50,
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
    };

    handleTouchTapLeftIconButton = () => {
        this.setState({
            navDrawerOpen: !this.state.navDrawerOpen,
        });
    };

    handleTouchTapTitle = () => {
        this.context.router.push("home");
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

    //.3s cubic-bezier(0.4,0.0,0.2,1);

    getStyles() {
        const styles = {
            content: {
                margin: spacing.desktopGutter,
                minHeight: "400px",
            },
            appBar: {
                boxShadow: "0 3px 4px 0 rgba(0,0,0,0.14),0 3px 3px -2px rgba(0,0,0,0.12),0 1px 8px 0 rgba(0,0,0,0.2)",
            }
        }

        return styles;
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
        let styles = this.getStyles();

        let handleTouchTapLeftIconButton = this.handleTouchTapLeftIconButton;

        if (this.props.width === LARGE || this.props.width === MEDIUM) {
            showHeader = false;
            docked = true;
            navDrawerOpen = true;
            showMenuIconButton = false;

            drawerStyle.top = muiTheme.appBar.height;
            drawerStyle.zIndex = muiTheme.zIndex.appBar - 1;
            leftContentPosition = muiTheme.drawer.width;
            handleTouchTapLeftIconButton = this.handleTouchTapTitle;
        }

        const title = 'Overwatch Strat Roulette';

    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <Title render={title} />

                <AppBar
                    onLeftIconButtonTouchTap={handleTouchTapLeftIconButton}
                    onTitleTouchTap={this.handleTouchTapTitle}
                    title={title}
                    titleStyle={{cursor: 'pointer'}}
                    style={styles.appBar}
                    iconStyleLeft={{display: 'flex', cursor: 'pointer'}}
                    iconElementLeft={
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <img src="img/logo.png" style={{width: 40, height: 40}} />
                        </div>
                    }
                    showMenuIconButton={true}
                />

                <AppDrawer
                    style={drawerStyle}
                    showHeader={showHeader}
                    location={location}
                    docked={docked}
                    onRequestChangeNavDrawer={this.handleChangeRequestNavDrawer}
                    onChangeList={this.handleChangeList}
                    open={navDrawerOpen}
                />

                <ScrollableContent left={leftContentPosition}>
                    <div style={styles.content}>
                        {this.props.children}
                    </div>
                </ScrollableContent>

            </div>
        </MuiThemeProvider>
    );
  }
}

export default withWidth()(App);
