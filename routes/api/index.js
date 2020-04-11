const path = require("path");
const router = require("express").Router();

const savedRoutes = require("./savedRoutes");
const searchRoutes = require("./searchRoutes");

router.use("/books", savedRoutes);
router.use("/search", searchRoutes);

module.exports = router;
