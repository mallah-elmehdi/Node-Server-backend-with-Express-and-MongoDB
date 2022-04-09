// modules
const express = require('express');

// variables
const variables = require('./config/variables');

// set the application class
const app = express();

// start the server
app.listen(variables.port, (err) => {
    if (err) console.error(err);
    else console.log('runing...');
})
