import React, {Component, PropTypes} from 'react';
import ReactDOM from "react-dom";
import { ScrollContainer } from 'react-router-scroll';

import muiThemeable from 'material-ui/styles/muiThemeable';

import Footer from './Footer/Footer';

class ScrollableContent extends Component {

  static propTypes = {
    children: PropTypes.node,
    left: PropTypes.number.isRequired,
    onScroll: PropTypes.func,
    scrollKey: PropTypes.string.isRequired
  };

    componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener('scroll', this.props.onScroll);
    };

    componentWillUnmount() {
        ReactDOM.findDOMNode(this).removeEventListener('scroll', this.props.onScroll);
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
        <ScrollContainer
            scrollKey={this.props.scrollKey}
        >
            <div style={styles.root}>
              {this.props.children}
                {false &&
                    <Footer />
                }
            </div>
        </ScrollContainer>
    );
  }
}

export default muiThemeable()(ScrollableContent);