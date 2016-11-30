import React, {Component} from 'react';
import Title from 'react-title-component';
import mdAbout from './About.md';

import FeatureBar from "../FeatureBar/FeatureBar"
import AppMarkdown from "../AppMarkdown/AppMarkdown"


class About extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
        <div>
            <Title render={(previousTitle) => `About - ${previousTitle}`} />
            <FeatureBar title="About" />
            <AppMarkdown source={mdAbout} />
        </div>
    );
  }
}

export default About;
