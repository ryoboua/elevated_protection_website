import React from 'react'
import './workshelter.css'

//images
import workShelter from './work_shelter.jpg';

export default () => (
    <div>
    <h1 style={{ textDecoration: 'none', textAlign: 'left'}} >Why Elevated Protection?</h1>
    <div style={{ display: 'flex'}}>
        <img style={{ padding: '0 1em'}} src={workShelter} alt="Work + Shelter" height="100" width="100"/>
        <h1 style={{fontSize: '24px', padding: '0 1em'}}>"WORK + SHELTER is an ethical factory that employs impoverished women in New Delhi, India. By buying our products, you give our employees an economic agency that affords them more control and dignity in their lives."</h1>  
    </div>
  </div>
)