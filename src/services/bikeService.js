const BikeRepository = require('../repositories/bikeRepository');
const Bike = require('../models/bike');

const Repo = new BikeRepository(Bike); 

exports.findBike = function(attributes, filters) {
    return Repo.findOne(attributes, filters);
}

exports.findAllBikes = function(attributes, filters) {
    return Repo.findAll(attributes, filters);
}

exports.findBikeByBrand = function(brand) {
    return Repo.findOneByBrand(brand);
}

exports.findAllBikesByBrand = function(brand) {
    return Repo.findManyByBrand(brand);
}