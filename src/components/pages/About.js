import React, {Component} from 'react';
import Title from 'react-title-component';
import Markdown from 'react-markdown';
import mdAbout from './About.md';

import FeatureBar from "../FeatureBar"


class About extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
        <div style={{backgroundColor: 'white'}}>
            <Title render={(previousTitle) => `About - ${previousTitle}`} />
            <FeatureBar title="About" />
            <div className="content" style={{margin: '28px 48px'}} >
                <div className="markdown-body">
                    <Markdown source={mdAbout} />
                </div>
            </div>
        </div>
    );
  }
}

export default About;