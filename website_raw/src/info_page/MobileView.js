//node modules
import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import HamBurgerNav from '../hamburger_nav/HamBurgerNav';


//components
import WorkShelter from '../work_shelter/WorkShelter'

//images
import diagram from './images/Diagram_m.jpg';
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

class MobileView extends Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render() {
      return (
          <div className="container">
              <HamBurgerNav />
              <h1 className="main-header-mobile">Info</h1>
              <section>
                <h2 className="header_info_mobile" >Why Elevated Protection?</h2>
                  <div className="diagram-image-mobile" >
                      <img src={diagram} width={window.innerWidth > 500 ? '440' : window.innerWidth} height="auto" alt="Diagram of ep mouthguard" />
                  </div>
              </section>
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
      <h2 className="header_info_mobile" >Tech/Features</h2>
        {data.map((d, i) => (
              <div className="tech-feature-content" key={i}>
                <h2 className="sub-header-mobile">{d.title}</h2>
                <p className="fontSize">{d.text}</p>
              </div>
        ))}
    </div>
  )
}
export default MobileView;