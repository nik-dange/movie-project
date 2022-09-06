const express = require('express');
const {
    createReview
} = require('../controllers/reviewController')

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: "Getting all reviews" });
});

router.get('/:id', (req, res) => {
    res.json({ msg: "Get a single review on id" })
})

router.post('/', createReview)

router.delete('/:id', (req, res) => {
    res.json({ msg: "DELETE an existing review" })
})

router.patch('/:id', (req, res) => {
    res.json({ msg: "PATCH an existing review" })
})

module.exports = router