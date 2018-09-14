import React, { Component } from 'react';
import Media from "react-media";
import Slider from "react-slick";
import HamBurgerNav from '../HamBurgerNav';
import Divider from '@material-ui/core/Divider';
import GB1 from './images/EP_ClassicGuard_Black1.jpg';
import GB2 from './images/EP_ClassicGuard_Black2.jpg';
import GW1 from './images/EP_ClassicGuard_White1.jpg';
import GW2 from './images/EP_ClassicGuard_White2.jpg';
import Tees from './images/EP_ClassicTees_SlantStack.jpg';
import SoftShell from './images/SoftShell.jpg';

import GB1M from './images/EP_ClassicGuard_Black1_m.jpg';


const blackMouthGuardDesktop = [GB1, GB2]
const whiteMouthGuardDesktop = [GW1, GW2]
const blackMouthGuardMobile = [GB1M, GB1M]

const homePageStyle = { 
    margin: '0',
    height: '100%',
    padding: '0', 
    width: '100%', 
    background: 'white',
    textAlign: 'center',
}

class Product extends Component {
    render(){
        return (
            <Media query="(max-width: 750px)">
                { matches => matches ?  <MobileView /> : <DesktopView /> }
            </Media>
        )
    }
}

class MobileView extends Component {
    render() {
        return(
            <div style={ homePageStyle }>
                <HamBurgerNav/>
                <h1 style={{marginTop: '2em'}} >Product</h1>
                <Carousel images={blackMouthGuardMobile} />

            </div>
        )
    }
}

class DesktopView extends Component {
    render() {
        return (
            <div  style={ homePageStyle } >
                    <HamBurgerNav/>
                    <h1 style={{marginTop: '175px'}} >Products</h1>
                    <section>
                        <h2>Mouth Guard</h2>
                        <Carousel images={blackMouthGuardDesktop} />
                        <Carousel images={whiteMouthGuardDesktop} />
                        <br />
                        <Divider />
                        <br />
                        <h2>Soft Shell</h2>
                        <div style={{width: window.screen.availWidth > 1441 ? '60%' : '70%', textAlign: "center", margin: '75px auto'}} >
                            <img src={SoftShell} width="auto" height="auto" />
                        </div>
                        <br />
                        <Divider />
                        <br />
                        <h2>T-Shirts</h2>
                        <div style={{width: window.screen.availWidth > 1441 ? '60%' : '70%', textAlign: "center", margin: '75px auto'}} >
                            <img src={Tees} width="auto" height="957" />
                        </div>
                    </section>
            </div>
        )
    }
}

const Carousel = ({...props, images}) => {
    const screenWidth = window.screen.availWidth
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
    }
    return (
        
        <div style={{width: screenWidth > 1441 ? '60%' : '70%', textAlign: "center", margin: '75px auto'}} >
            <Slider {...settings}>
                {images.map(image => <img src={image} width="auto" height="759" />)}
            </Slider>
        </div>
    );
  }
export default Product;