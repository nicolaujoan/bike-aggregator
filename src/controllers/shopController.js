const { getAllShops, getSingleShop, addShop, addShops, deleteShops } = require('../services/shopService');

exports.getAllShops = async function (req, res) {
    const { attributes, ...filters } = req.query;
    const shops = await getAllShops(attributes, filters);
    return res.send(shops);
}

exports.getSingleShop = async function (req, res) {
    const { attributes, ...filters } = req.query;
    const shop = await getSingleShop(attributes, filters);
    return shop ? res.send(shop) : res.status(404).send('No shop found');
}

exports.addShop = async function (req, res) {
    const shopToCreate = req.body;
    const createdShop = await addShop(shopToCreate);

    return createdShop ?
        res.status(201).send({ created: true, createdShop })
        : res.status(400).send({ created: false })
}

exports.addShops = async function (req, res) {
    const shopsToCreate = req.body;
    const createdShops = await addShops(shopsToCreate);

    return createdShops && createdShops.length ?
        res.status(201).send({ created: true, createdShops })
        : res.status(400).send({ created: false })
}

exports.deleteShops = async function (req, res) {
    const shopFilters = req.query;
    const deletedShopsCount = await deleteShops(shopFilters);
    return res.send({deletedCount: deletedShopsCount});
}