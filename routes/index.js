var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res) {
  // ########### TESTS #############################################

  try {
    const BikeRepository = require('../repositories/bikeRepository');
    const Bike = require('../models/bike');

    const myRepo = new BikesRepository(Bike);
    const bike = await myRepo.findByModel();
    console.log(bike);
  } catch (e) {
    console.log(e.message);
  }



  // ########### TESTS #############################################
});

module.exports = router;
