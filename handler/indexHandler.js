// modules
const path = require('path');

// get the user route
const getIndex = (req, res, next) => {
    try {
        return res.status(200).sendFile(path.join(__dirname, '../static', 'index.html'));
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    getIndex,
}
