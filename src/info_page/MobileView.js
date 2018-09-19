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
let poop = glove;
let planet = glove;

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

const infoDesktopStyle = { 
  margin: '0',
  height: '100%',
  padding: '0', 
  width: '100%', 
  background: 'white',
  textAlign: 'center',
}
class MobileView extends Component {

    render() {
        return (
            <div style={infoDesktopStyle} >
                <HamBurgerNav />
                <h1 style={{marginTop: '2em'}} >Info</h1>
                <section stlye={{textAlign: 'center'}} >
                  <h2 className="header_info_mobile" >Why Elevated Protection?</h2>
                    <div style={{width: '100%', margin: '0 auto'}} >
                        <img src={diagram} width={window.innerWidth > 500 ? '440' : window.innerWidth} height="auto" alt="Diagram of ep mouthguard" />
                    </div>
                  <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} >
                    {data.map( (d, index) => <img key={index} src={d.url} height='30px' alt={d.title} /> )}
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
      <h2 className="header_info_mobile" >Tech/Features</h2>
        {data.map((d, i) => (
              <div key={i} style={{ textAlign: 'center' }} >
                <h2 style={{ fontSize: '1em', marginLeft: '0.5em'  }} >{d.title}</h2>
                <p style={{fontSize: '1em'}} >{d.text}</p>
              </div>
        ))}
    </div>
  )
}
export default MobileView;