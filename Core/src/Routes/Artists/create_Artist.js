// DEPENDECIES
const express = require('express');
const router = express.Router();
const artistModel = require('../../Models/Artist');


// ***********************************
// ADD New Artist to the database
// ***********************************
router.post('/new', (req, res) => {
    const input = req.body;
    const Artist = new artistModel({
        firstname : input.firstname,
        lastname : input.lastname,
        description : input.description,
        style : input.style
    });

    // SAVING THE INFORMATIONS INSIDE THE DATABASE
    Artist.save((err, doc) => {
        if(err){
            // SOMETHING WHEN WRONG
            res.send('err', err);
            res.status(500).json({ message: "Problem When Saving The Informations"});
        }
        // EVERUTHING IS OKAY
        console.log('the informations was Created Successfully.');
        res.status(200).json({ message: "the Artist Was Created."});
        
    });
});
// EXPORT THE CONTENT OF THIS FILE
module.exports = router;