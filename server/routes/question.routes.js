const express = require('express');
const router = express.Router();
const questionController = require('../controllers/question.controller');
const csrf = require('csurf');


router.get('/getAllQuestions', questionController.getAllQuestions);
router.post('/createQuestion', questionController.createQuestion);

module.exports = router;