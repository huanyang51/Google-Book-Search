const axios = require("axios");

module.exports = {
  findAll: function (req, res) {
    const params = {
      q: req.body.q,
    };
    const URL = `https://www.googleapis.com/books/v1/volumes?`;
    axios
      .get(URL, {
        params,
      })
      .then((response) => {
        res.json(response.data.items);
      })
      .catch((err) => res.status(422).json(err));
  },
};
