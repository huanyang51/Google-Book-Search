const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  link: { type: String },
});
const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
