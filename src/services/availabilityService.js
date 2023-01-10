const AvailabilityRepository = require('../repositories/availabilityRepository');
const Availability = require('../models/availability');

const availabilityRepository = new AvailabilityRepository(Availability); 

exports.findBikesByShop = function (shopFilter, bikeAttributes) {
    const bikes = availabilityRepository.findBikesByShop(shopFilter, bikeAttributes);
    return bikes;
}

exports.findShopsByBike = function (bikeFilter, shopAttributes) {
    const shops = availabilityRepository.findShopsByBike(bikeFilter, shopAttributes);
    return shops;
}

exports.rentBike = function(bikeId, shopId) {
    const rentedResponse = availabilityRepository.rentBike(bikeId, shopId);
    return 
}

exports.returnBike = function(bikeId, shopId) {

}