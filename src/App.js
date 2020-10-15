import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
 
import './App.css';
import Logo from './components/logo/Logo';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// core components
import Admin from "layouts/Admin.js";
import * as actions from './store/actions/index';

import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

class App extends Component {
 
  render() {
    let apps = (
      <Router history={hist}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </Router>
    );

    return (
      <div>
        { apps }
      </div>
    );
  }
}

export default App;
