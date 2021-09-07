const Joi = require("joi");

exports.register = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),

  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

exports.login = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": `"a" should be a type of 'text'`,
    "string.empty": `Email Field Can Not be Empty`,
    "string.min": `"a" should have a minimum length of {#limit}`,
    "string.email": `Invalid Email Address`,
    "any.required": `"a" is a required field`,
  }),
  password: Joi.string()
    .min(3)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required()
    .messages({
      "string.base": `"a" should be a type of 'text'`,
      "string.empty": `Email Field Can Not be Empty`,
      "string.min": `Length must be at least 3 Char`,
      "string.email": `Invalid Email Address`,
      "any.required": `"a" is a required field`,
      "string.pattern.base": `Invalid Password Entered`,
    }),
});
