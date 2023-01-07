function AvailabilityRepository(model) {
    this.model = model;
}

AvailabilityRepository.prototype.findAll = function (attributes, filters) {
    return this.model._findAll(attributes, filters);
}

AvailabilityRepository.prototype.findOne = function () {
    return this.model._findOne(attributes, filters);
}

AvailabilityRepository.prototype.findBikesByShop = function (shopFilter, bikeAttributes) {
    return this.model.findBikesByShop(shopFilter, bikeAttributes);
}

AvailabilityRepository.prototype.findShopsByBike = function (bikeFilter, shopAttributes) {
    return this.model.findShopsByBike(bikeFilter, shopAttributes);
}

module.exports = AvailabilityRepository;