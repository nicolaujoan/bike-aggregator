const BikeRepository = require('../repositories/bikeRepository');
const Bike = require('../models/bike');

const bikeRepository = new BikeRepository(Bike); 

exports.findBike = function(attributes, filters) {
    return bikeRepository.findOne(attributes, filters);
}

exports.findAllBikes = function(attributes, filters) {
    return bikeRepository.findAll(attributes, filters);
}

exports.findBikeByBrand = function(brand) {
    return bikeRepository.findOneByBrand(brand);
}

exports.findAllBikesByBrand = function(brand) {
    return bikeRepository.findManyByBrand(brand);
}

exports.addBike = function (bike) {
    return bikeRepository.addBike(bike);
}

exports.deleteBikes = function (bikeFilters) {
    return bikeRepository.deleteBike(bikeFilters);
}