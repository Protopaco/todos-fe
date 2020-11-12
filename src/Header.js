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
                        {
                            this.props.email
                                ?
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant="h6">
                                        {this.props.email}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        color="inherit"
                                        aria-label="logout button"
                                        style={{ marginLeft: '30px' }}
                                        onClick={this.props.handleLogout}
                                    >
                                        Logout</Button>
                                </div>
                                :
                                <ButtonGroup variant="outlined"
                                    color="inherit"
                                    aria-label="outlined primary button group"
                                    style={{ justifySelf: 'end' }}>
                                    <Button aria-label="login" component={Link} to='/login'>Log In</Button>
                                    <Button aria-label="signup" component={Link} to='/signup'>Sign Up</Button>
                                </ButtonGroup>
                        }
                    </Toolbar>
                </AppBar>
            </div >
        )
    }
}
