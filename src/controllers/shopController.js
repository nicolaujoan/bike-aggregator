const { getAllShops, getServicesByShopName } = require('../services/shopService');

exports.getAllShops = async function (req, res) {
    const { attributes, ...filters } = req.query;
    const shops = await getAllShops(attributes, filters);
    return res.send(shops);
}

exports.getServicesByShopName = async function (req, res) {
    const name = req.params.name;
    const shopOfferedServices = await getServicesByShopName(name);
    let response = shopOfferedServices ? shopOfferedServices : { message: 'No shops found with the provided name' }
    return res.send(response);
}