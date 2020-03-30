const mongoose = require('mongoose');

// *************************
//  MONGOOSE SCHEMA ARTIST
// *************************
const CustomArtiste = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    style: {
        type: String,
        required: true
    }
    ,date: {
        type: Date,
        default: Date.now
    }
});

// EXPORTING
module.exports = mongoose.model('Artist', CustomArtiste);
