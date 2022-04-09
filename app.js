// modules
const express = require('express');
const path = require('path');
// variables
const variables = require('./config/variables');

// database
const db = require('./config/db');

// set the application class
const app = express();

// serve static files
app.use('/public', express.static(path.join(__dirname, 'static')));

// routes
const indexRoute = require('./routes/indexRoute');
// const userRoute = require('./routes/userRoute');
// const errorHandler = require('./handler/errorHandler');

// middleware
app.use("/", indexRoute);
// app.use("/user", userRoute);
// app.use("*", errorHandler.notFound);

// start the server
app.listen(variables.port, () => {
    console.log('runing on port ' + variables.port + '...');
    db.connect();
})
