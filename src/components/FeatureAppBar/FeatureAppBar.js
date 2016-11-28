import React from 'react';

import AppBar from 'material-ui/AppBar';
import muiThemeable from 'material-ui/styles/muiThemeable';
import './FeatureAppBar.css';

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
        };
    },

    getInitialState() {
        return {
            zDepth: 0
        };
    },

    render() {
        const styles = this.getStyles();
        let zDepth = this.state.zDepth;

        return (
            <div style={{backgroundColor: this.props.muiTheme.palette.primary1Color, height: this.props.containerHeight}} ref="elementToFire">
                <AppBar
                    style={{position: 'fixed', height: this.props.appBarHeight,
                        transition: 'box-shadow 450ms, all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
                        backgroundColor: this.props.muiTheme.palette.primary1Color
                    }}
                    zDepth={zDepth}
                    onLeftIconButtonTouchTap={this.onMenuClick}
                    title={
                        <div
                            style={styles.title}
                            ref={el => { this.titleEl = el; }}>
                            {this.props.title}
                        </div>
                    }
                />
                <div className="feature">
                    <div className="feature-image-container">
                        <img src={process.env.PUBLIC_URL + '/img/logo_alt.png'} />
                    </div>
                    <div className="feature-title-container" >
                        <h1 className="feature-title">OVERWATCH</h1>
                        <h2 className="feature-subtitle">Strat Roulette</h2>
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


export default muiThemeable()(FeatureAppBar);