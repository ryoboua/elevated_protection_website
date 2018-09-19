import React, { Component } from 'react';
import Media from "react-media";
import Slider from "react-slick";
import Divider from '@material-ui/core/Divider';
import HamBurgerNav from '../hamburger_nav/HamBurgerNav';
import WorkShelter from '../work_shelter/WorkShelter'

// images
import GB1 from './images/desktop/EP_ClassicGuard_Black1_1080.jpg';
import GB2 from './images/desktop/EP_ClassicGuard_Black2_1080.jpg';
import GW1 from './images/desktop/EP_ClassicGuard_White1_1080.jpg';
import GW2 from './images/desktop/EP_ClassicGuard_White2_1080.jpg';
import Tees from './images/desktop/EP_ClassicTees_SlantStack_800.jpg';
import SoftShell from './images/desktop/SoftShell.jpg';

// image variables
const blackMouthguardImages = [
    {
        title: 'Black Mouthguard Front View',
        url: GB2,
    },
    {
        title:'Black Mouthguard Side View',
        url: GB1,
    }
]
const whiteMouthgaurdImages = [
    {
        title: 'White Mouthguard Front View',
        url: GW2,
    },
    {
        title:'White Mouthguard Side View',
        url: GW1,
    }
]

const TeeImage = {
    title: 'Icon T-Shirts',
    url: Tees,
}

const softShellImage = {
    title: 'Beige Soft Shell Case',
    url: SoftShell
}

const productDesktopStyle = { 
    margin: '0',
    height: '100%',
    padding: '0', 
    width: '100%', 
    background: 'white',
    textAlign: 'center',
}

class DesktopView extends Component {
    render() {
        return (
            <div  style={ productDesktopStyle } >
                    <HamBurgerNav />
                    <h1 className="main-header">Products</h1>
                    <section>
                        <h2 style={{textDecoration: 'none'}} >Mouthguards</h2>
                        <Carousel images={blackMouthguardImages} />
                        <Carousel images={whiteMouthgaurdImages} />
                        <br />
                        <Divider />
                        <br />
                        <h2 style={{textDecoration: 'none'}} >Soft Shell Carrying Case</h2>
                        <div style={{width: '720px', textAlign: "center", margin: '75px auto'}} >
                            <img src={softShellImage.url} width="720" height="auto" alt={softShellImage.title} />
                        </div>
                        <WorkShelter />
                        <br />
                        <Divider />
                        <br />
                        <h2 style={{textDecoration: 'none'}} >Icon Tee</h2>
                        <div style={{width: '800px', textAlign: "center", margin: '25px auto'}} >
                            <img src={TeeImage.url} width="800" height="auto" alt={TeeImage.title} />
                        </div>
                    </section>
                    <section style={{paddingBottom: '1em'}} >
                        <p>Elevated Protection Limited</p>
                        <p>2 Rolland Rd., Toronto, ON Canada M4G 1V5</p>
                        <p>info@elevatedprotection.ca</p>
                    </section>
            </div>
        )
    }
}

const Carousel = ({ images }) => {

    const SlideShow = ({images, width}) => {
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
            <div style={{width, textAlign: "center", margin: '75px auto'}} >
                <Slider {...settings}>
                    {images.map( (image, i) => <img 
                                            src={image.url} 
                                            width="auto" 
                                            height="auto" 
                                            alt={image.title}
                                            key={i}
                                          />
                                )
                        }
                </Slider>
            </div>
        )
    }
    return (
        <Media query="(max-width: 1001px)">
            {matches => matches ? <SlideShow images={images} width="750px" /> : <SlideShow images={images} width="1000px"/> }
        </Media>
    )
  }

export default DesktopView;