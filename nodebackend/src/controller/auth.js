// Include Model
const crypto = require("crypto");
const user = require("../models/authM");
const ErrorResponse = require("../helpers/errorResponse");
const sendEmail = require("../helpers/sendEmail");

exports.auth = {
  register: async (req, res, next) => {
    // 1st We Bring the details
    const { username, email, password } = req.body;

    try {
      // Create new User and save the data into a variable
      const newuser = await user.create({
        username,
        email,
        password, // Password Must Be Encrypted
      });

      // Generate token with JWT and send Response back
      sendToken(newuser, 201, res);
    } catch (error) {
      // Error Part do it later
      next(error);
    }
  },
  login: async (req, res, next) => {
    const { email, password } = req.body;

    // Check Whether Email and Password is comming
    if (!email || !password) {
      return next(new ErrorResponse("Invalid Id and Password", 400));
    }
    // try and catch
    try {
      // 1 Get User Details from database with provided Email and Password   Working
      const findUser = await user.findOne({ email }).select("+password");
      // 2 If user not found the set back with an error
      if (!findUser) {
        return next(new ErrorResponse("Invalid Id and Password", 400));
      }

      // 3 Match Password using the method created at user model
      const isMatch = await findUser.matchPasswords(password);

      // 4 If the Password is Not Matched the give invalid Password error
      if (!isMatch) {
        return next(new ErrorResponse("Invalid Password", 404));
      }
      // 5 if the email and password are matched then return with token

      // Generate token with JWT and send Response back
      sendToken(findUser, 200, res); // Token is made up of {id, JWT_SECRET, JWT_EXPIREIN}
    } catch (error) {
      // Error Part do it later
      next(error);
    }
  },
  forgotPassword: async (req, res, next) => {
    const { email } = req.body;

    try {
      const User = await user.findOne({ email });

      if (!User) {
        return next(new ErrorResponse("Email Could not exits", 404));
      }

      const resetToken = await User.getResetPasswordToken();

      console.log(resetToken);

      const resetURL = `http://localhost:5000/passwordreset/${resetToken}`;
      const message = `
       <h1>you have requested a password reset</h1>
       <p>Please Go to this link to reset your password</p>
       <a href=${resetURL} clicktracking=off>${resetURL}</a>
       `;

      //  Send Email
      try {
        await sendEmail({
          to: User.email,
          subject: "Password Reset Request",
          text: message,
        });

        res.status(200).json({
          success: true,
          data: "Email sent",
        });
      } catch (error) {
        User.resetPasswordToken = undefined;
        User.resetPasswordExpire = undefined;
        await User.save();
        return next(new ErrorResponse("Password Reset Problem Occured", 500));
      }
    } catch (error) {
      next(error);
    }
  },
  resetPassword: async (req, res, next) => {
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.resettoken)
      .digest("hex");

    try {
      const User = await user.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
      });

      if (!User) {
        return next(new ErrorResponse("Not Valid Token", 500));
      }

      user.password = req.body.password;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      res.status(201).json({
        success: true,
        data: "Password Reset Success",
      });
    } catch (error) {
      next(error);
    }
  },
};

//  Some Refactor Code
const sendToken = (findUser, statusCode, res) => {
  const token = findUser.getSignedToken();

  // SetCookie for Authentication
  res
    .status(statusCode)
    .cookie("name", token, {
      sameSite: "strict",
      path: "/",
    })
    .json({ success: true, message: "saved" });
};

// res
// .status(201)
// .cookie("name", "Rahul Aradhya", {
//   sameSite: "strict",
//   path: "/",
// })
// .send("Cookies has been Initiated");
