const express = require('express');
const router = express.Router();
const fuelController = require('../controllers/fuel.controller');

router.get('/getAllFuels', fuelController.getAllFuels);
router.post('/createFuel', fuelController.createFuel);
router.delete('/deleteFuel/:id', fuelController.deleteFuel);
router.put('/editFuelName/:id', fuelController.editFuelName);

module.exports = router;
