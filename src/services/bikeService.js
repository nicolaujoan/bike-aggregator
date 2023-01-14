const BikeRepository = require('../repositories/bikeRepository');
const Bike = require('../models/bike');

const bikeRepository = new BikeRepository(Bike); 

exports.findBike = function(attributes, filters) {
    return bikeRepository.findOne(attributes, filters);
}

exports.findAllBikes = function(attributes, filters) {
    return bikeRepository.findAll(attributes, filters);
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