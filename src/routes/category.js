var express = require('express');
var router = express.Router();

const categoryController = require('../controllers/categoryController');

// let's transform the routes in order to be standarized for react admin

router.get('/', categoryController.getList);

router.get('/:id', categoryController.getOne);

router.put('/:id', categoryController.update);

router.delete('/:id', categoryController.delete);

router.get('/subcategories', categoryController.getAllSubcategories);

router.get('/parent-categories', categoryController.getAllParentCategories);

router.post('/add-category', categoryController.addCategory);

router.post('/add-categories', categoryController.addCategories);

module.exports = router;