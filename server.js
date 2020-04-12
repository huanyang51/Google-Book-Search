const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const routes = require("./routes");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;

const app = express();
app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("front-end/build"));
}

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/google-book-search",
  {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  }
);

app.listen(PORT, () => {
  console.log(`[SERVER] app listening on port ${PORT}`);
});
