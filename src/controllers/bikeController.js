const { getAllBikesAndCount,  getBikeById, updateBike, deleteBike, findBike, findBikeByBrand, findAllBikesByBrand, addBike, deleteBikes, addBikes } = require('../services/bikeService');

exports.getList = async function (req, res) {
    const [filter, range, sort] = Object.values(req.query).map(val => { val = JSON.parse(val); return val; });
    const bikes = await getAllBikesAndCount(filter, range, sort);
    res.set('Access-Control-Expose-Headers',
        'Content-Range');
    res.set('Content-Range', `bikes 0-${range[1]}/${bikes.count}`);
    return res.send(bikes.rows);
}

exports.getOne = async function (req, res) {
    const id = req.params.id;
    const bike = await getBikeById(id);
    if (bike) {
        return res.send(bike);
    }
    return res.status(404).send("BIKE NOT FOUND");
}

exports.update = async function (req, res) {
    const id = req.params.id;
    const data = req.body;
    const updatedRows = await updateBike(id, data);
    return res.status(200).send(data);
}

exports.delete = async function (req, res) {
    const id = req.params.id;
    const deletedId = await deleteBike(id);
    return res.status(200).send({ deletedId });
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
        res.status(201).send({ created: true, createdBike })
        : res.status(400).send({ created: false })
}

exports.addBikes = async function (req, res) {
    const bikesToCreate = req.body;
    const createdBikes = await addBikes(bikesToCreate);

    return createdBikes && createdBikes.length ?
        res.status(201).send({ created: true, createdBikes })
        : res.status(400).send({ created: false })
}

exports.deleteBikes = async function (req, res) {
    const bikeFilters = req.query;
    const deletedBikesCount = await deleteBikes(bikeFilters);
    return res.send({ deletedCount: deletedBikesCount });
}