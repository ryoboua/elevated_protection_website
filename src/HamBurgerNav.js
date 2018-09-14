import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


class HamBurgerNav extends Component {
    state = {
        anchorEl: null,
      };
    
      handleClick = event => {
        console.log(event.currentTarget)
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleClose = () => {
        this.setState({ anchorEl: false });
      };

    render() {
        const menuItems = ['Home','Product','Info','Contact'];
        const { anchorEl } = this.state;

        return (
            <div>
                <AppBar position="static">
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
                >
                    {menuItems.map( (item, index) => <MenuItem key={index} onClick={this.handleClose}><p>{item}</p></MenuItem>)}
                </Menu>
            </div>
        )
    }
}
export default HamBurgerNav;