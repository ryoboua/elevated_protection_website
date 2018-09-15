import React, { Component } from 'react';
import Media from "react-media";
import MobileView from './MobileView';
import DesktopView from './DesktopView';


class InfoPage extends Component {
    render(){
        return (
            <Media query="(max-width: 750px)">
                { matches => matches ?  <MobileView /> : <DesktopView /> }
            </Media>
        )
    }
}

export default InfoPage;