const mongoose = require('mongoose');

const {Schema} = mongoose;

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: "N/A"
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
    }, {timestamps: true, versionKey: false});


const ProductModel = mongoose.model("Products", productSchema);

module.exports = ProductModel;