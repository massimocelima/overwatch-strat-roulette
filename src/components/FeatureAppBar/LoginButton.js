import React, {Component, PropTypes} from 'react';

import muiThemeable from 'material-ui/styles/muiThemeable';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


class LoginButton extends Component {

    static propTypes = {
        handleSignIn: PropTypes.func.isRequired,
        handleRegister: PropTypes.func.isRequired,
    };

    render() {
        const { handleSignIn, handleRegister, muiTheme, ...rest } = this.props;
        return (
            <div style={{height: "100%"}} >
                <FlatButton primary={true} {...rest} onMouseDown={handleRegister} style={{height: "100%"}} labelStyle={{color: "white"}} label="Register" />
                <FlatButton primary={true} {...rest} onMouseDown={handleSignIn} style={{height: "100%"}} labelStyle={{color: "white"}} label="Login" />
            </div>
        );
    }
}

export default muiThemeable()(LoginButton);
