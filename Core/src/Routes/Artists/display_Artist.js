// DEPENDECIES
const express = require('express');
const router = express.Router();
const artistModel = require('../../Models/Artist');

// ROUTES

// *******************
// Get all the artists
// *******************
router.get('/display/all', (req, res) => {
    artistModel.find((err, docs) => {
        if(err){
            console.log('error', err);
            res.status(500).json({ message: "Problems When Reading Informations ..."});
        }else{
            // Everything is working
            console.log('All the Artists were found !!!');
            res.status(200).json(docs);
        }
    });
});

// ***********************************
// Search for a Specific Artist with his name
// ***********************************
router.get('/display/:name', (req, res) => {
    artistModel.findOne({
        firstname : req.params.name
    },(err, Artist) => {
        if(err){
            // SomeThing Wrong
            console.log('error', err);
            res.status(500).json({ message: "item not found"});
        }else{
            // Everything is working
            console.log('the artist was found');
            res.status(200).json(Artist);
        }
    });
});

// ***********************************
// Search for a Specific Artist with his ID
// ***********************************
router.get('/:artistID', (req, res) => {
    artistModel.findOne({
        _id : req.params.artistID
    },(err, Artist) => {
        if(err){
            // SomeThing Wrong
            console.log('error', err);
            res.status(500).json({ message: "item not found"});
        }else{
            // Everything is working
            console.log('the artist was found');
            res.status(200).json(Artist);
        }
    });
});



// EXPORT THE CONTENT OF THIS FILE
module.exports = router;