import React, {Component, PropTypes} from 'react';

import muiThemeable from 'material-ui/styles/muiThemeable';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


class Logged extends Component {

    static propTypes = {
        handleSignOut: PropTypes.func.isRequired,
    };

    render() {
        const { handleSignOut, muiTheme, ...rest } = this.props;
        return (
            <IconMenu
                {...rest}
                iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                style={{color: "white"}}
            >
                <MenuItem primaryText="Sign out" onTouchTap={handleSignOut}/>
            </IconMenu>
        );
    }
}

export default muiThemeable()(Logged);
