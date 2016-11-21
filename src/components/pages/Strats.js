import React, {Component} from 'react';
import Title from 'react-title-component';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import FeatureBar from "../FeatureBar"

class Strats extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
        <div>
            <Title render={(previousTitle) => `Strats - ${previousTitle}`} />
            <FeatureBar title="Strats" />
            <div className="content">
            </div>
        </div>
    );
  }
}

export default withWidth()(Strats);
