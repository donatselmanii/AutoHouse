const express = require('express');
const rateLimit = require('express-rate-limit');
const csrf = require('csurf');
const router = express.Router();
const userController = require('../controllers/user.controller');

const csrfProtection = csrf({ cookie: true });

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 15,
});

router.post('/createUser', csrfProtection, userController.createUser);


module.exports = router;
