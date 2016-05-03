const express = require('express');
const mongoose = require('mongoose');
require('./models/models');
const app = express();

mongoose.connect('mongodb://localhost/marinmuseum');

app.use('/static', express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/views/index.html'); 
});



const server = app.listen(1337, 'localhost', () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Server up and running on ${host}:${port}`);
});
