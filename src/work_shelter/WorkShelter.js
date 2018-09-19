//node modules
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//images
import workShelter from './work_shelter.jpg';


export default class WorkShelter extends Component {
    state = {
        open: false,
      };
    
      handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
    render(){
        return this.props.buttonMode ? 
                    <WorkShelterButtonMode open={this.state.open} handleClickOpen={this.handleClickOpen} handleClose={this.handleClose}  /> 
                    : 
                    <WorkShelterMessageMode />
        
    }     
}

const WorkShelterButtonMode = ({ handleClickOpen, handleClose, open }) => (
  <div style={{display: 'flex', justifyContent: 'flex-end', marginRight: '2em', marginTop: '1em'}} >
    <p style={{marginRight: '1em'}} >Elevated Protection is proud to work with </p>
    <img src={workShelter} alt="Work + Shelter" height="100" width="100" onClick={handleClickOpen} />
    <Message open={open} handleClose={handleClose}  />
  </div>
)

const WorkShelterMessageMode = () => (
  <div style={{display: 'flex', justifyContent: 'center', marginTop: '1em', flexWrap: window.screen.availWidth > 430 ? 'nowrap' : 'wrap'}}>
    <img src={workShelter} alt="Work + Shelter" height="100" width="100" />
    <p style={{marginRight: '1em'}} >
      "WORK + SHELTER is an ethical factory that employs impoverished women in New Delhi, India. By buying our products, you give our employees an economic agency that affords them more control and dignity in their lives."
    </p>
  </div>
)

const Message = ({ open, handleClose }) => {
    return (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title"><p>Work + Shelter and Elevated Protection</p></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p>
               "WORK + SHELTER is an ethical factory that employs impoverished women in New Delhi, India. By buying our products, you give our employees an economic agency that affords them more control and dignity in their lives."
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