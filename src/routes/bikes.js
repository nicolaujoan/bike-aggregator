var express = require('express');
var router = express.Router();

const controller = require('../controllers/bikeController');

// READ
router.get('/', controller.getAllBikes);

router.get('/bike', controller.getSingleBike);

router.get('/:brand', controller.getAllBikesByBrand);

router.get('/bike/:brand', controller.getSingleBikeByBrand);

// CREATE

// UPDATE

// DELETE

module.exports = router;
