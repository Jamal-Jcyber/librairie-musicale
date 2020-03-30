// DEPENDECIES
const express = require('express');
const router = express.Router();
const artistModel = require('../../Models/Artist');


// ROUTES

// ***********************************************
// UPDATE AN Artist FROM the database using his id
// ***********************************************
router.put('/update/:artistID', (req, res) => {
    const input = req.body;
    artistModel.updateOne({
        _id : req.params.artistID
    },{
        firstname : input.firstname,
        lastname : input.lastname,
        description : input.description,
        style : input.style
    }, (err, result) => {
        if(err){
            // Problems when updating the artist
            console.log('error while updating the artist item');
            res.status(500).json({ message : "Something Wrong When Updating The Item artist"});
        }else{
            // everything is working
            console.log('the artist was updated successfully');
            res.status(200).json({ message : 'the artist was updated successfully'});
        }
    });
});


// ***********************************************
// UPDATE AN Artist FROM the database using his name
// ***********************************************
router.put('/update/:name', (req, res) => {
    const input = req.body;
    artistModel.updateOne({
        firstname : req.params.name
    },{
        firstname : input.firstname,
        lastname : input.lastname,
        description : input.description,
        style : input.style
    }, (err, result) => {
        if(err){
            // Problems when updating the artist
            console.log('error while updating the artist item');
            res.status(500).json({ message : "Something Wrong When Updating The Item artist"});
        }else{
            // everything is working
            console.log('the artist was updated successfully');
            res.status(200).json({ message : 'the artist was updated successfully'});
        }
    });
});

// EXPORT THE CONTENT OF THIS FILE
module.exports = router;