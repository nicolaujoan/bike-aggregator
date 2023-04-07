const CategoryRepository = require('../repositories/categoryRepository');
const Category = require('../models/category');

const categoryRepository = new CategoryRepository(Category);

exports.getAllCategoriesAndCount = function (filter, range, sort) {
    const data = categoryRepository.findAndCountAll(filter, range, sort);
    return data;
}

exports.getAllCategories = function (attributes, filters) {
    const categories = categoryRepository.findAll(attributes, filters);
    return categories;
}

exports.updateCategory = function (id, data) {
    const updatedRows = categoryRepository.update(id, data);
    return updatedRows;
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

exports.addCategory = function (category) {
    return categoryRepository.addOne(category);
}

exports.addCategories = function (categories) {
    return categoryRepository.addMany(categories);
}