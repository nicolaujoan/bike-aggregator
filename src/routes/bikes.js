var express = require('express');
var router = express.Router();

// Controller
const bikes_controller = require('../controllers/bikeController');

/* GET users listing. */
router.get('/', bikes_controller.getAllBikes);

module.exports = router;
