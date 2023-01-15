var express = require('express');
var router = express.Router();

const bikeController = require('../controllers/bikeController');

// READ
router.get('/', bikeController.getAllBikes);

router.get('/bike', bikeController.getSingleBike);

// CREATE
router.post('/add-bike', bikeController.addBike);

router.post('/add-bikes', bikeController.addBikes);

// DELETE
router.delete('/delete', bikeController.deleteBikes);

module.exports = router;
