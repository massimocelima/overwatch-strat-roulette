import React, {Component} from 'react';
import Title from 'react-title-component';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';

class Contact extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
         <div>
          <Title render={(previousTitle) => `Contacts - ${previousTitle}`} />
          <div className="markdown-body">
            <h2>Contact</h2>
            <p></p>
          </div>
        </div>
    );
  }
}

export default withWidth()(Contact);
