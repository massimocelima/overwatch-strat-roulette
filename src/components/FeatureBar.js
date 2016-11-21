import React, {Component, PropTypes} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

import "./FeatureBar.css"

class FeatureBar extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {

      return (
      <div className="featurebar">
          <div className="featurebar-title-area">
              <div className="featurebar-title">
                  {this.props.title}
              </div>
          </div>
      </div>
      );
  }
}

export default muiThemeable()(FeatureBar);