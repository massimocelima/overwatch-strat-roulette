import React, {Component, PropTypes} from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const LoadingSpinner = React.createClass({

    propTypes: {
        show: React.PropTypes.bool.isRequired
    },

    getStyles() {
        const opacity = this.props.show ? 1 : 0;
        return {
            root: {
                backgroundColor: "rgba(255, 255, 255, 0.541176)",
                top: 0,
                left: 0,
                opacity: opacity,
                visibility: opacity === 0 ? "hidden" : "visible",
                height: "100%",
                width: "100%",
                position: "absolute",
                willChange: "opacity",
                transition: "visibility 0s 400ms, opacity 400ms cubic-bezier(0.23, 1, 0.32, 1)",
                zIndex: 1000
            },
            spinner: {
                position: "absolute",
                top: "50%",
                left: "50%",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)"
            }
        };
    },

    render() {
        const inlineStyles = this.getStyles();
        return (
            <div style={inlineStyles.root}>
                <CircularProgress style={inlineStyles.spinner} />
            </div>
        );
    },


});

export default LoadingSpinner;
