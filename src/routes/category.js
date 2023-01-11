var express = require('express');
var router = express.Router();

const categoryController = require('../controllers/categoryController');


// READ
router.get('/', categoryController.getAllCategories);

// router.get('/{id}', categoryController.getCategoryById);

router.get('/subcategories', categoryController.getAllParentCategories);

router.get('/parent-categories', categoryController.getAllSubcategories);

module.exports = router;