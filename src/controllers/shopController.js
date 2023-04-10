const { getAllShopsAndCount, getShopById, updateShop, deleteShop, getSingleShop, addShop, addShops, deleteShops } = require('../services/shopService');

exports.getList = async function (req, res) {
    const [filter, range, sort] = Object.values(req.query).map(val => { val = JSON.parse(val); return val; });
    const shops = await getAllShopsAndCount(filter, range, sort);
    res.set('Access-Control-Expose-Headers', 'Content-Range');
    res.set('Content-Range', `categories 0-${range[1]}/${shops.count}`);
    return res.send(shops.rows);
}

exports.getOne = async function (req, res) {
    const id = req.params.id;
    const shop = await getShopById(id);
    if (shop) {
        return res.send(shop);
    }
    return res.status(404).send("SHOP NOT FOUND");
}

exports.update = async function (req, res) {
    const id = req.params.id;
    const data = req.body;
    const updatedRows = await updateShop(id, data);
    return res.status(200).send(data);
}

exports.delete = async function (req, res) {
    const id = req.params.id;
    const deletedId = await deleteShop(id);
    return res.status(200).send({ deletedId });
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