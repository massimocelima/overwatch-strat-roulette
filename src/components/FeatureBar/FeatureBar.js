import React, {Component, PropTypes} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import CSSModules from 'react-css-modules';

import styles from "./styles.css"

class FeatureBar extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {

      return (
      <div styleName="root">
          <div styleName="title-bar">
              <div styleName="title">
                  {this.props.title}
              </div>
          </div>
      </div>
      );
  }
}

export default muiThemeable()(CSSModules( FeatureBar, styles ));