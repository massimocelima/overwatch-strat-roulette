import React, {Component, PropTypes} from 'react';
import ReactDOM from "react-dom";

import spacing from 'material-ui/styles/spacing';
import withWidth, {SMALL, MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import muiThemeable from 'material-ui/styles/muiThemeable';

import Footer from './Footer';

class ScrollableContent extends Component {

  static propTypes = {
    children: PropTypes.node,
    left: PropTypes.number.isRequired
  };

  componentDidUpdate() {
    ReactDOM.findDOMNode(this).scrollTop = 0;
  };

  getStyles() {
    let styles =
    {
        root: {
            overflow: "auto",
            position: "absolute",
            top:  this.props.muiTheme.appBar.height,
            left: this.props.left,
            right: 0,
            bottom: 0,
            transition: "left 450ms cubic-bezier(0.23, 1, 0.32, 1)",
        }
    };

    //if(this.props.width === SMALL)
    //    styles.root.left = "0px";

    return styles;
  }

  render() {

    const styles = this.getStyles();

    return (
        <div style={styles.root}>
          {this.props.children}
          <Footer/>
        </div>
    );
  }
}

export default withWidth()(muiThemeable()(ScrollableContent));