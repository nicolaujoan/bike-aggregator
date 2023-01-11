var express = require('express');
var router = express.Router();

const availabilityController = require('../controllers/availabilityController');


// READ
router.get('/', availabilityController.getAvailability);

router.get('/bikes-by-shop', availabilityController.getBikesByShop);

router.get('/shops-by-bike', availabilityController.getShopsByBike);

// UPDATE
router.post('/rent-bike', availabilityController.rentBike);

router.post('/return-bike', availabilityController.returnBike);

module.exports = router;