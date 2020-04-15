const axios = require("axios");

module.exports = {
  findAll: function (req, res) {
    const params = {
      q: req.query.q,
    };
    const URL = `https://www.googleapis.com/books/v1/volumes?`;
    axios
      .get(URL, {
        params,
      })
      .then((results) =>
        results.data.items.filter(
          (result) =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      .then((response) => {
        res.json(response);
      })
      .catch((err) => res.status(422).json(err));
  },
};
