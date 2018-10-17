import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';

import { Link } from 'react-router-dom';

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
                <AppBar className="app-bar-style" style={{ backgroundColor: 'black'}} >
                    <Toolbar>
                        <IconButton className="ham-menu-button" color="inherit" aria-label="Menu" onClick={this.handleClick}>
                            <MenuIcon
                                aria-owns={anchorEl ? 'simple-menu' : null}
                                aria-haspopup="true"
                            /> 
                        </IconButton>
                        <div style={{margin: '0 auto'}} >
                            <Link className="Banner-Link" to="/" >
                            <h1 className="Banner-Title">ELEVATED PROTECTION</h1>
                            </Link>
                        </div>
                    </Toolbar>
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