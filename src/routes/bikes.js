var express = require('express');
var router = express.Router();

const bikeController = require('../controllers/bikeController');

// READ
router.get('/', bikeController.getList);

router.get('/:id', bikeController.getOne);

router.put('/:id', bikeController.update);

router.delete('/:id', bikeController.delete);

// CREATE
router.post('/add-bike', bikeController.addBike);

router.post('/add-bikes', bikeController.addBikes);

// DELETE
router.delete('/delete', bikeController.deleteBikes);

module.exports = router;
