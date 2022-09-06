const Review = require('../models/revModel');

//get all workouts
const getAllReviews = async (req, res) => {
    const reviews = await Review.find({});
}


//get one workout

//post a new workout

const createReview = async (req, res) => {

    const { title, score } = req.body;
    try {
        const review = await Review.create({
            title, score
        })
        res.status(200).json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//delete a workout

//update a workout

module.exports = {
    createReview,
}