import React, {Component} from 'react';
import Title from 'react-title-component';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';

import FeatureBar from "../FeatureBar"

class Contact extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
        <div>
            <Title render={(previousTitle) => `Contact - ${previousTitle}`} />
            <FeatureBar title="Contact" />
            <div className="content">
            </div>
        </div>
    );
  }
}

export default withWidth()(Contact);
