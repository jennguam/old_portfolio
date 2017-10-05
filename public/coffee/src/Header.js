import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
	render() {
		return (
			<div className="navbar">
				<div className="left">
					<img src="../coffee-notes-logo.png" className="bloom-logo"/><a href="#" className="link coffee-logo">COFFEE NOTES</a>
				</div>
				{
					// <div className="right">
					// 	<a href="#" className="nav-link link">Link 1</a>
					// 	<a href="#" className="nav-link link">Link 2</a>
					// </div>
				}
				
			</div>
		)
	}
}