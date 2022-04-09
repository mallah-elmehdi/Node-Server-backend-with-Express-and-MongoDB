// module
const mongoose = require('mongoose');

// variables
const variables = require('./variables');

// connect to database
class DB {
    constructor() {}
    connect() {
        mongoose.connect(variables.db, () => {
            console.log('db connected...');
        })
    }
}

module.exports = new DB();
