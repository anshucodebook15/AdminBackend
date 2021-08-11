const router = require("express").Router();

const { auth } = require("../controller/auth");

// Defined Routes
router.post("/register", auth.register);
router.post("/login", auth.login);
router.post("/forgotpassword", auth.forgotPassword);
router.post("/resetpassword/:resettoken", auth.resetPassword);

// Export Routes
module.exports = router;
