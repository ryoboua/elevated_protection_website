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
        paddingBottom: '1em',
        flexDirection: `${direction}`,
        opacity,
        transition: 'all 3s',
    })
    const nav = (direction = 'column', opacity, fontSize) => (
        
        <div className="navStyle" style={ navStyle(direction, opacity)} >
                {navOptions.map( item => (
                    <h1 key={item} style={ {...menuItems, fontSize } }>
                        {item}
                    </h1>
                ))}
        </div>
    )
    return (
        <Media query="(max-width: 750px)">
            { matches => matches ?  nav('column', navOpacity, '1.2em') : nav('row', navOpacity)}
        </Media>
    )}

export default Nav;
