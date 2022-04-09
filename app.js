// modules
const express = require('express');

// variables
const variables = require('./config/variables');

// database
const db = require('./config/db');

// set the application class
const app = express();

// start the server
app.listen(variables.port, () => {
    console.log('runing on port ' + variables.port + '...');
    db.connect();
})
