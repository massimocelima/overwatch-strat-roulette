import React, {Component} from 'react';
import Title from 'react-title-component';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';

class Strats extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
         <div>
          <Title render={(previousTitle) => `Strats - ${previousTitle}`} />
          <div className="markdown-body">
            <h2>Strats</h2>
            <p></p>
          </div>
        </div>
    );
  }
}

export default withWidth()(Strats);
