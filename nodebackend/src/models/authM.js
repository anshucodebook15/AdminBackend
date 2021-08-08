// Require mongoose
const mongoose = require("mongoose");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// define Schema
const schema = mongoose.Schema;

// create Schema
const userSchema = new schema({
  username: {
    type: String,
    required: [true, "Please Provide Us a Valid Username"],
  },
  email: {
    type: String,
    required: [true, "Please Provide a Email"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please Provide a Valid Email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please Provide a Password"],
    minlength: 6,
    select: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: String,
});

// Precheck Middleware
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  //   Bcrypt Password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Create Methods
userSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

userSchema.methods.getResetPasswordToken = async function () {
  // Genrate Reset Password Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // console.log(resetToken);

  // Now make this Reset Token Hash
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Use Expire Token
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);

  //  Return Token
  return resetToken;
};

// Define model with database name
const user = mongoose.model("user", userSchema);

// Export Model
module.exports = user;
