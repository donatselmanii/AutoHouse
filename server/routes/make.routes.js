const express = require('express');
const multer = require('multer');
const makeController = require('../controllers/make.controller');

const router = express.Router();
const upload = multer();

router.post('/upload-image', upload.single('photo'), makeController.uploadImage);
router.get('/all-photos', makeController.getAllMakes);

module.exports = router;
