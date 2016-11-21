import React, {Component} from 'react';
import Title from 'react-title-component';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import FeatureBar from "../FeatureBar"


class Maps extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
        <div>
            <Title render={(previousTitle) => `Maps - ${previousTitle}`} />
            <FeatureBar title="Maps" />
            <div className="content">
                <p>Select you map below</p>
            </div>
        </div>
    );
  }
}

export default withWidth()(Maps);

