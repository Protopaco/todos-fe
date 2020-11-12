import React, { Component } from 'react'
import Header from './Header.js';
import LandingPage from './LandingPage.js';
import Login from './Login.js'
import SignUp from './SignUp.js'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

export default class App extends Component {
  state = {
    token: '',
    email: ''
  }

  handleStateChange = (passedState) => {
    this.setState = (passedState);
  }

  render() {
    return (
      <div className="searchpage-main">
        <Router>
          <Header
            baseState={this.state}
          />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <LandingPage {...routerProps} />}
            />
            <Route
              path="/login"
              exact
              render={(routerProps) => <Login {...routerProps}
                baseState={this.state.state}
                handleStateChange={this.handleStateChange}
              />}
            />
            <Route
              path="/signup"
              exact
              render={(routerProps) => <SignUp {...routerProps}
                baseState={this.state.state}
                handleStateChange={this.handleStateChange}

              />}
            />
          </Switch>
        </Router>
      </div >

    )
  }
}