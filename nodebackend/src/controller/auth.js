// Include Model
const crypto = require("crypto");
const user = require("../models/authM");
const sendEmail = require("../helpers/sendEmail");
const ApiError = require("../errors/Apierror");

class auth {
  async register(req, res, next) {
    const { username, email, password } = req.body;

    const newuser = await user.create({
      username,
      email,
      password,
    });

    sendToken(newuser, 200, res);
  }

  async login(req, res, next) {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(ApiError.badRequest("Invalid Email and Password"));
    }

    const findUser = await user.findOne({ email }).select("+password"); // Find User Email

    if (!findUser) {
      return next(ApiError.badRequest("Invalid Email and Password")); // If Email Not Found We send The Error
    }

    const isMatch = await findUser.matchPasswords(password); // Check the Entered Password With Database Password

    if (!isMatch) {
      return next(ApiError.notfound("Invalid Credentials Enter")); // If Password Does Not Match
    }

    sendToken(findUser, 200, res);
  }
}

module.exports = new auth();


const sendToken = (findUser, statusCode, res) => {

  const token = `Bearer ${findUser.getSignedToken()}`;

  // Set Client
  res
    .status(statusCode)
    .cookie("autok", token, {
      sameSite: "strict",
      path: "/",
    })
    .json({ success: true, token: token });
};

// const ErrorResponse = require("../helpers/errorResponse");
// .cookie("name", token, {
//   sameSite: "strict",
//   path: "/",
// })
