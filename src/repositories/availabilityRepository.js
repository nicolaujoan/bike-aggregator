function AvailabilityRepository(model) {
    this.model = model;
}

AvailabilityRepository.prototype.findAll = function (attributes, filters) {
    return this.model._findAll(attributes, filters);
}

AvailabilityRepository.prototype.findBikesByShop = function (shopFilter, bikeAttributes) {
    return this.model.findBikesByShop(shopFilter, bikeAttributes);
}

AvailabilityRepository.prototype.findShopsByBike = function (bikeFilter, shopAttributes) {
    return this.model.findShopsByBike(bikeFilter, shopAttributes);
}

AvailabilityRepository.prototype.findByPk = function (bikeId, shopId) {
    return this.model._findByPk(bikeId, shopId);
}

AvailabilityRepository.prototype.update = function (updateAvailabilityDTO) {
    return this.model._update(updateAvailabilityDTO);
}

module.exports = AvailabilityRepository;