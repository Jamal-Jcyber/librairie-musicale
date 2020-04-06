const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const Config = require('./src/Configs/config');
// ****************
// STATIC WEB PAGES
// ****************
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './views')));

// ***********
// BODY-PARSER
// ***********
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

// ***********
// MIDDLEWARE
// ***********
app.set('view engine', 'ejs');


// ****************
// CONNECTION WITH MONGODB
// ****************

const dbUrl = 'mongodb+srv://root:toor@librarymusical-z406d.gcp.mongodb.net/LibraryMusical?retryWrites=true&w=majority';
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('err', (err) => {
    console.log('error', err);
});
mongoose.connection.once('open', () => {
    console.log('the connection to mongo db atlas is working');
});

// Navigation routes
app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.get('/index', (req, res) => {
    res.render('index.ejs')
})
app.get('/hindi-zahra-homeland', (req, res) => {
    res.render('art1.ejs')
})
app.get('/hindi-zahra-handmade', (req, res) => {
    res.render('hindi-zahra-handmade.ejs')
})
app.get('/hindi-zahra-until', (req, res) => {
    res.render('hindi-zahra-until.ejs')
})
app.get('/shkoon', (req, res) => {
    res.render('shkoon1.ejs')
})
app.get('/shkoon-Recordings', (req, res) => {
    res.render('shkoon2.ejs')
})
app.get('/shkoon-Rima', (req, res) => {
    res.render('shkoon3.ejs')
})
app.get('/aiko-chilombo', (req, res) => {
    res.render('aiko.ejs')
})
app.get('/aiko-trip', (req, res) => {
    res.render('aiko2.ejs')
})
app.get('/aiko-souled-out', (req, res) => {
    res.render('aiko3.ejs')
})
app.get('/khalid-american-teen', (req, res) => {
    res.render('khalid.ejs')
})
app.get('/khalid-suncity', (req, res) => {
    res.render('khalid2.ejs')
})
app.get('/khalid-k3*', (req, res) => {
    res.render('khalid3.ejs')
})
app.get('/about', (req, res) => {
    res.render('about.ejs')
})
app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})
app.get('/Administrator/Add/artist', (req, res) => {
    res.render('Add_Artist.ejs')
})
app.get('/Administrator/Add/album', (req, res) => {
    res.render('Add_Album.ejs')
})
app.get('/Administrator/Add/track', (req, res) => {
    res.render('Add_Track.ejs')
})


// ************************
// REST APIs FOR THE ARTIST
// ************************

// @route GET ARTIST
app.use('/APIs/displayArtist', require('./src/Routes/Artists/display_Artist.js'));
// @route POST ARTIST
app.use('/APIs/createArtist', require('./src/Routes/Artists/create_Artist.js'));
// route PUT ARTIST
app.use('/APIs/updateArtist', require('./src/Routes/Artists/update_Artist.js'));
// route DELETE ARTIST
app.use('/APIs/deleteArtist', require('./src/Routes/Artists/delete_Artist.js'));

// ************************
// REST APIs FOR THE ALBUM
// ************************

// @route GET ARTIST
app.use('/APIs/displayAlbum', require('./src/Routes/Albums/display_Album.js'));
// @route POST ARTIST
app.use('/APIs/createAlbum', require('./src/Routes/Albums/create_Album.js'));
// route PUT ARTIST
app.use('/APIs/updateAlbum', require('./src/Routes/Albums/update_Album.js'));
// route DELETE ARTIST
app.use('/APIs/deleteAlbum', require('./src/Routes/Albums/delete_Album.js'));


// ***************************
// REST APIs FOR THE CONTACT FORM
// ***************************
app.use('/APIs/createContact', require('./src/Routes/Contact/new_contact_form.js'));


// The SERVER
const server = app.listen(Config.server.port, Config.server.host, () => {
    console.log(`The Server Is Running On The Port :`, server.address().port);
});