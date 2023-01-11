var express = require('express');
var router = express.Router();

const bikeController = require('../controllers/bikeController');

// READ
router.get('/', bikeController.getAllBikes);

router.get('/bike', bikeController.getSingleBike);

router.get('/:brand', bikeController.getAllBikesByBrand);

router.get('/bike/:brand', bikeController.getSingleBikeByBrand);

router.delete('/delete', bikeController.deleteBikes);  // mirar si acepta req params

router.post('/add-bike', bikeController.addBike);  // pasar body de bici a crear

// CREATE

// DELETE

module.exports = router;
