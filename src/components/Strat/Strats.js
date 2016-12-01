import React, {Component} from 'react';
import Title from 'react-title-component';
import FeatureBar from "../FeatureBar/FeatureBar"

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

export default Strats;
