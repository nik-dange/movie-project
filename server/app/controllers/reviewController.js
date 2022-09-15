const { typography } = require('@mui/system');
const Review = require('../models/revModel');
const mongoose = require('mongoose');

//get all revuew
const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({});
        res.status(200).json(reviews);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//get one review
const getReview = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "Review not found sorry" });
        }

        const review = await Review.findById(id);

        console.log(req);

        if (!review) {
            return res.status(404).json({ error: "Review not found sorry" });
        }

        res.status(200).json(review);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//post a new revuew

const createReview = async (req, res) => {
    console.log(req);
    console.log(res);

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

//delete a review

const deleteReview = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'That review does not exist!' });
    }

    const review = await Review.findOneAndDelete({ _id: id });

    if (!review) {
        return res.status(400).json({ error: 'That review does not exist!' });
    }

    res.status(200).json(review);
}

//update a review

const updateReview = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Review not found sorry" });
    }
    const { title, score } = req.body;

    try {
        const review = await Review.findOneAndUpdate({ _id: id }, {
            title, score
        })

        if (!review) {
            return res.status(404).json({ error: "Review not found sorry" });
        }

        res.status(200).json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createReview,
    getAllReviews,
    getReview,
    deleteReview,
    updateReview
}