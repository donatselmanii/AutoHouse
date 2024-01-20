const express = require('express');
const router = express.Router();
const rolecontroller = require('../controllers/role.controller');


router.get('/', rolecontroller.getAllRoles);
router.post('/createRole', rolecontroller.createRole);

module.exports = router;
