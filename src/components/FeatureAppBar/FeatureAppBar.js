import React from 'react';
import CSSModules from 'react-css-modules';

import AppBar from 'material-ui/AppBar';
import muiThemeable from 'material-ui/styles/muiThemeable';
import styles from './styles.css';

const FeatureAppBar = React.createClass({

    propTypes: {
        onMenuClick: React.PropTypes.func,
        appBarHeight: React.PropTypes.number.isRequired,
        containerHeight: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
    },

    componentDidMount: function() {
        document.addEventListener("scroll", this.handleScroll);
    },
    componentWillUnmount: function() {
        document.removeEventListener("scroll", this.handleScroll);
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
            }
        };
    },

    getInitialState() {
        return {
            zDepth: 0
        };
    },

    render() {
        const inlineStyles = this.getStyles();
        let zDepth = this.state.zDepth;

        return (
            <div style={inlineStyles.root} ref="elementToFire">
                <AppBar
                    style={inlineStyles.appBar}
                    zDepth={zDepth}
                    onLeftIconButtonTouchTap={this.onMenuClick}
                    title={
                        <div
                            style={inlineStyles.title}
                            ref={el => { this.titleEl = el; }}>
                            {this.props.title}
                        </div>
                    }
                />
                <div styleName="root">
                    <div styleName="image">
                        <img src={process.env.PUBLIC_URL + '/img/logo_alt.png'} />
                    </div>
                    <div styleName="title" >
                        <h1>OVERWATCH</h1>
                        <h2>Strat Roulette</h2>
                    </div>
                </div>
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