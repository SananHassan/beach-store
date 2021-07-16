import React from 'react'
import StarRatings from 'react-star-ratings';

const Rating = props => {
    const {rating} = props 
    return (
        <StarRatings
        rating={rating}
        starRatedColor="#fddc0d"
        starDimension = "35px"
        // changeRating={this.changeRating}
        numberOfStars={5}
        name='rating'
      />
    )
}

export default Rating;
