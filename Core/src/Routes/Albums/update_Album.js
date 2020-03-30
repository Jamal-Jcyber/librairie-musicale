// DEPENDECIES
const express = require('express');
const router = express.Router();
const albumModel = require('../../Models/Album');


// ROUTES

// ***********************************************
// UPDATE AN Artist FROM the database using his id
// ***********************************************
router.put('/update/:albumID', (req, res) => {
    const input = req.body;
    albumModel.updateOne({
        _id : req.params.albumID
    },{
        title : input.title,
        description : input.description,
        artist : input.artist
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