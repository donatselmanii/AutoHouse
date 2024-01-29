const jwt = require('jsonwebtoken');
const { errorHandler } = require('../error');

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    const unauthorizedError = errorHandler(401, 'Unauthorized');
    return next(unauthorizedError);
  }

  jwt.verify(token, "7B&6$QyMv48gZ*aR@n!PbUt2Lj%zWsHs", (err, user) => {
    if (err) {
      const forbiddenError = errorHandler(403, 'Forbidden');
      return next(forbiddenError);
    }

    req.user = user;
    next();
  });
};

module.exports = { verifyToken };
