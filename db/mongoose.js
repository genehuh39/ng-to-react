var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Mma');

module.exports = {mongoose};