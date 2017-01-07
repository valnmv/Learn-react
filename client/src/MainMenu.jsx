import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import { Link } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const MainMenu = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" containerElement={< Link to="/about" />} />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

MainMenu.muiName = 'IconMenu';
export default MainMenu;
