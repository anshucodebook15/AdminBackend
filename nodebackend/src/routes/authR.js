const router = require("express").Router();

// Import Controller
const {
  register,
  login,
  forgotPassword,
  resetPassword,
} = require("../controller/auth");

// Defined Routes
router.post("/register", register);
router.post("/login", login);
router.post("/forgotpassword", forgotPassword);
router.post("/resetpassword/:resettoken", resetPassword);

// Export Routes
module.exports = router;
