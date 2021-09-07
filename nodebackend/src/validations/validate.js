const ApiError = require("../errors/Apierror");
const joiErrorFormater = require("../helpers/joiErrorFormatter");

function validater(schema) {
  return async (req, res, next) => {
    try {
      const validRules = await schema.validate(req.body);
      if (validRules.error) {
        console.log(validRules.error);
        const details = joiErrorFormater(validRules.error.details);

        next(ApiError.validationError({ error: details }));
      } else {
        next();
      }
    } catch (error) {
      next(ApiError.badRequest(error));
    }
  };
}

module.exports = { validater };


