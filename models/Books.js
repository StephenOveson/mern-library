let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let BookSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
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
    }
});

let Books = mongoose.model("Books", BookSchema);

module.exports = Books;