const { findBikesByShop, findShopsByBike, rentBike, returnBike } = require('../services/availabilityService');

exports.getBikesByShop = async function (req, res) {
    const { attributes, ...filters } = req.query;
    const bikes = await findBikesByShop(filters, attributes);
    return res.send(bikes);
}

exports.getShopsByBike = async function (req, res) {
    const { attributes, ...filters } = req.query;
    const shops = await findShopsByBike(filters, attributes);
    return res.send(shops);
}

exports.rentBike = async function (req, res) {
    const { bikeId, shopId } = req.body;
    const rentedResponse = await rentBike(bikeId, shopId);
    return res.send(rentedResponse);
}

exports.returnBike = async function (req, res) {
    const { bikeId, shopId } = req.body;
    const returnedResponse = await returnBike(bikeId, shopId);
    return res.send(returnedResponse);
}