const router = require("express").Router();
const controllers = require("../../controllers/searchController");

router.route("/").get(controllers.findAll);
module.exports = router;
