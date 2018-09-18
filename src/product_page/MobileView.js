import React, { Component } from 'react';
import Slider from "react-slick";
import HamBurgerNav from '../HamBurgerNav';
import Divider from '@material-ui/core/Divider';
import WorkShelter from '../work_shelter/WorkShelter'

// images
import SoftShell from './images/mobile/SoftShell.jpg'

// images - mobile
import GB1M from './images/mobile/EP_ClassicGuard_Black1_m.jpg';
import GB2M from './images/mobile/EP_ClassicGuard_Black2_m.jpg';
import GW1M from './images/mobile/EP_ClassicGuard_White1_m.jpg';
import GW2M from './images/mobile/EP_ClassicGuard_White2_m.jpg';
import Tees_M from './images/mobile/EP_ClassicTees_SlantStack_m.jpg'

//image - tablet

import GB1T from './images/mobile/EP_ClassicGuard_Black1_768.jpg';
import GB2T from './images/mobile/EP_ClassicGuard_Black2_768.jpg';
import GW1T from './images/mobile/EP_ClassicGuard_White1_768.jpg';
import GW2T from './images/mobile/EP_ClassicGuard_White2_768.jpg';
import Tees_T from './images/mobile/EP_ClassicTees_SlantStack_500.jpg'

// image variables
const blackMouthguardImages = [
    {
        title: 'Black Mouthguard Front View',
        mobile: GB2M,
        tablet: GB2T
    },
    {
        title:'Black Mouthguard Side View',
        mobile: GB1M,
        tablet: GB1T
    }
]
const whiteMouthgaurdImages = [
    {
        title: 'White Mouthguard Front View',
        mobile: GW2M,
        tablet: GW2T
    },
    {
        title:'White Mouthguard Side View',
        mobile: GW1M,
        tablet: GW1T
    }
]

const T_ShirtImages = {
    title: 'Icon T-Shirts',
    mobile: Tees_M,
    tablet: Tees_T
}

const softShellImage = {
    title: 'Beige Soft Shell Case',
    mobile: SoftShell
}

//////
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
                    <h2 className="mobile" >Mouthguards</h2>
                    <Carousel images={blackMouthguardImages} />
                    <br />
                    <br />
                    <Carousel images={whiteMouthgaurdImages} />
                    <br />
                    <br />
                    <Divider />
                    <br />
                    <h2 className="mobile" >Soft Shell Carrying Case</h2>
                    <br />
                    <br />
                    <div style={{width: '100%', margin: '0 auto'}} >
                        <img 
                          src={softShellImage.mobile} 
                          alt={softShellImage.title} 
                          srcSet={ `${softShellImage.mobile} 720w` }
                          sizes= {` 
                                (max-width: 329px) 320px,
                                (max-width: 376px) 375px,
                                (max-width: 426px) 425px, 
                                (min-width: 430px) 500px,
                                `}
                          height="auto" 
                        />
                    </div>
                    <WorkShelter />
                    <h2 className="mobile" >Icon Tee</h2>
                    <br />
                    <br />
                    <div style={{width: '100%', margin: '0 auto'}} >
                        <img 
                          src={T_ShirtImages.mobile}
                          alt={T_ShirtImages.title}
                          srcSet={ `${T_ShirtImages.mobile} 415w, ${T_ShirtImages.tablet} 518w` }
                          sizes={`
                                (max-width: 329px) 320px,
                                (max-width: 376px) 375px,
                                (max-width: 426px) 425px, 
                                (min-width: 430px) 500px,
                                `}
                          height="auto" 
                        />
                    </div>
                </section>
                <section style={{paddingBottom: '1em', fontSize: '1em'}} paddingBottom >
                    <p>Elevated Protection Limited</p>
                    <p>2 Rolland Rd., Toronto, ON Canada M4G 1V5</p>
                    <p>info@elevatedprotection.ca</p>
                </section>
            </div>
        )
    }
}

const Carousel = ({ images }) => {
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
                {images.map( image => <img 
                                        src={image.mobile}
                                        srcSet={ `${image.mobile} 461w, ${image.tablet} 768w` }
                                        sizes={`
                                            (max-width: 426px) ${window.screen.availWidth}px,
                                            (min-width: 430px) ${window.screen.availWidth}px,
                                            `}
                                        alt={image.title} 
                                        key={image.title} 
                                        height="auto" 
                                    />)
                }
            </Slider>
        </div>
    );
  }
  export default MobileView;