const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);