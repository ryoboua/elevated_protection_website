import React from 'react';
import Media from "react-media";
import { Link } from 'react-router-dom';

import './nav.css'

const Nav = ({navOpacity}) => {
    const navOptions = [
        { title: 'Products', url: '/products' },
        { title: 'Info', url: '/info' },
        { title: 'Contact', url: '/contact' }
    ]
    const navStyle = (direction, opacity) => ({ 
        flexDirection: `${direction}`,
        opacity,
    })
    const nav = (direction = 'column', opacity, fontSize) => (
        
        <div className="nav" style={ navStyle(direction, opacity) } >
                {navOptions.map( (item, i) => (
                        <h1 className="menu-item" key={i} style={{ fontSize }}>
                            <Link className="link" to={item.url} >
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
