import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import { landingPagePaperStyling } from './constants.js'
import AuthCard from './AuthCard.js';
import { fetchAuthLogin } from './FetchSuite.js'



export default class Login extends Component {
    cardLabel = 'Login';
    state = {
        email: '',
        password: '',
    }

    handleClick = () => {
        const returnedObject = fetchAuthLogin({
            email: this.state.email,
            password: this.state.password
        })
        this.props.handleStateChange({
            email: returnedObject.email,
            token: returnedObject.token
        })
    }

    render() {
        return (
            <Paper style={landingPagePaperStyling}>
                <AuthCard
                    cardLabel={this.cardLabel}
                    state={this.state}
                    handleClick={this.handleClick}
                />
            </Paper >
        )
    }
}
