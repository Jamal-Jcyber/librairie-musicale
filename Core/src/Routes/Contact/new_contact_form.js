// DEPENDECIES
const express = require('express');
const router = express.Router();
const contactModel = require('../../Models/Contact');

// ***********************************
// ADD New Contact-FORM to the database
// ***********************************

router.post('/', (req, res) => {
    const input = req.body;
    const Contact = new contactModel({
        firstname : input.firstname,
        lastname : input.lastname,
        country : input.country,
        object : input.object,
        message : input.message
    });
    // SAVING THE INFORMATIONS INSIDE THE DATABASE
    Contact.save((err, doc) => {
        if(err){
            // SOMETHING WHEN WRONG
            res.send('err', err);
            res.status(500).json({ message: "Problem When Sending The Informations to the Server"});
        }
        // EVERUTHING IS OKAY
        console.log('the informations was Sent Successfully.');
        res.status(200).json({ message: "Thank You For Your Contact, We Will Call You As Soon As Possible !!!."});
    });
});
// EXPORT THE CONTENT OF THIS FILE
module.exports = router;