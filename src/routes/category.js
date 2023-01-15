var express = require('express');
var router = express.Router();

const categoryController = require('../controllers/categoryController');


router.get('/', categoryController.getAllCategories);

router.get('/category/:id', categoryController.getCategoryById);

router.get('/subcategories', categoryController.getAllSubcategories);

router.get('/parent-categories', categoryController.getAllParentCategories);

router.post('/add-category', categoryController.addCategory);

router.post('/add-categories', categoryController.addCategories);

module.exports = router;