const express = require('express');
const multer = require('multer');
const makesController = require('../controllers/makes.controller');
const { verifyToken } = require('../utils/auth/verifyUser');
const { checkUserRole } = require('../utils/auth/authMiddleware');

const router = express.Router();
const upload = multer({
    limits: { fileSize: 10 * 1024 * 1024 }
});

router.post('/upload-image', checkUserRole([1, 3]), upload.single('photo'), makesController.uploadImage);
router.get('/all-photos', verifyToken, makesController.getAllMakes);

module.exports = router;