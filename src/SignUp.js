import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import { landingPagePaperStyling } from './constants.js'
import AuthCard from './AuthCard.js';
import { fetchAuthSignUp } from './FetchSuite.js'



export default class SignUp extends Component {
    cardLabel = 'Sign Up';

    state = {
        email: '',
        password: '',
    }

    handleClick = async () => {
        console.log('------------------------------------');
        console.log(`this.state.email:  ${this.state.email}`);
        console.log('------------------------------------');
        console.log('------------------------------------');
        console.log(`this.state.password:  ${this.state.password}`);
        console.log('------------------------------------');

        const returnedObject = await fetchAuthSignUp({
            email: this.state.email,
            password: this.state.password
        });
        console.log(returnedObject)
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
