// This middleware checks wether the Authorization Token presents in the header or not
const jwt = require("jsonwebtoken");
const User = require("../models/authM");
const ErrorResponse = require("../helpers/errorResponse");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // bearer erfgghtijhablugfhsgd
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse("Not Authorized to access this route", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new ErrorResponse("No User Found With This id", 404));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(new ErrorResponse("not Authorize to access this route", 401));
  }
};
