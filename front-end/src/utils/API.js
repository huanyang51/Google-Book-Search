import axios from "axios";
export default {
  // Gets books from the Google Books API
  getBooks: function (query) {
    const params = { q: query };
    return axios.get("/api/search", { params });
  },
  // Gets all saved books
  getSavedBooks: function () {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (book) {
    return axios.post("/api/books", book);
  },
};
