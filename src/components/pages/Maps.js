import React, {Component} from 'react';
import Title from 'react-title-component';
import FeatureBar from "../FeatureBar"
import RaisedButton from "material-ui/RaisedButton"

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
                <RaisedButton label={"This is the button label"} primary={true} />
            </div>
        </div>
    );
  }
}

export default Maps;

