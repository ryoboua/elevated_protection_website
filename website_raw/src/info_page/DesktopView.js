//node modules
import React, { Component } from 'react';
import WorkShelter from '../work_shelter/WorkShelter'
import HamBurgerNav from '../hamburger_nav/HamBurgerNav';
import Paper from '@material-ui/core/Paper';


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
    height: '82.5',
    width: '82.5',
  },
  {
    title: 'Fits Like a Glove',
    url: glove,
    text: text.glove,
    height: '82.5',
    width: '82.5',
  },
  {
    title: 'V - Tech',
    url: vtech,
    text: text.vtech,
    height: '82.5',
    width: '82.5',
  },
  {
    title: 'Chomp Pads',
    url: chomp,
    text: text.chomp,
    height: '82.5',
    width: '82.5',
  },{
    title: 'No B.S.!',
    url: poop,
    text: text.poop,
    height: '100',
    width: '100',
  },{
    title: 'Ethically Sourced and Designed in Canada',
    url: planet,
    text: text.planet,
    height: '100',
    width: '100',
  }
]

const TechFeatures = ({ data }) => {
  return (
    <div>
      <h2 className="secondary-header" >Tech/Features</h2>
        {data.map((d, i) => (
              <div key={i} className="grid-container">
                <div className="image">
                <img src={d.url} height={d.height} width={d.width} alt="" />
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

class DesktopView extends Component {
    state = {
        open: false,
        screenWidth: window.innerWidth,
      };
      componentDidMount(){
        window.scrollTo(0, 0)
      }
    
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
                  <Paper className="paper" elevation={12}>
                    <h2 className="secondary-header" >Why Elevated Protection?</h2>
                    <div className="diagram-image">
                      <img src={diagram} alt="Mouthguard Diagram" width="600" height="auto" />
                    </div>
                  </Paper>
                </section>
                  <br />
                  <br />
                <section>
                <Paper className="paper" elevation={12}>
                  <TechFeatures data={data} />
                </Paper>
                </section>
                <br />
                <br />
                <section>
                  <WorkShelter />
                </section>
            </div>
        )
    }
}

export default DesktopView