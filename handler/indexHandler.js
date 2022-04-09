// modules
const productModel = require('../model/product.js');
const path = require('path');

// get the user route
const getIndex = (req, res, next) => {
    try {
        return res.status(200).sendFile(path.join(__dirname, '../static', 'index.html'));
    } catch (err) {
        return next(err);
    }
}

// get products
const getProduct = async (req, res, next) => {
    try {
        const data = await productModel.find({
            $or: [
                {title: { $regex: req.body.keyword.toString(), $options: "i" }},
                {description: { $regex: req.body.keyword.toString(), $options: "i" }}
            ]
        });
        return res.status(200).json(data);
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    getIndex,
    getProduct
}
