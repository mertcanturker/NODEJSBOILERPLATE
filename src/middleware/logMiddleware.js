// src/middleware/logMiddleware.js

const logMiddleware = (req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next();
  };
  
  module.exports = logMiddleware;
  