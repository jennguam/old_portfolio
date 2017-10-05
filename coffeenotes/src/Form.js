import React, { Component } from 'react'

export default class Form extends Component {
	handleSubmit(event){
		event.preventDefault()
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" name="bean" placeholder="Enter Bean" ref="bean"/>
				<button type="submit">Submit</button>
			</form>
		)
	}
}
