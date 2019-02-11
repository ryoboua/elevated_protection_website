import React, { Component } from 'react';
import Media from "react-media";
import Slider from "react-slick";
import Divider from '@material-ui/core/Divider';
import HamBurgerNav from '../hamburger_nav/HamBurgerNav';
import WorkShelter from '../work_shelter/WorkShelter'

// images
import GB1 from './images/black_guard_side.jpg';
import GB2 from './images/black_guard.jpg';
import GW1 from './images/white_guard_side.jpg';
import GW2 from './images/white_guard.jpg';
import YG1 from './images/youth_guard_side.jpg';
import YG2 from './images/youth_guard.jpg';
import classicHoodie from './images/classic_hoodie.jpg'
import iconHoodie from './images/icon_hoodie.jpg'
import sealJacket from './images/seal_jacket.jpg'
import Tees from './images/desktop/EP_ClassicTees_SlantStack_800.jpg';
import SoftShell from './images/desktop/SoftShell.jpg';

// image variables

const classicHoodieImage = {
    title: 'classic black hoodie with elevated protection logo',
    url: classicHoodie
}

const iconHoodieImage = {
    title: 'Icon Hoodie',
    url: iconHoodie
}

const sealJacketImage = {
    title: 'Seal Jacket',
    url: sealJacket
}
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

const youthGuardIamges = [ 
    {
        title: 'Youth Mouthgaurd Front View',
        url: YG2,

    },
    {
        title: 'Youth Mouthguard Side View',
        url: YG1,
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

class DesktopView extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="container">
                    <HamBurgerNav />
                    <h1 className="main-header">Products</h1>
                    <section>
                        <h2 className="secondary-header">Mouthguards</h2>
                        <Carousel images={blackMouthguardImages} />
                        <br />
                        <Divider />
                        <br />
                        <Carousel images={whiteMouthgaurdImages} />
                        <br />
                        <Divider />
                        <br />
                        <h2 className="secondary-header">Youth Mouthguard</h2>
                        <Carousel images={youthGuardIamges} />
                        <br />
                        <Divider />
                        <br />
                        <h2 className="secondary-header">Classic Hoodie</h2>
                        <div className="">
                            <img src={classicHoodieImage.url} width="800" height="auto" alt={classicHoodieImage.title} />
                        </div>
                        <br />
                        <Divider />
                        <br />
                        <h2 className="secondary-header">Icon Hoodie</h2>
                        <div className="">
                            <img src={iconHoodieImage.url} width="800" height="auto" alt={iconHoodieImage.title} />
                        </div>
                        <br />
                        <Divider />
                        <br />
                        <h2 className="secondary-header">Seal Jacket</h2>
                        <div className="">
                            <img src={sealJacketImage.url} width="800" height="auto" alt={sealJacketImage.title} />
                        </div>
                        <br />
                        <Divider />
                        <br />
                        <h2 className="secondary-header">Soft Shell Carrying Case</h2>
                        <div className="soft-shell-container">
                            <img src={softShellImage.url} width="720" height="auto" alt={softShellImage.title} />
                        </div>
                        <WorkShelter />
                        <br />
                        <Divider />
                        <br />
                        <h2 className="secondary-header">Icon Tee</h2>
                        <div className="tee-container">
                            <img src={TeeImage.url} width="800" height="auto" alt={TeeImage.title} />
                        </div>
                    </section>
                    <br />
            </div>
        )
    }
}

const Carousel = ({ images }) => {

    const SlideShow = ({images, width}) => {
        const settings = {
            dots: true,
            infinite: true,
            speed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            pauseOnDotsHover: true,
            pauseOnFocus: true,
            pauseOnHover: false,

        }
        return (
            <div className="slider-container" style={{ width }} >
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