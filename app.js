// modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// variables
const variables = require('./config/variables');

// database
const db = require('./config/db');

// set the application class
const app = express();

// serve static files
app.use('/public', express.static(path.join(__dirname, 'static')));

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// routes
const indexRoute = require('./routes/indexRoute');
const errorHandler = require('./handler/errorHandler');

// middleware
app.use("/", indexRoute);
app.use("*", errorHandler.notFound);

// start the server
app.listen(variables.port, () => {
    console.log('runing on port ' + variables.port + '...');
    db.connect();
})
