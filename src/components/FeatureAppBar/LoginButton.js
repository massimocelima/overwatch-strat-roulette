import React, {Component, PropTypes} from 'react';

import muiThemeable from 'material-ui/styles/muiThemeable';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import { logout } from '../../helpers/auth'


class LoginButton extends Component {

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    static propTypes = {
        authenticated: React.PropTypes.bool.isRequired,
        user: React.PropTypes.object,
    };

    handleSignOut = () => {
        this.context.router.push("/");
        logout();
    };

    handleSignIn = () => {
        this.context.router.push("login");
    };

    render() {
        const {
            authenticated,
            user,
            muiTheme,
            ...rest } = this.props;

        let avatar = null;
        if(authenticated)
        {
            if(user.photoURL != null && user.photoURL != "")
                avatar = <Avatar src={user.photoURL}/>;
            else
                avatar = <Avatar>{user.email.substring(0, 1)}</Avatar>;
        }

        return (
            <div>
            {!authenticated ?
                <div>
                    <RaisedButton primary={true} {...rest} onTouchTap={this.handleSignIn} buttonStyle={{borderRadius: 0}} label="Login" />
                </div>
                :
                <div>

                    <IconMenu
                        {...rest}
                        iconButtonElement={
                            <IconButton style={{padding: 0}}>{avatar}</IconButton>
                        }
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                        style={{color: "white"}}
                    >
                        <MenuItem primaryText="Sign out" onTouchTap={this.handleSignOut}/>
                    </IconMenu>
                </div>
            }
            </div>
        );
    }
}

export default muiThemeable()(LoginButton);
