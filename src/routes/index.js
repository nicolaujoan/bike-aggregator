var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res) {
  // ########### TESTS #############################################

  try {
    const BikeRepository = require('../repositories/bikeRepository');
    const Bike = require('../models/bike');

    const myRepo = new BikeRepository(Bike);
    const bike = await myRepo.findByModel();
    console.log(bike);
    res.send(bike);
  } catch (e) {
    console.log(e.message);
    res.send('error bro');
  }



  // ########### TESTS #############################################
});

module.exports = router;
