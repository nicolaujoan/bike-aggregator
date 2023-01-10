var express = require('express');
var router = express.Router();

const controller = require('../controllers/availabilityController');


// READ
router.get('/bikes-by-shop', controller.getBikesByShop);

router.get('/shops-by-bike', controller.getShopsByBike);

// UPDATE
router.post('rent-bike', controller.rentBike);

router.post('return-bike', controller.returnBike);

module.exports = router;