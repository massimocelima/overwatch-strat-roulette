import React, {Component} from 'react';
import Title from 'react-title-component';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import Markdown from 'react-markdown';
import mdAbout from './About.md';
var input = '# This is a header\n\nAnd this is a paragraph';

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
            <div className="content" style={{margin: '48px 72px'}} >
                <div className="markdown-body">
                    <Markdown source={mdAbout} />
                </div>
            </div>
        </div>
    );
  }
}

export default withWidth()(About);
