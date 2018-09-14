import React from 'react';
import Media from "react-media";

const Nav = ({...props, navOpacity}) => {
    const navOptions = ['Product', 'Info', 'Contact'];
    const menuItems = {
        padding: '0 1em',
        color: 'white',
    }
    const navStyle = (direction, opacity) => ({ 
        display: 'flex', 
        justifyContent: 'center', 
        flexDirection: `${direction}`,
        opacity,
        transition: 'all 3s',
    })
    const nav = (direction = 'column', opacity) => (
        <div className="navStyle" style={ navStyle(direction, opacity)} >
                {navOptions.map( item => (
                    <h1 style={ menuItems }>
                        {item}
                    </h1>
                ))}
        </div>
    )
    return (
        <Media query="(max-width: 750px)">
            { matches => matches ?  nav('column', navOpacity) : nav('row', navOpacity)}
        </Media>
    )}

export default Nav;
