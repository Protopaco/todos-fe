import React, { Component } from 'react'
import { Paper } from '@material-ui/core';
import { backgroundDiv, landingPageLogoStyling, landingPagePaperStyling } from './constants.js';
export default class LandingPage extends Component {
    render() {
        return (
            <div style={backgroundDiv}>
                <Paper style={landingPagePaperStyling}>
                    <img alt='todo logo' src="./logo.png" style={landingPageLogoStyling} ></img>
                </Paper>
            </div>
        )
    }
}
