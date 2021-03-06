// module
const dotenv = require('dotenv');
const path = require('path');

// config
dotenv.config({
    path: path.join(__dirname, '../.env')
})

// export
module.exports = {
    port: process.env.PORT,
    db: process.env.DB.replace('<password>', process.env.DB_PASSWORD)
}
