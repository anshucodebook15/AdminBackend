const router = require("express").Router();

// Include Auth Controller
const auth = require("../controller/auth");

// Catch Error
const ce = require("../helpers/catchError");

// Include Validator
const { validater } = require("../validations/validate");

// Validation Schemas
const { register, login } = require("../validations/schema");

// Defined Routes
router.post("/register", validater(register), ce(auth.register));
router.post("/login", validater(login), auth.login);

// router.post("/forgotpassword", auth.forgotPassword);
// router.post("/resetpassword/:resettoken", auth.resetPassword);

// Admin Pages
// router.get('/dashboard', )

// Export Routes
module.exports = router;
