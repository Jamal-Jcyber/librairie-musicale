// DEPENDECIES
const express = require('express');
const router = express.Router();
const albumModel = require('../../Models/Album');


// ROUTES

// ***********************************************
// DELETE AN Album FROM the database using his id
// ***********************************************
router.delete('/remove/:albumID', (req, res) => {
    albumModel.deleteOne({
        _id : req.params.albumID
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
// DELETE AN Album FROM the database using his firstname
// ***********************************
router.delete('/remove/:name', (req, res) => {
    albumModel.deleteOne({
        title : req.params.name
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