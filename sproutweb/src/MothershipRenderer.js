import React, { Component } from 'react';
import AboutMothership from './AboutMothership.js'

//this class passes the info needed for each page into that page
//and returns it as an obj. Selection data and changes to that data
//(plants, system type, bin no, etc) is held in this prop
//maybe import some class to do all the combo needed for bin generation
class MothershipRenderer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 0,
            otherInfo: {}
        }
    }

    render() {
        var returnable = {}
        switch (this.state.step) {
            case 0:
                returnable = AboutMothership
                break;
        
            default:
                break;
        }
        return returnable
    }
}

export default MothershipRenderer