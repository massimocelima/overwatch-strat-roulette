import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

class Callout extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    warning: PropTypes.bool.isRequired,
  };

  render() {
    const {
        message,
        warning,
     ...rest
    } = this.props;

      return (
      <div styleName="callout warning">
          <div styleName="callout-body">
              <i styleName="callout-icon">warning</i>
              <span styleName="callout-message">{message}</span>
              <span styleName="callout-details"></span>
          </div>
          <div styleName="callout-actions"> </div>
      </div>
    );
  }
}

export default CSSModules( Callout, styles );
