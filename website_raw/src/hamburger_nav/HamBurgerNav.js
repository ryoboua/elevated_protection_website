import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Link } from 'react-router-dom';

import logo from './logo_icon.jpg';
import './ham.css';

export default class HamBurgerNav extends Component {
    state = {
        anchorEl: null,
      };
    
      handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleClose = () => {
        this.setState({ anchorEl: null });
      };

    render() {
        const menuItems = [
            { title: 'Home', url: '/' },
            { title: 'Products', url: '/products' },
            { title: 'Info', url: '/info' },
            { title: 'Contact', url: '/contact' }
        ];
        const { anchorEl } = this.state;

        return (
            <React.Fragment>
                <AppBar style={{ backgroundColor: 'black'}} >
                    <IconButton style={{paddingTop: '12px'}} color="inherit" aria-label="Menu" onClick={this.handleClick}>
                        <MenuIcon
                            aria-owns={anchorEl ? 'simple-menu' : null}
                            aria-haspopup="true"
                        /> 
                    </IconButton>
                    <Link className="Banner-Link" to="/" >
                        <h3 className="Banner-Title">ELEVATED PROTECTION</h3>
                    </Link>
                </AppBar>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                    {menuItems.map( (item, index) => ( 
                            <Link className="ham-link" key={index} to={item.url} >
                                <MenuItem 
                                onClick={this.handleClose}
                                >
                                    <p>{item.title}</p>
                                </MenuItem>
                            </Link>))}
                </Menu>
            </React.Fragment>
        )
    }
}