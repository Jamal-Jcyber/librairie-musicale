// DEPENDECIES
const express = require('express');
const router = express.Router();
const artistModel = require('../../Models/Artist');


// ROUTES

// ***********************************************
// DELETE AN Artist FROM the database using his id
// ***********************************************
router.delete('/remove/:artistID', (req, res) => {
    artistModel.deleteOne({
        _id : req.params.artistID
    }, (err) => {
        if(err){
            // Problems When Removing the artist item
            console.log('error', err)
            res.status(500).json({ message : "there is a Problem when deleting the artist item"});
        }else{
            // Everything working Successfully
            console.log('the artist iten was removed from the database');
            res.status(200).json({ message : "the artist iten was removed "});
        }
    });
});


// ***********************************
// DELETE AN Artist FROM the database using his firstname
// ***********************************
router.delete('/remove/:name', (req, res) => {
    artistModel.deleteOne({
        firstname : req.params.name
    }, (err) => {
        if(err){
            // Problems When Removing the artist item
            console.log('error', err)
            res.status(500).json({ message : "there is a Problem when deleting the artist item"});
        }else{
            // Everything working Successfully
            console.log('the artist iten was removed from the database');
            res.status(200).json({ message : "the artist iten was removed "});
        }
    });
});


// EXPORT THE CONTENT OF THIS FILE
module.exports = router;