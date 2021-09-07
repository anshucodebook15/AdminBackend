const ApiError = require("./Apierror");

const apiErrorhandler = (err, req, res, next) => {
  console.error(err);

  if (err instanceof ApiError) {
    return res.status(err.code).json(err.message);
  }

  if (err.code === 11000) {
    return res.status(200).json({ err: "User Already Registered" });
  }

  if (err.name === "ValidationError") {
    return res
      .status(200)
      .json({ err: "Check Your Credentials Again", msg: err });
  }

  return res.status(500).json(err);
};

module.exports = apiErrorhandler;
