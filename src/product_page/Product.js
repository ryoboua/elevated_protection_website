import React, { Component } from 'react';
import HamBurgerNav from '../HamBurgerNav';
import Divider from '@material-ui/core/Divider';
import GB1 from './images/EP_ClassicGuard_Black1.jpg';
import GB2 from './images/EP_ClassicGuard_Black2.jpg';
import GW1 from './images/EP_ClassicGuard_White1.jpg';
import GW2 from './images/EP_ClassicGuard_White2.jpg';
import Tees from './images/EP_ClassicTees_SlantStack.jpg';
import SoftShell from './images/SoftShell.jpg';

const homePageStyle = { 
    margin: '0',
    height: '100%',
    padding: '0', 
    width: '100%', 
    background: 'white',
    textAlign: 'center',
}

const secionStyle = {
}

const blackMouthGuard = [GB1, GB2]
const whiteMouthGuard = [GW1, GW2]


class Product extends Component {
    render() {
        return (
            <div  style={ homePageStyle } >
                <div>
                    <HamBurgerNav/>
                    <h1 style={{marginTop: '175px'}} >Product</h1>
                    <section style={secionStyle}>
                        <h2>Mouth Guard</h2>
                        {blackMouthGuard.map( url => <img src={url} style={{height: '600px', width: '400px', marginTop: '50px'}} />)}
                        <Divider />
                        {whiteMouthGuard.map( url => <img src={url} style={{height: '600px', width: '400px', marginTop: '50px'}} />)}
                    </section>
                </div>
            </div>
        )
    }
}
export default Product;