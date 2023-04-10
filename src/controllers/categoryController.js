const { getAllCategories, getCategoryById, getAllParentCategories, getAllSubcategories, addCategories, addCategory, getAllCategoriesAndCount, updateCategory, deleteCategory } = require('../services/categoryService');

// works fine with ra
exports.getList = async function (req, res) {
    const [filter, range, sort] = Object.values(req.query).map(val => { val = JSON.parse(val); return val; });
    const categories = await getAllCategoriesAndCount(filter, range, sort);

    // pd estos headers son necesarios para que no se queje el data provider
    res.set('Access-Control-Expose-Headers', 'Content-Range');
    res.set('Content-Range', `categories 0-${range[1]}/${categories.count}`);
    return res.send(categories.rows);
}

// works fine with ra
exports.getOne = async function (req, res) {
    const id = req.params.id;
    const category = await getCategoryById(id);
    if (category) {
        return res.send(category);
    }
    return res.status(404).send("SHOP NOT FOUND");
}

// works fine with ra
exports.update = async function (req, res) {
    const id = req.params.id;
    const data = req.body;
    const updatedRows = await updateCategory(id, data);
    return res.status(200).send(data);
}

exports.delete = async function (req, res) {
    const id = req.params.id;
    const deletedId = await deleteCategory(id);
    return res.status(200).send({ deletedId });
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
