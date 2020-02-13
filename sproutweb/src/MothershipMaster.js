import React, { Component } from 'react';
import './App.css';
import MothershipRenderer from './MothershipRenderer.js';
import { render } from 'react-dom';

//sort of functions as a controller class
//https://frontarm.com/james-k-nelson/controller-components/

//this class will launch checkout when the walkthrough
//build is over; no reason for checkout page to access all
//the info on plant/system selection. MothershipMaster will
//send all relevant info for that as a prop.
class MothershipMaster extends Component {
  constructor(props) {
    this.state = { selectionFinished: false }
  }
  render() {
    <div>Mothership stuff is here</div>
    if (this.state.selectionFinished) { return <Checkout></Checkout> }
    //no prop passing yet bc I'm not sure what they are rn
    else { return <MothershipRenderer></MothershipRenderer>}
  }
}

export default MothershipMaster
