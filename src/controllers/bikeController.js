const { findAllBikes, findBike, findBikeByBrand, findAllBikesByBrand } = require('../services/bikeService');

exports.getAllBikes = async function (req, res) {
    let { attributes, ...filters } = req.query;
    const bikes = await findAllBikes(attributes, filters);
    return res.send(bikes);
}

exports.getAllBikesByBrand = async function (req, res) {
    const brand = req.params.brand;
    const bikes = await findAllBikesByBrand(brand);
    return res.send(bikes);
}

exports.getSingleBike = async function (req, res) {
    let { attributes, ...filters } = req.query;
    const bike = await findBike(attributes, filters);
    return res.send(bike);
}

exports.getSingleBikeByBrand = async function (req, res) {
    const brand = req.params.brand;
    const bike = await findBikeByBrand(brand);
    return res.send(bike);
}