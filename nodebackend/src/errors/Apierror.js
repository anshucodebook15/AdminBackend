class ApiError {
  constructor(code, message) {
    this.message = message;
    this.code = code;
  }

  static badRequest(msg) {
    return new ApiError(200, { err: msg });
  }

  static validationError(msg) {
    return new ApiError(200, { err: msg });
  }

  static notfound(msg) {
    return new ApiError(404, { err: msg });
  }
}

module.exports = ApiError;
