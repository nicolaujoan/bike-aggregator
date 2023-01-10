const {getAllCategories, getCategoryById, getAllParentCategories, getAllSubcategories} = require('../services/categoryService');

exports.getAllCategories = async function (req, res) {
    const {attributes, ...filters} = req.query;
    const shops = getAllCategories(attributes, filters);
    res.send(shops);
}

exports.getCategoryById = async function (req, res) {
    const id = req.params.id;
    const shop = getCategoryById(id);
    if (shop) {
        res.send(shop);
    }
    res.status(404).send("SHOP NOT FOUND");
}

exports.getAllParentCategories = async function (req, res) {
    const parentCategories = getAllParentCategories();
    res.send(parentCategories);
}

exports.getAllSubcategories = async function (req, res) {
    const subcategories = getAllSubcategories();
    res.send(subcategories);
}
