import React, { Component } from 'react'

import Paper from "material-ui/Paper";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import muiThemeable from 'material-ui/styles/muiThemeable';

import CSSModules from 'react-css-modules';

import { login } from '../../helpers/auth'
import LoadingSpinner from '../Authentication/LoadingSpinner';

import styles from "./styles.css"

class Login extends Component {

    state = {
        loading: false
    }

    handleSubmit = () => {

        this.setState({ loading: true });

        //e.preventDefault()
        login(this.state.email, this.state.password)
            .then((saveUser) => {
                alert("Success: " + saveUser.email)
                this.setState({ loading: false });
            })
            .catch((error) => {
                alert(error)
                this.setState({ loading: false });
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
            <div style={{position: "relative", height: "100%"}}>
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
                    <div>
                        <h2><img src={process.env.PUBLIC_URL + '/img/logo.png'} className={styles.logo} width={32} height={32} /> Overwatch Strat Roulette</h2>
                    </div>
                    <form onSubmit={this.handleSubmit} style={{position: "relative"}}>
                        <div>
                            <TextField floatingLabelText="Email" style={{width: "100%"}}
                                       onChange={this._handleEmailChanged}/>
                        </div>
                        <div>
                            <TextField floatingLabelText="Password" type="password" style={{width: "100%"}}
                                       onChange={this._handlePasswordChanged} />
                        </div>
                        <RaisedButton style={{marginTop: 10}} primary={true} onMouseDown={this.handleSubmit} label="Sign In" />
                    </form>
                </Paper>
            </div>
        )
    }
}

export default CSSModules(muiThemeable()(Login), styles);