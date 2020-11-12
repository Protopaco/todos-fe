import React, { Component } from 'react'
import { Paper } from '@material-ui/core';
import { landingPageLogoStyling, landingPagePaperStyling } from './constants.js';
export default class LandingPage extends Component {
    render() {
        return (
            <Paper style={landingPagePaperStyling}>
                <img alt='todo logo' src="./logo.png" style={landingPageLogoStyling} ></img>
            </Paper>
        )
    }
}
