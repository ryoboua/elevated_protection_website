import React, { Component } from 'react';
import Media from "react-media";
import MobileView from './MobileView';
import DesktopView from './DesktopView';


class Product extends Component {
    render(){
        return (
            <Media query="(max-width: 769px)">
                { matches => matches ?  <MobileView /> : <DesktopView /> }
            </Media>
        )
    }
}

export default Product;