import React, {Component} from 'react';
import Title from 'react-title-component';

import mdContact from './Contact.md';

import FeatureBar from "../FeatureBar/FeatureBar"
import AppMarkdown from "../AppMarkdown/AppMarkdown"

class Contact extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
        <div>
            <Title render={(previousTitle) => `Contact - ${previousTitle}`} />
            <FeatureBar title="Contact" />
            <AppMarkdown source={mdContact} />
        </div>
    );
  }
}

export default Contact;
