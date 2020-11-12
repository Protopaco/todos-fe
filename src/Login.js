import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import { landingPagePaperStyling } from './constants.js'
import AuthCard from './AuthCard.js';
import { fetchAuthLogin } from './FetchSuite.js'



export default class Login extends Component {
    cardLabel = 'LOGIN';
    state = {
        email: '',
        password: '',
    }

    handleClick = async () => {
        try {
            const returnedObject = await fetchAuthLogin({
                email: this.state.email,
                password: this.state.password
            })
            this.props.handleStateChange({
                email: returnedObject.email,
                token: returnedObject.token
            })
            this.props.history.push('/todos');

        } catch (e) {
            alert(e.message)
        }
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
