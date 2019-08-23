import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const bookSchema = Schema({
    title: {type: String, require: true},
    authors: {type: String, require: true},
    description: {type: String, require: true},
    image: {type: String, require: true},
    link: {type: String, require: true},
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;