function joiErrorFormater(details) {
  const err = {};

  details.map((er) => {
    err[er.path] = er.message;
  });

  return err;
}

module.exports = joiErrorFormater;
