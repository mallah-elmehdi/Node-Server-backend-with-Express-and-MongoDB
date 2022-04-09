// modules
const mongoose = require('mongoose');

// schema
const schema = mongoose.Schema;

// product Schema
const productSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountPercentage: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
})

// create model out of the schema
const product = mongoose.model('product', productSchema);

// exports
module.exports = product;
