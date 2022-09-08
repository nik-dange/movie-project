import React from 'react'
import ReviewDetails from '../components/ReviewDetails'

const Home = () => {

    const [reviews, setReviews] = React.useState(null)

    React.useEffect(() => {
        const fetchReviews = async () => {
            const res = await fetch('/api/reviews')
            const resJson = await res.json()
            if (res.ok) {
                debugger;
                setReviews(resJson)
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
        </div >
    )
}

export default Home