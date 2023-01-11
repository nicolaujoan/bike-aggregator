var express = require('express');
var router = express.Router();

const shopsController = require('../controllers/shopController');

router.get('/', shopsController.getAllShops);

router.get('/services/:name', shopsController.getServicesByShopName);

module.exports = router;