const router = require("express").Router();
const { getPrivateData } = require("../controller/private");
const { protect } = require("../middlewares/authMid");

router.route("/private").get(protect, getPrivateData);

module.exports = router;
