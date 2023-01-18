const { getAllCategories, getCategoryById, getAllParentCategories, getAllSubcategories, addCategories, addCategory } = require('../services/categoryService');

exports.getAllCategories = async function (req, res) {
    const { attributes, ...filters } = req.query;
    const shops = await getAllCategories(attributes, filters);
    return res.send(shops);
}

exports.getCategoryById = async function (req, res) {
    const id = req.params.id;
    const shop = await getCategoryById(id);
    if (shop) {
        return res.send(shop);
    }
    return res.status(404).send("SHOP NOT FOUND");
}

exports.getAllParentCategories = async function (req, res) {
    const parentCategories = await getAllParentCategories();
    return res.send(parentCategories);
}

exports.getAllSubcategories = async function (req, res) {
    const subcategories = await getAllSubcategories();
    return res.send(subcategories);
}

exports.addCategory = async function (req, res) {
    const categoryToCreate = req.body;
    const createdCategory = await addCategory(categoryToCreate);

    return createdCategory ?
        res.status(201).send({ created: true, createdCategory })
        : res.status(400).send({ created: false })
}

exports.addCategories = async function (req, res) {
    const categoriesToCreate = req.body;
    const createdCategories = await addCategories(categoriesToCreate);

    return createdCategories && createdCategories.length ?
        res.status(201).send({ created: true, createdCategories })
        : res.status(400).send({ created: false })
}
