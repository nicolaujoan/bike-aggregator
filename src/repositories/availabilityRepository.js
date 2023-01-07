function AvailabilityRepository(model) {
    this.model = model;
}

AvailabilityRepository.prototype.findAll = function (attributes, filters) {
    return this.model._findAll(attributes, filters);
}

AvailabilityRepository.prototype.findOne = function () {
    return this.model._findOne(attributes, filters);
}

AvailabilityRepository.prototype.findBikesFromShop = function (shop) {
    return this.model.findBikesFromShop(shop);
}

AvailabilityRepository.prototype.findShopsByBike = function (bike) {
    return this.model.findShopsByBike(bike);
}

module.exports = AvailabilityRepository;