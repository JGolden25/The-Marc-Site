import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';

class Header extends Component {
    render() {
        return (
            <AppBar 
            position="fixed"
            >
                header
            </AppBar>
        );
    }
}

export default Header;