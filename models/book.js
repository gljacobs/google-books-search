const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = Schema({
    googleId: {type: String, require: true, unique: true},
    title: {type: String, require: true},
    authors: {type: [String], require: true},
    description: {type: String, require: true},
    image: {type: String, require: true},
    link: {type: String, require: true},
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;