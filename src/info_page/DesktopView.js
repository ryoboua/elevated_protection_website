//node modules
import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import WorkShelter from '../work_shelter/WorkShelter'
import HamBurgerNav from '../hamburger_nav/HamBurgerNav';


//images
import diagram from './images/Diagram_765.jpg';
import bomb from './images/bomb.jpg';
import chomp from './images/chomp.jpg';
import glove from './images/glove.jpg';
import vtech from './images/vtech.jpg';
import poop from './images/poop.png';
import planet from './images/planet.png';

const text = {
  bomb: 'Hard Copolymer TPE coats the outer side of the mouthguard to offer the most proctection in high impact situations.',
  glove: 'Soft gel elastomer fills the inside of the mouthguard for the perfect self fit, while offering resistance to multiple low impact forces.',
  vtech: 'Engineered V incisions direct impact forces away from the frontal incisors and spread impact forces across the surface are of the mouthguard',
  chomp: 'Chomp Pads provide bite protection and TMJ stabilization, preventing the jaw from jarring during head impact.',
  poop: 'Transparency from the concept to completion of every product.',
  planet: 'All products are designed in Canada and produced to the highest ethical standards of fair trade.'
}

const data = [
  {
    title: 'Bomb - Proof',
    url: bomb,
    text: text.bomb,
  },
  {
    title: 'Fits Like a Glove',
    url: glove,
    text: text.glove,
  },
  {
    title: 'V - Tech',
    url: vtech,
    text: text.vtech,
  },
  {
    title: 'Chomp Pads',
    url: chomp,
    text: text.chomp,
  },{
    title: 'No B.S.!',
    url: poop,
    text: text.poop,
  },{
    title: 'Ethically Sourced and Designed in Canada',
    url: planet,
    text: text.planet
  }
]

class DesktopView extends Component {
    state = {
        open: false,
        screenWidth: window.innerWidth,
      };
    
      handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
    render() {
        return (
            <div className="container">
                <HamBurgerNav />
                <h1 className="main-header" >Info</h1>
                <section>
                  <h2 className="secondary-header" >Why Elevated Protection?</h2>
                  <div className="diagram-image">
                    <img src={diagram} alt="Mouthguard Diagram" width="765" height="auto" />
                  </div>
                  <div className="single-line">
                    {data.map( (d, index) => <img key={index} src={d.url} alt="" height='100px' /> )}
                  </div>
                </section>
                  <br />
                  <Divider />
                  <br />
                <section>
                  <TechFeatures data={data} />
                </section>
                <section>
                  <WorkShelter buttonMode />
                </section>

            </div>
        )
    }
}
const TechFeatures = ({ data }) => {
  
  return (
    <div>
      <h2 className="secondary-header" >Tech/Features</h2>
        {data.map((d, i) => (
              <div key={i} className="grid-container">
                <div className="image">
                <img src={d.url} height="100" width="105" alt="" />
                </div>
                <div className="text">
                  <h2 className="underline">{d.title}</h2>
                  <p className="marginRight2em">{d.text}</p>
                </div>
              </div>
        ))}
    </div>
  )
}

export default DesktopView;