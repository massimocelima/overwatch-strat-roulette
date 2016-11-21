import React, {Component} from 'react';
import Title from 'react-title-component';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';

//require('../markdown.css');

class Maps extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
        <div>
          <Title render={(previousTitle) => `Maps - ${previousTitle}`} />
          <div className="markdown-body">
            <h2>Maps</h2>
            <p>Select you map below</p>
          </div>
        </div>
    );
  }
}

export default withWidth()(Maps);

