import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';



class HamBurgerNav extends Component {
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
            <div>
                <AppBar>
                    <Toolbar style={{background: 'black'}} >
                        <IconButton color="inherit" aria-label="Menu" onClick={this.handleClick}>
                            <MenuIcon
                                aria-owns={anchorEl ? 'simple-menu' : null}
                                aria-haspopup="true"
                            /> 
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                  disableAutoFocusItem="false"
                >
                    {menuItems.map( (item, index) => ( 
                            <Link style={{ textDecoration: 'none', color: 'black', borderStyle: 'none' }} to={item.url} >
                                <MenuItem 
                                key={index} 
                                onClick={this.handleClose}
                                >
                                    <p>{item.title}</p>
                                </MenuItem>
                            </Link>
                                )
                                )}
                </Menu>
            </div>
        )
    }
}
export default HamBurgerNav;