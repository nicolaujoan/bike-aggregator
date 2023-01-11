var express = require('express');
var router = express.Router();

const categoryController = require('../controllers/categoryController');


// READ
router.get('/', categoryController.getAllCategories);

router.get('/category/:id', categoryController.getCategoryById);

router.get('/subcategories', categoryController.getAllSubcategories);

router.get('/parent-categories', categoryController.getAllParentCategories);

module.exports = router;