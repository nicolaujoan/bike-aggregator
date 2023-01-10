var express = require('express');
var router = express.Router();

const controller = require('../controllers/shopController');

router.get('/', controller.getAllShops);

router.get('/services/{name}', controller.getServicesByShopName);

module.exports = router;