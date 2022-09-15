import React from 'react'
import { useReviewContext } from '../hooks/useReviewContext'

const ReviewDetails = ({ review }) => {

    const { dispatch } = useReviewContext()

    const handleClick = async () => {
        const response = await fetch('/api/reviews/' + review._id, {
            method: 'DELETE'
        })

        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE_REVIEW', payload: json })
        }
    }

    return (
        <div className='review-details'>
            <h2>{review.title}</h2>
            <p><strong>Score: {review.score} (Out of 10)</strong></p>
            <p>{review.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default ReviewDetails