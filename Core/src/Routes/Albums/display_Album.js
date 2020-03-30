// DEPENDECIES
const express = require('express');
const router = express.Router();
const albumModel = require('../../Models/Album');

// ROUTES

// *******************
// Get all the Albums
// *******************
router.get('/display/all', (req, res) => {
    albumModel.find((err, docs) => {
        if(err){
            console.log('error', err);
            res.status(500).json({ message: "Problems When Reading Informations ..."});
        }else{
            // Everything is working
            console.log('All the Albums were found !!!');
            res.status(200).json(docs);
        }
    });
});

// ***********************************
// Search for a Specific Album with his name
// ***********************************
router.get('/display/:name', (req, res) => {
    albumModel.findOne({
        title : req.params.name
    },(err, Album) => {
        if(err){
            // SomeThing Wrong
            console.log('error', err);
            res.status(500).json({ message: "item not found"});
        }else{
            // Everything is working
            console.log('the artist was found');
            res.status(200).json(Album);
        }
    });
});

// ***********************************
// Search for a Specific Album with his ID
// ***********************************
router.get('/display/:albumID', (req, res) => {
    albumModel.findOne({
        _id : req.params.albumID
    },(err, Album) => {
        if(err){
            // SomeThing Wrong
            console.log('error', err);
            res.status(500).json({ message: "item not found"});
        }else{
            // Everything is working
            console.log('the artist was found');
            res.status(200).json(Album);
        }
    });
});



// EXPORT THE CONTENT OF THIS FILE
module.exports = router;