import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch,
  // Redirect
} from "react-router-dom";
import MenuBar from './components/MenuBar';
import Login from './components/LoginModal/Login';
import PrivateRoute from './components/Auth/PrivateRoute';
import vaccineList from './components/RenderVacs/vaccineList'
// import PVRec2 from './Pages/PVRec';
import Register from './components/Register';
// import RoundAbout from './components/RoundAbout';
// import { Jumbotron, Button, Alert, Fade } from 'reactstrap';

import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: false,
      authenticated: false,
      private: false,
      // redirect: false
    }
    this.connectToServer = this.connectToServer.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  connectToServer () {
    fetch('/login');
  }

  componentDidMount () {
    this.connectToServer();
  }

  toggle (e) {
    e.preventDefault();
    console.log('this was clicked');
    this.setState({
      isOpen: !this.state.isOpen,
      authenticated: !this.state.authenticated
    }, () => {
      if (!this.state.authenticated) {
        sessionStorage.removeItem('authenticated');
      }
    });
  }

  render () {
    return (
      <div className="container">
        <Router>
          <div>
            <MenuBar auth={this.state.authenticated} toggle={this.toggle} />
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={() => <Login history={this.props.history} showModal={this.state.isOpen} toggle={this.toggle} />} />
              <Route path="/register" component={Register} />
              <Route path="/test" component={vaccineList} />
              {/* <PrivateRoute path="/private" component={PVRec} /> */}
              <PrivateRoute path="/private" component={vaccineList} />
            </Switch>

          </div>
        </Router>

      </div>
    );
  }
}

export default App;
