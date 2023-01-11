const { findAllBikes, findBike, findBikeByBrand, findAllBikesByBrand, addBike, deleteBikes } = require('../services/bikeService');

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

exports.addBike = async function (req, res) {
    const bikeToCreate = req.body;
    const createdBike = await addBike(bikeToCreate);

    return createdBike ?
        res.status(201).send({ created: true, bike: createdBike })
        : res.status(400).send({ created: false })
}

exports.deleteBikes = async function (req, res) {
    const bikeFilters = req.query;
    const deletedBikesCount = await deleteBikes(bikeFilters);
    return res.send({deletedCount: deletedBikesCount});
}