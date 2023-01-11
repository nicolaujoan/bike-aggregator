var express = require('express');
var router = express.Router();

const bikeController = require('../controllers/bikeController');

// READ
router.get('/', bikeController.getAllBikes);

router.get('/bike', bikeController.getSingleBike);

router.get('/:brand', bikeController.getAllBikesByBrand);

router.get('/bike/:brand', bikeController.getSingleBikeByBrand);

// CREATE

// DELETE

module.exports = router;
