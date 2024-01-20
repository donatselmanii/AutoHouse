const express = require('express');
const rateLimit = require('express-rate-limit');
const csrf = require('csurf');
const router = express.Router();
const authcontroller = require('../controllers/auth.controller');

//const csrfProtection = csrf({ cookie: true });

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 15,
  message: 'Too many login attempts from this IP, please try again later.',
});

router.post('/signin', limiter, authcontroller.signin);
router.post('/register', limiter, authcontroller.signup);

module.exports = router;
