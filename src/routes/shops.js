var express = require('express');
var router = express.Router();

const shopsController = require('../controllers/shopController');

router.get('/', shopsController.getList);

router.get('/:id', shopsController.getOne);

router.put('/:id', shopsController.update);

router.delete('/:id', shopsController.delete);

router.get('/shop/', shopsController.getSingleShop);

router.post('/add-shop', shopsController.addShop);

router.post('/add-shops', shopsController.addShops);

router.delete('/delete', shopsController.deleteShops);

module.exports = router;