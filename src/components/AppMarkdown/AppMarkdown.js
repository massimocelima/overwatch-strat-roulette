import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import Markdown from 'react-markdown';
import styles from './styles.css'

class AppMarkdown extends Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    source: PropTypes.string.isRequired,
  };

  render() {
    return (
        <div styleName="root" >
            <div styleName="markdown-body">
                <Markdown source={this.props.source} />
            </div>
        </div>
    );
  }
}

export default CSSModules(AppMarkdown, styles);
