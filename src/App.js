import React, { Component } from 'react'
import Header from './Header.js';
import LandingPage from './LandingPage.js';
import Login from './Login.js'
import SignUp from './SignUp.js'
import PrivateRoute from './PrivateRoute.js';
import Todos from './Todos.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

export default class App extends Component {

  state = {
    token: localStorage.getItem('TOKEN') || '',
    email: localStorage.getItem('EMAIL') || '',
  }

  handleStateChange = (email, token) => {
    localStorage.setItem('TOKEN', token);
    localStorage.setItem('EMAIL', email);

    this.setState({
      token: token,
      email: email
    })
  }

  handleLogout = () => {
    localStorage.setItem('TOKEN', '');
    localStorage.setItem('EMAIL', '');

    this.setState({
      token: '',
      email: ''
    })
  }

  render() {
    return (
      <div className="searchpage-main">
        <Router>
          <Header
            email={this.state.email}
            handleLogout={this.handleLogout}
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
            <PrivateRoute
              exact
              path='/todos'
              token={this.state.token}
              render={(routerProps) => <Todos
                {...routerProps}
                token={this.state.token}
              />} />
          </Switch>
        </Router>
      </div >

    )
  }
}