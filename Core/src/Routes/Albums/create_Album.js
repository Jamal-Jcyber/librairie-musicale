// DEPENDECIES
const express = require('express');
const router = express.Router();
const albumModel = require('../../Models/Album');


// ***********************************
// ADD New Album to the database
// ***********************************
router.post('/new', (req, res) => {
    const input = req.body;
    const Album = new albumModel({
        title : input.title,
        description : input.description,
        artist : input.artist
    });
        // SAVING THE INFORMATIONS INSIDE THE DATABASE
        Album.save((err, doc) => {
            if(err){
                // SOMETHING WHEN WRONG
                res.send('err', err);
                res.status(500).json({ message: "Problem When Saving The Informations"});
            }
                // EVERUTHING IS OKAY
                console.log('the informations was Created Successfully.');
                res.status(200).json({ message: "the Album Was Created."});
                
        });
});
// EXPORT THE CONTENT OF THIS FILE
module.exports = router;