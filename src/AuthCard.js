import React, { Component } from 'react'
import { Card, Toolbar, Typography, AppBar, TextField, InputAdornment, CardContent, Button } from '@material-ui/core';
import { loginCardStyling, cardContentStyling, textFieldStyling } from './constants.js';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';


export default class AuthCard extends Component {
    render() {
        return (
            <Card raised={true} style={loginCardStyling} >
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            {this.props.cardLabel}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <CardContent style={cardContentStyling}>
                    <TextField
                        id="email-input"
                        style={textFieldStyling}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MailIcon />
                                </InputAdornment>
                            )
                        }}
                        onChange={(e) => (this.props.state.email = e.target.value)}
                    />
                    <TextField
                        id="password-input"
                        type="password"
                        style={textFieldStyling}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            )
                        }}
                        onChange={(e) => (this.props.state.password = e.target.value)}

                    />
                    <Button
                        variant="contained"
                        color="primary"
                        style={textFieldStyling}
                        onClick={this.props.handleClick}
                    >Submit</Button>
                </CardContent>
            </Card >

        )
    }
}
