const express = require('express');
const multer = require('multer');
const makeController = require('../controllers/make.controller');
const { verifyToken } = require('../utils/auth/verifyUser');
const { checkUserRole } = require('../utils/auth/authMiddleware');

const router = express.Router();
const upload = multer();

router.post('/upload-image', checkUserRole([1, 3]), upload.single('photo'), makeController.uploadImage);
router.get('/all-photos', verifyToken, makeController.getAllMakes);

module.exports = router;
