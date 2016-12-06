import React, { Component } from 'react'

import Paper from "material-ui/Paper";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import muiThemeable from 'material-ui/styles/muiThemeable';

import CSSModules from 'react-css-modules';

import { login } from '../../helpers/auth'
import LoadingSpinner from '../LoadingSpinner';

import styles from "./styles.css"

class Login extends Component {

    state = {
        loading: false,
        email: "",
        password: "",
        errorMessage: ""
    }

    handleSubmit = () => {

        this.setState({ loading: true });

        //e.preventDefault()
        login(this.state.email, this.state.password)
            .then((saveUser) => {
                this.setState({ loading: false });
            })
            .catch((error) => {
                this.setState({ loading: false, errorMessage: error });
            });
    }

    _handlePasswordChanged = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    _handleEmailChanged = (e) => {
        this.setState({
            email: e.target.value
        });
    };

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
                    padding: 20
                }} >
                    <LoadingSpinner show={this.state.loading} />


                    <div className={styles.titleContainer}>
                        <div className={styles.title}>
                            <img src={process.env.PUBLIC_URL + '/img/logo.png'} className={styles.logo} width={48} height={48} />
                            <span>Overwatch Strat Roulette</span>
                        </div>
                    </div>

                    <form onSubmit={this.handleSubmit} className={styles.form}>
                        {this.state.errorMessage != null && this.state.errorMessage != "" &&
                            <div>
                                {this.state.errorMessage.toString()}
                            </div>
                        }
                        <TextField floatingLabelText="Email" style={{width: "100%"}}
                                   onChange={this._handleEmailChanged}/>
                        <TextField floatingLabelText="Password" style={{width: "100%"}}
                                   onChange={this._handlePasswordChanged}
                                   type="password"/>
                        <RaisedButton style={{marginTop: 30}} primary={true} onTouchTap={this.handleSubmit} label="Sign In" />
                    </form>
                </Paper>
            </div>
        )
    }
}

export default CSSModules(muiThemeable()(Login), styles);