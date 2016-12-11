import React, { Component, PropTypes } from 'react'

import Paper from "material-ui/Paper";
import muiThemeable from 'material-ui/styles/muiThemeable';

import CSSModules from 'react-css-modules';

import { firebaseAuth, firebaseAuthUi, firebaseAuthUiConfig } from '../../helpers/constants'

import styles from "./styles.css"

class Login extends Component {

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    handleSignedIn = () => {
        this.context.router.push("/");
    };

    componentDidMount () {
        let that = this;
        let config = {
            ...firebaseAuthUiConfig,
            callbacks: {
                signInSuccess: function(user, credential, redirectUrl) {
                    that.handleSignedIn();
                    return false;
                }
            },
        }
        firebaseAuthUi.start('#firebaseui-auth', config);
    }

    componentWillUnmount () {
        firebaseAuthUi.reset();
    }

    render () {

        return (
            <div className={styles.grid}>
                <Paper zDepth={2} rounded={true} style={{
                    maxWidth: 600,
                    width: "100%",
                    position: "absolute",
                    marginTop: 100,
                    left: "50%",
                    transform: "translate(-50%, 0)",
                    padding: 20,
                    height: 400
                }} >
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>
                            <img src={process.env.PUBLIC_URL + '/img/logo.png'} className={styles.logo} width={48} height={48} />
                            <span>Overwatch Strat Roulette</span>
                        </div>
                    </div>

                    <div id="firebaseui-auth"></div>

                </Paper>
            </div>
        )
    }
}

export default CSSModules(muiThemeable()(Login), styles);