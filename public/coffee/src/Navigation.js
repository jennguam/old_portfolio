import React, { Component } from 'react'
import Grid from './Grid'
import App from './App'
import About from './About'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import Form from './Form'

export default class Navigation extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRedirect to="/grid"/>
          <Route path="grid" component={Grid}/>
          <Route path="form" component={Form}/>
          <Route path="about" component={About}/>
        </Route>
      </Router>
    )
  }
}