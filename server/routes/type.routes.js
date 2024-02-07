const express = require('express');
const router = express.Router();
const typeController = require('../controllers/type.controller');
const { verifyToken } = require('../utils/auth/verifyUser');
const { checkUserRole } = require('../utils/auth/authMiddleware');

router.post('/createType', typeController.createType);
router.delete('/deleteType/:id', typeController.deleteType);
router.put('/editTypeName/:id', typeController.editTypeName);
router.put('/editNumberOfCars/:id', typeController.editNumberOfCars);
router.get('/getAllTypes', typeController.getAllTypes);

module.exports = router;