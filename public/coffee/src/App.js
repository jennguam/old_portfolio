import React, { Component } from 'react';
import './App.css';


import Header from './Header'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header-container">
          <Header/>
        </div>
        <div className="content-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}