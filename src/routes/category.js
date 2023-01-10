var express = require('express');
var router = express.Router();

const controller = require('../controllers/categoryController');


// READ
router.get('/', controller.getAllCategories);

router.get('/{id}', controller.getCategoryById);

router.get('/subcategories', controller.getAllParentCategories);

router.get('/parent-categories', controller.getAllSubcategories);

module.exports = router;