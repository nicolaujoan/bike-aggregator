const CategoryRepository = require('../repositories/categoryRepository');
const Category = require('../repositories/categoryRepository');

const categoryRepository = new CategoryRepository(Category);

exports.getAllCategories = function (attributes, filters) {
    const categories = categoryRepository.findAll(attributes, filters);
    return categories;
}

exports.getCategoryById = function (id) {
    const category = categoryRepository.findOneById(id);
    return category;
}

exports.getAllParentCategories = function () {
    const parentCategories = categoryRepository.findAllParentCategories();
    return parentCategories;
}

exports.getAllSubcategories = function () {
    const subcategories = categoryRepository.findAllSubcategories();
    return subcategories;
}