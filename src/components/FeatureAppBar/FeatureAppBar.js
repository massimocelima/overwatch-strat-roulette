import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';

import AppBar from 'material-ui/AppBar';
import muiThemeable from 'material-ui/styles/muiThemeable';

import LoginButtonContainer from '../../containers/LoginButtonContainer'

import styles from './styles.css';

const FeatureAppBar = React.createClass({

    contextTypes: {
        router: PropTypes.object.isRequired,
    },

    propTypes: {
        onMenuClick: React.PropTypes.func,
        appBarHeight: React.PropTypes.number.isRequired,
        containerHeight: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        showMenuIconButton: React.PropTypes.bool.isRequired,
    },

    componentDidMount: function() {
        document.addEventListener("scroll", this.handleScroll);
    },
    componentWillUnmount: function() {
        document.removeEventListener("scroll", this.handleScroll);
    },

    isHome() {
        var currentLocation = this.props.location.pathname;
        return currentLocation == "/" || currentLocation == "/home";
    },

    getStyles() {
        let opacity = this.state.zDepth ? 1 : 0;
        return {
            title: {
                opacity: opacity,
                transition: 'opacity 450ms',
                fontWeight: 300,
            },
            appBar: {
                position: 'fixed',
                height: this.props.appBarHeight,
                transition: 'box-shadow 450ms, all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
                backgroundColor: this.props.muiTheme.palette.primary1Color
            },
            root: {
                backgroundColor: this.props.muiTheme.palette.primary1Color,
                height: this.props.containerHeight
            },
            appBarWithShadow: {
                boxShadow: "0 3px 4px 0 rgba(0,0,0,0.14),0 3px 3px -2px rgba(0,0,0,0.12),0 1px 8px 0 rgba(0,0,0,0.2)",
                fontWeight: 300,
            },
            titleRoot: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                fontWeight: 300
            },
            logo:  {
                width: 32,
                height: 32,
                marginRight: 10
            }
        };
    },

    getInitialState() {
        return {
            zDepth: 0
        };
    },

    handleTouchTapTitle() {
        this.context.router.push("/");
    },

    render() {
        const inlineStyles = this.getStyles();
        let zDepth = this.state.zDepth;

        return (
            <div>
            { ! this.isHome() ?
                <AppBar
                    onLeftIconButtonTouchTap={this.props.onMenuClick}
                    onTitleTouchTap={this.handleTouchTapTitle}
                    title={<div style={inlineStyles.titleRoot}>
                        <img src={process.env.PUBLIC_URL + '/img/logo_alt.png'} style={inlineStyles.logo}/>
                        {this.props.title}
                    </div>}
                    iconElementRight={
                        <LoginButtonContainer />
                    }
                    iconStyleRight={{
                        marginTop: 0,
                        display: "flex",
                        alignItems: "center"
                    }}
                    titleStyle={{cursor: 'pointer', flex: ''}}
                    style={inlineStyles.appBarWithShadow}
                    iconStyleLeft={{display: 'flex', cursor: 'pointer'}}
                    showMenuIconButton={this.props.showMenuIconButton}
                />
                :
                <div style={inlineStyles.root} ref="elementToFire">
                    <AppBar
                        style={inlineStyles.appBar}
                        zDepth={zDepth}
                        onLeftIconButtonTouchTap={this.props.onMenuClick}
                        title={
                            <div
                                style={inlineStyles.title}
                                ref={el => {
                                    this.titleEl = el;
                                }}>
                                {this.props.title}
                            </div>
                        }
                        iconStyleRight={{
                            marginTop: 0,
                            display: "flex",
                            alignItems: "center"
                        }}
                        iconElementRight={
                            <LoginButtonContainer />
                        }
                    />
                    <div styleName="root">
                        <div styleName="image">
                            <img src={process.env.PUBLIC_URL + '/img/logo_alt.png'}/>
                        </div>
                        <div styleName="title">
                            <h1>OVERWATCH</h1>
                            <h2>Strat Roulette</h2>
                        </div>
                    </div>

                </div>
            }
            </div>
        );
    },

    onMenuClick() {
        this.props.onMenuClick();
    },

    handleScroll(e) {
        let depth = document.body.scrollTop > 0 ? 2 : 0;
        if( depth != this.state.zDepth )
            this.setState( { zDepth: depth });
    },

});

export default muiThemeable()( CSSModules(FeatureAppBar, styles) );


