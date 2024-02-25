const express = require('express');
const router = express.Router();
const extrasController = require('../controllers/extras.controller');

router.post('/', extrasController.createExtra);
router.get('/', extrasController.getAllExtras);
router.get('/:id', extrasController.getExtraById);
router.put('/:id', extrasController.updateExtra);
router.delete('/:id', extrasController.deleteExtra);

module.exports = router;
