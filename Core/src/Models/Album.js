const mongoose = require('mongoose');


// *************************
//  MONGOOSE SCHEMA ALBUM
// *************************
const CustomAlbum = new mongoose.Schema({
    
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    }
    ,date: {
        type: Date,
        default: Date.now
    }
});

// EXPORTING
module.exports = mongoose.model('Album', CustomAlbum);