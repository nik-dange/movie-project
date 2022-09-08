const express = require('express');
const {
    createReview,
    getAllReviews,
    getReview,
    deleteReview,
    updateReview
} = require('../controllers/reviewController')

const router = express.Router();

router.get('/', getAllReviews);

router.get('/:id', getReview);

router.post('/', createReview);

router.delete('/:id', deleteReview)

router.patch('/:id', updateReview)

module.exports = router