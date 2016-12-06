import React, {Component, PropTypes} from 'react';

import muiThemeable from 'material-ui/styles/muiThemeable';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import RaisedButton from 'material-ui/RaisedButton';


class LoginButton extends Component {

    static propTypes = {
        handleSignIn: PropTypes.func.isRequired,
        handleRegister: PropTypes.func.isRequired,
        authenticated: React.PropTypes.bool.isRequired,
        handleSignOut: PropTypes.func.isRequired,
    };

    render() {
        const {
            handleSignIn,
            handleRegister,
            handleSignOut,
            authenticated,
            muiTheme,
            ...rest } = this.props;
        return (
            <div>
            {!authenticated ?
                <div>
                    <RaisedButton primary={true} {...rest} onTouchTap={handleRegister} buttonStyle={{borderRadius: 0}} style={{marginRight: 10}} label="Register" />
                    <RaisedButton primary={true} {...rest} onTouchTap={handleSignIn} buttonStyle={{borderRadius: 0}} label="Login" />
                </div>
                :
                <IconMenu
                    {...rest}
                    iconButtonElement={
                        <IconButton><MoreVertIcon color="white" /></IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                    style={{color: "white"}}
                >
                    <MenuItem primaryText="Sign out" onTouchTap={handleSignOut}/>
                </IconMenu>
            }
            </div>
        );
    }
}

export default muiThemeable()(LoginButton);
