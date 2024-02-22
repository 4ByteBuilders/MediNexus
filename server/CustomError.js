class CustomError extends Error {
  constructor(message, statusCode) {
    super(message); // Pass the message to the Error constructor
    this.statusCode = statusCode; // Add a statusCode property
  }
}

module.exports = CustomError;
