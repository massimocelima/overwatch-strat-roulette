import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';
import {darkWhite, lightWhite, grey900} from 'material-ui/styles/colors';
//import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';

import FullWidthSection from "./FullWidthSection"

class Footer extends Component {
  constructor(props, context) {
    super(props, context);
  }

    getStyles() {
        const styles = {
            footer: {
                backgroundColor: grey900,
                textAlign: 'center',
                width: "100%"
            },

            a: {
                color: darkWhite,
            },
            p: {
                margin: '0 auto',
                padding: 0,
                color: lightWhite,
                maxWidth: 356,
            },
            materialui: {
                justifyContent: 'center',
                margin: '25px 15px 0',
                padding: 0,
                color: lightWhite,
                lineHeight: '25px',
                fontSize: 14,
            },
            materialuiLogo: {
                margin: '0 3px',
            },
            iconButton: {
                color: darkWhite,
            },
        };

        return styles;
    }

  render() {

    const styles = this.getStyles();

    return (
        <FullWidthSection style={styles.footer}>
            <p style={styles.p}>
                {'Wow, this is fun!'}
            </p>

            <p style={styles.materialui}>
                {'Thank you to '}
                <a href="http://www.material-ui.com" style={styles.a}>
                    material-ui
                </a>
                {' for providing the react material ui components.'}
            </p>
        </FullWidthSection>
    );
  }
}

export default Footer;
