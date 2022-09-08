import React from 'react'

const ReviewDetails = ({ review }) => {
    return (
        <div className='review-details'>
            <h2>{review.title}</h2>
            <p><strong>Score: {review.score} (Out of 10)</strong></p>
            <p>{review.createdAt}</p>
        </div>
    )
}

export default ReviewDetails