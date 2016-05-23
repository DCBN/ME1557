const express = require('express');
const mongoose = require('mongoose');
require('./models/models');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const apiRouter = express.Router();

global._base = __dirname + '/';

mongoose.connect('mongodb://localhost/marinmuseum');

app.use('/static', express.static('public'));
app.use(multer({dest: './uploadedMaterial/'}).any());
app.use(bodyParser.json());
app.use('/api', apiRouter);
require('./routes/api/apiRoutes')(apiRouter);

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


const server = app.listen(8080, 'localhost', () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Server up and running on ${host}:${port}`);
});
