const Apierror = require("../errors/Apierror");

const ce = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

module.exports = ce;
