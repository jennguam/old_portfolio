import React, { Component } from 'react';
import './Grid.css';
import reviews from './content/reviews'

// const initialReviews = [
// 	{roaster: {name: 'Gabe Roasters'}, name: 'Ethiopia'},
// 	{roaster: {name: 'Jenn Roasters'}, name: 'Kenya'},
// 	{roaster: {name: 'Peanut Roasters'}, name: 'Lolsya'},
// 	{roaster: {name: 'Jelly Roasters'}, name: 'USA'}
// ]

// const getReviews = async () => {
// 	const result = await fetch('http://192.168.8.100:5000/api/v1/beans')
// 	const reviews = await result.json()
// 	return reviews.beans
// }

export default class Grid extends Component {
	constructor(props) {
		super(props)
		this.state = {
			reviews: reviews
		}
	}

	fadeinReview (review) {
		//for every revew, add in animation-delay + 500s
		this.reviews.map(review)
	}


	renderReview(review) {

		const beanStyle = {
			background: `url(${review.image}) no-repeat center center`,
			backgroundSize: "cover"
		}
		return (
			<div className="review">
				<div className="review-image-container" style={beanStyle}>
					<img className="review-image"/>
				</div>
				<div className="review-text-container">

					<div className="bean-name">{review.bean}</div>
					<div className="roaster">{review.roaster}</div>

					<div className="spacer"></div>
					<div className="review-text">
						<div className="review-text">{review.notes}</div>
						<div className="bean-labels">Origin: <span className="review-location">{review.location}</span></div>
					</div>
					<div className="review-score">{review.score}</div>
				</div>
			</div>
		)
	}

	render() {
		return (
			<div className="review-container">
				{this.state.reviews.map(this.renderReview)}
			</div>
		)
	}
}

