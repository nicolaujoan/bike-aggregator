const { getAllShops, getServicesByShopName } = require('../services/shopService');

exports.getAllShops = function (req, res) {
    const { attributes, ...filters } = req.query;
    const shops = getAllShops(attributes, filters);
    res.send(shops);
}

exports.getServicesByShopName = function (req, res) {
    const name = req.params.name;
    const shopOfferedServices = getServicesByShopName(name);
    res.send(shopOfferedServices);
}