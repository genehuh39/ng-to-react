var mongoose = require('mongoose');

var Fighter = mongoose.model('Fighter', {
    id: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    weight: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    groundGame: {
        type: String,
        required: false
    },
    rangeStriking: {
        type: Number,
        required: true
    },
    boxing: {
        type: Number,
        required: true
    },
    clinch: {
        type: Number,
        required: true
    },
    wrestling: {
        type: Number,
        required: true
    }
});

module.exports = { Fighter }