import React from 'react';
import Media from "react-media";
import { Link } from 'react-router-dom';

const Nav = ({navOpacity}) => {
    const navOptions = [
    { title: 'Products', url: '/products' },
    { title: 'Info', url: '/info' },
    { title: 'Contact', url: '/contact' }
    ]
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
        background: 'black',
    })
    const nav = (direction = 'column', opacity, fontSize) => (
        
        <div className="navStyle" style={ navStyle(direction, opacity)} >
                {navOptions.map( (item, i) => (
                    
                        <h1 key={i} style={ {...menuItems, fontSize } }>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to={item.url} >
                                {item.title}
                            </Link>
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
