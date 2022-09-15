import React from 'react'
import { useReviewContext } from '../hooks/useReviewContext';



const ReviewForm = () => {
    const { dispatch } = useReviewContext();

    const [title, setTitle] = React.useState('');
    const [score, setScore] = React.useState('');
    const [error, setError] = React.useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const review = { title, score }

        const res = await fetch('api/reviews', {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'Content-Type': 'application/json'
            }
        })


        const resJson = await res.json();
        console.log(JSON.stringify(resJson))

        if (!res.ok) {
            setError(resJson.error)
        }
        if (res.ok) {
            setError(null);
            setTitle('')
            setScore('')
            dispatch({ type: 'CREATE_REVIEW', payload: resJson })

        }

    }
    return (
        <form className='create' onSubmit={handleSubmit}>
            <h3>
                Add a Review
            </h3>
            <label>Title</label>
            <input
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                value={title} />
            <label>Score</label>
            <input
                type='number'
                onChange={(e) => setScore(e.target.value)}
                value={score} />

            <button className='button'>Add review</button>
            <div className='wrapper'>


                <div>

                    {error && <div className='error'>{error}</div>}
                </div>
            </div>
        </form>
    )
}

export default ReviewForm