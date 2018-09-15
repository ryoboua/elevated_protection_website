import React, { Component } from 'react';
import Slider from "react-slick";
import HamBurgerNav from '../HamBurgerNav';
import Divider from '@material-ui/core/Divider';
import GB1M from './images/mobile/EP_ClassicGuard_Black1_m.jpg';
import GB2M from './images/mobile/EP_ClassicGuard_Black2_m.jpg';
import GW1M from './images/mobile/EP_ClassicGuard_White1_m.jpg';
import GW2M from './images/mobile/EP_ClassicGuard_White2_m.jpg';
import SoftShell from './images/mobile/SoftShell.jpg'
import Tees from './images/mobile/EP_ClassicTees_SlantStack_m.jpg'

const blackMouthGuardMobile = [GB1M, GB2M]
const whiteMouthGuardMobile = [GW1M,GW2M]

const productMobileStyle = {
    margin: '0',
    height: '100%',
    padding: '0', 
    width: '100%', 
    background: 'white',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
}

class MobileView extends Component {
    render() {
        return(
            <div style={ productMobileStyle }>
                <HamBurgerNav/>
                <h1 style={{marginTop: '2em'}} >Products</h1>
                <section>
                    <h2 className="mobile" >Mouth Guards</h2>
                    <Carousel images={blackMouthGuardMobile} />
                    <br />
                    <br />
                    <Carousel images={whiteMouthGuardMobile} />
                    <br />
                    <br />
                    <Divider />
                    <br />
                    <h2 className="mobile" >Soft Shell</h2>
                    <br />
                    <br />
                    <div style={{width: '100%', margin: '0 auto'}} >
                        <img src={SoftShell} width={window.screen.availWidth} height="auto" />
                    </div>
                    <h2 className="mobile" >T-Shirts</h2>
                    <br />
                    <br />
                    <div style={{width: '100%', margin: '0 auto'}} >
                        <img src={Tees} width={window.screen.availWidth} height="auto" />
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
        arrows: false,
    }
    return (
        <div>
            <Slider {...settings}>
                {images.map(image => <img src={image} width={window.screen.availWidth} height="auto" />)}
            </Slider>
        </div>
    );
  }
  export default MobileView;