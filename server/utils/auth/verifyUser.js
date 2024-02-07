const jwt = require('jsonwebtoken');
const { errorHandler } = require('../error');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    const unauthorizedError = errorHandler(401, 'Unauthorized');
    return next(unauthorizedError);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      const forbiddenError = errorHandler(403, 'Forbidden');
      return next(forbiddenError);
    }

    req.user = user;
    next();
  });
};

module.exports = { verifyToken };
