import axios from 'axios';

export default {
    //gets books from google
    getBooks: function (search) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search);
    },
    //gets all saved books
    getSaved: function () {
        return axios.get("/api/books");
    },
    //deletes saved book with given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    //saves an book
    saveBook: function (book) {
        return axios.post("/api/books", book);
    }


}