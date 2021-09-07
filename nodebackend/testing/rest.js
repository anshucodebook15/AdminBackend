// Previous ErrorResponse

// This is a 404 Middleware Function
// app.use((req, res, next) => {
//   const err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });

// Middleware
// app.use((err, req, res, next) => {
//   res.status(err.status || 500).json({
//     error: {
//       status: err.status || 500,
//       message: err.message,
//     },
//   });
// });

// class ApiError {
//   constructor(code, message) {
//     this.code = code;
//     this.message = message;
//   }

//   // Bad Request Error
//   static badRequest(msg) {
//     return new ApiError(400, msg);
//   }

//   // Duplicate Error Request
//   static duplicateKey(msg) {
//     return new ApiError(11000, msg);
//   }

//   static internalServerError(msg) {
//     return new ApiError(500, msg);
//   }
// }

// module.exports = ApiError;

// Controller Code
// exports.auth = {
//   register: async (req, res, next) => {
//     // 1st We Bring the details
//     const { username, email, password } = req.body;

//     try {
//       // Create new User and save the data into a variable
//       const newuser = await user.create({
//         username,
//         email,
//         password, // Password Must Be Encrypted
//       });

//       // Generate token with JWT and send Response back
//       sendToken(newuser, 201, res);
//     } catch (error) {
//       next(error);
//     }
//   },
//   login: async (req, res, next) => {
//     const { email, password } = req.body;

//     // Check Whether Email and Password is comming
//     if (!email || !password) {
//       return next(new ErrorResponse("Invalid Id and Password", 400));
//     }

//     try {
//       // 1 Get User Details from database with provided Email and Password   Working
//       const findUser = await user.findOne({ email }).select("+password");

//       // 2 If user not found the set back with an error
//       if (!findUser) {
//         return next(new ErrorResponse("Invalid Id and Password", 400));
//       }

//       // 3 Match Password using the method created at user model
//       const isMatch = await findUser.matchPasswords(password);

//       // 4 If the Password is Not Matched the give invalid Password error
//       if (!isMatch) {
//         return next(new ErrorResponse("Invalid Password", 404));
//       }
//       // 5 if the email and password are matched then return with token
//       sendToken(findUser, 200, res); // Token is made up of {id, JWT_SECRET, JWT_EXPIREIN}
//     } catch (error) {
//       // Error Part do it later
//       next(error);
//     }
//   },
//   forgotPassword: async (req, res, next) => {
//     const { email } = req.body;

//     try {
//       const User = await user.findOne({ email });

//       if (!User) {
//         return next(new ErrorResponse("Email Could not exits", 404));
//       }

//       const resetToken = await User.getResetPasswordToken();

//       console.log(resetToken);

//       const resetURL = `http://localhost:5000/passwordreset/${resetToken}`;
//       const message = `
//        <h1>you have requested a password reset</h1>
//        <p>Please Go to this link to reset your password</p>
//        <a href=${resetURL} clicktracking=off>${resetURL}</a>
//        `;

//       //  Send Email
//       try {
//         await sendEmail({
//           to: User.email,
//           subject: "Password Reset Request",
//           text: message,
//         });

//         res.status(200).json({
//           success: true,
//           data: "Email sent",
//         });
//       } catch (error) {
//         User.resetPasswordToken = undefined;
//         User.resetPasswordExpire = undefined;
//         await User.save();
//         return next(new ErrorResponse("Password Reset Problem Occured", 500));
//       }
//     } catch (error) {
//       next(error);
//     }
//   },
//   resetPassword: async (req, res, next) => {
//     const resetPasswordToken = crypto
//       .createHash("sha256")
//       .update(req.params.resettoken)
//       .digest("hex");

//     try {
//       const User = await user.findOne({
//         resetPasswordToken,
//         resetPasswordExpire: { $gt: Date.now() },
//       });

//       if (!User) {
//         return next(new ErrorResponse("Not Valid Token", 500));
//       }

//       user.password = req.body.password;
//       user.resetPasswordToken = undefined;
//       user.resetPasswordExpire = undefined;

//       await user.save();

//       res.status(201).json({
//         success: true,
//         data: "Password Reset Success",
//       });
//     } catch (error) {
//       next(error);
//     }
//   },
// };

// console.log("Validation Done");
// const Joi = require("joi");

// const register = Joi.object({
//   username: Joi.string().alphanum().min(3).max(30).required(),
//   email: Joi.string().email({
//     minDomainSegments: 2,
//     tlds: { allow: ["com", "net"] },
//   }),

//   password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
// });

// exports.regValidate = async (req, res, next) => {
//   var validateProperties = await schema.validate(req.body);
//   if (!validateProperties.error) {
//     next();
//   } else {
//     res.status(200).json({
//       error: validateProperties.error.details,
//     });
//   }

//   // console.log(validateProperties.error.details);
// };
// function validater(schema) {
//   return async (req, res, next) => {
//     try {
//       await schema.validate(req.body);
//       next();
//     } catch (err) {
//       next(ApiError.badRequest(err));
//     }
//   };
// }

// if (dataTest.error) {
//   const er = {};
//   const errors = dataTest.error.details;
//   errors.map((e) => {
//     er[e.path] = e.message;
//   });
//   // console.log(er);
//   // next(ApiError.badRequest(er));
// }
