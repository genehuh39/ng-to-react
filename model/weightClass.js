var mongoose = require('mongoose');

var WeightClass = mongoose.model('WeightClass', {
    className: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    classCode: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    weight: {
        type: Number,
        required: true
    }
});

module.exports  = { WeightClass }