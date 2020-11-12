import React, { Component } from 'react'
import { ButtonGroup, Button, Toolbar, AppBar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div style={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant='h6' edge='start' style={{ flexGrow: 1 }}>TO-DO</Typography>

                        {/* this.props.baseState.token
                                ?
                                this.props.baseState.email
                                : */}
                        <ButtonGroup variant="text"
                            color="inherit"
                            aria-label="outlined primary button group"
                            style={{ justifySelf: 'end' }}>
                            <Button aria-label="login" component={Link} to='/login'>Log In</Button>
                            <Button aria-label="signup" component={Link} to='/signup'>Sign Up</Button>
                        </ButtonGroup>

                    </Toolbar>
                </AppBar>
            </div >
        )
    }
}
