let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let BookSchema = new Schema({
    googleId: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    favorite: {
        type: Boolean,
        required: true,
        default: false
    },
    Date: {
        type: Date,
        required: true
    }
});

let Books = mongoose.model("Books", BookSchema);

module.exports = Books;