const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role.controller');
const { verifyToken } = require('../utils/auth/verifyUser');
const { checkUserRole } = require('../utils/auth/authMiddleware');

router.get('/', verifyToken, checkUserRole([1, 3]), roleController.getAllRoles);
router.post('/createRole', checkUserRole([1]), verifyToken, roleController.createRole);

module.exports = router;
