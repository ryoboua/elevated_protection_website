//node modules
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

//components
import HamBurgerNav from '../HamBurgerNav';

//images
import diagram from './Diagram.jpg';
import workShelter from './work_shelter.jpg';
import bomb from './bomb.jpg';
import chomp from './chomp.jpg';
import glove from './glove.jpg';
import vtech from './vtech.jpg';
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
class DesktopView extends Component {
    state = {
        open: false,
      };
    
      handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

    render() {
        return (
            <div style={infoDesktopStyle} >
                <HamBurgerNav />
                <h1 className="main-header" >Info</h1>
                <section>
                  <h2>Why Elevated proctection?</h2>
                  <div style={{width: window.screen.availWidth > 1441 ? '60%' : '70%', textAlign: "center", margin: '75px auto'}} >
                    <img src={diagram} width="auto" height="420" />
                  </div>
                  <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} >
                    {data.map( (d, index) => <img key={index} src={d.url} height='100px' /> )}
                  </div>
                </section>
                  <br />
                  <Divider />
                  <br />
                <section>
                  <TechFeatures data={data} />
                </section>
                <section>
                  <div style={{display: 'flex', justifyContent: 'flex-end', marginRight: '2em', marginTop: '1em'}} >
                    <p style={{marginRight: '1em'}} >Elevated Proctection is proud to work with </p>
                    <img src={workShelter} height="100" width="100" onClick={this.handleClickOpen} />
                    <Message open={this.state.open} handleClose={this.handleClose}  />
                  </div>
                </section>

            </div>
        )
    }
}
const TechFeatures = ({...props, data}) => {
  
  return (
    <div>
      <h2>Tech/Features</h2>
      <ul>
        {data.map((d, i) => (
            <li style={{display: 'flex', flexWrap: 'wrap'}} key={i} elevation="5" >
              <img src={d.url} height="100" width="105" />
              <h2 style={{width: '60%'}} >{d.title}</h2>
              <p style={{width: '100%'}} >{d.text}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}
const Message = ({...props, open, handleClose}) => {
    return (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title"><p>Work + Shelter and Elevated Proctection</p></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p>
               Work + Shelter is an ethical factory that employs impoverished women in New Delhi, India. By buying our products, you give our employees an economic agency that affords them more coutrol and dignity in their lives.
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
        </Dialog>
    )
}

export default DesktopView;