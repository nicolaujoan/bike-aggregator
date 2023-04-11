const BikeRepository = require('../repositories/bikeRepository');
const Bike = require('../models/bike');

const bikeRepository = new BikeRepository(Bike);

exports.getAllBikesAndCount = function (filter, range, sort) {
    const data = bikeRepository.findAndCountAll(filter, range, sort);
    return data;
}

exports.getBikeById = function (id) {
    const bike = bikeRepository.findOne(null, { id });
    return bike;
}

exports.findBike = function (attributes, filters) {
    return bikeRepository.findOne(attributes, filters);
}

exports.findAllBikes = function (attributes, filters) {
    return bikeRepository.findAll(attributes, filters);
}

exports.updateBike = function (id, data) {
    const updatedRows = bikeRepository.update(id, data);
    return updatedRows;
}

exports.deleteBike = function (id) {
    const deletedId = bikeRepository.delete(id);
    return deletedId;
}

exports.addBike = function (bike) {
    return bikeRepository.addOne(bike);
}

exports.addBikes = function (bikes) {
    return bikeRepository.addMany(bikes);
}

exports.deleteBikes = function (bikeFilters) {
    return bikeRepository.delete(bikeFilters);
}
