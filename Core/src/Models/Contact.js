const mongoose = require('mongoose');

// *************************
//  MONGOOSE SCHEMA Contact
// *************************
const CustomContact = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname :{
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    object: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// EXPORTING
module.exports = mongoose.model('Contact', CustomContact);