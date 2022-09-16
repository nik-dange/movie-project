import React from 'react'
import ReviewDetails from '../components/ReviewDetails'
import ReviewForm from '../components/ReviewForm'
import { useReviewContext } from '../hooks/useReviewContext'

const Home = () => {
    const { reviews, dispatch } = useReviewContext()
    // debugger;
    React.useEffect(() => {
        const fetchReviews = async () => {
            const res = await fetch('/api/reviews')
            const resJson = await res.json()
            if (res.ok) {
                dispatch({ type: 'SET_REVIEWS', payload: resJson })
            } else {
                console.log("Failed to fetch reviews");
            }
        }

        fetchReviews()
    }, [])

    return (
        <div className='home'>
            <div className='reviews'>
                {reviews && reviews.map((review) => (
                    <ReviewDetails key={review._id} review={review}></ReviewDetails>
                ))}
            </div>
            <ReviewForm></ReviewForm>
        </div >
    )
}

export default Home