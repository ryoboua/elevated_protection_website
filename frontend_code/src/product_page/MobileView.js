import React, { Component } from 'react';
import Slider from "react-slick";
import Divider from '@material-ui/core/Divider';
import HamBurgerNav from '../hamburger_nav/HamBurgerNav';
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

class MobileView extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
      }
    render() {
        return(
            <div className="container">
                <HamBurgerNav />
                <h1 className="main-header-mobile">Products</h1>
                <section>
                    <h1 className="secondary-header-mobile">Mouthguards</h1>
                    <Carousel images={blackMouthguardImages} />
                    <br />
                    <br />
                    <Carousel images={whiteMouthgaurdImages} />
                    <br />
                    <br />
                    <Divider />
                    <br />
                    <h1 className="secondary-header-mobile">Soft Shell Carrying Case</h1>
                    <br />
                    <br />
                    <div className="mobile-image-container">
                        <img 
                          src={softShellImage.mobile} 
                          alt={softShellImage.title} 
                          srcSet={ `${softShellImage.mobile} 720w` }
                          // if the viewport is 501px wide or wider, image width is 500px
                          // if the viewport width is 500px wide or less, image width will have device width.
                          // when on a desktop window.innerWidth gets initialize to a value greater then 500 so I return 300px
                          // mobile devices will return a value lower than 500px which should be the width of the device in px
                          sizes= {` 
                                (min-width: 501px) 500px, 
                                (max-width: 500px) ${window.innerWidth > 500 ? '300' : window.innerWidth}px,
                                `}
                          height="auto" 
                        />
                    </div>
                    <WorkShelter />
                    <br />
                    <Divider />
                    <br />
                    <h1 className="secondary-header-mobile">Icon Tee</h1>
                    <br />
                    <br />
                    <div className="mobile-image-container">
                        <img 
                          src={T_ShirtImages.mobile}
                          alt={T_ShirtImages.title}
                          srcSet={ `${T_ShirtImages.mobile} 415w, ${T_ShirtImages.tablet} 518w` }
                          sizes={`
                                (min-width: 501px) 500px, 
                                (max-width: 500px) ${window.innerWidth > 500 ? '300' : window.innerWidth}px,
                                `}
                          height="auto" 
                        />
                    </div>
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
                                            (max-width: 426px) ${window.innerWidth}px,
                                            (min-width: 430px) ${window.innerWidth}px,
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