import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import FullWidthSection from "../FullWidthSection"

import styles from './styles.css'

class Footer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

     return (
        <FullWidthSection styleName="root">
            <p>
                {'Wow, this is fun!'}
            </p>

            <p styleName="materialui">
                {'Thank you to '}
                <a href="http://www.material-ui.com" styleName="link">
                    material-ui
                </a>
                {' for providing the react material ui components.'}
            </p>
        </FullWidthSection>
    );
  }
}

export default CSSModules( Footer, styles );
