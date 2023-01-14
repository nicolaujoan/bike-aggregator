function ShopRepository(model) {
    this.model = model;
}

ShopRepository.prototype.findAll = function (attributes, filters) {
    return this.model._findAll(attributes, filters);
}

// this can be moved to the services too, or just using filters is enough
ShopRepository.prototype.findServicesByShopName = function (shopName) {
    return this.model.findServicesByName(shopName);
}

module.exports = ShopRepository;